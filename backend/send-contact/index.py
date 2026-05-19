import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import psycopg2


def handler(event: dict, context) -> dict:
    """Отправка заявки/отзыва с сайта ООО АМК Спец на email и сохранение в БД."""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    message = body.get('message', '').strip()
    mode = body.get('mode', 'contact')
    rating = int(body.get('rating', 5))

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Имя и телефон обязательны'}, ensure_ascii=False)
        }

    if mode == 'review':
        conn = psycopg2.connect(os.environ['DATABASE_URL'])
        cur = conn.cursor()
        name_s = name.replace("'", "''")
        phone_s = phone.replace("'", "''")
        message_s = message.replace("'", "''")
        cur.execute(f"INSERT INTO reviews (name, phone, message, rating) VALUES ('{name_s}', '{phone_s}', '{message_s}', {int(rating)})")
        conn.commit()
        cur.close()
        conn.close()

    smtp_user = 'ooo.yk.amk.spec@yandex.ru'
    smtp_password = os.environ['SMTP_PASSWORD']

    subject = f'Новый отзыв с сайта — {name}' if mode == 'review' else f'Новая заявка с сайта — {name}'
    title = 'Новый отзыв с сайта ООО АМК Спец' if mode == 'review' else 'Новая заявка с сайта ООО АМК Спец'

    msg = MIMEMultipart('alternative')
    msg['Subject'] = subject
    msg['From'] = smtp_user
    msg['To'] = smtp_user

    html = f"""
    <h2>{title}</h2>
    <p><b>Имя:</b> {name}</p>
    <p><b>Телефон:</b> {phone}</p>
    <p><b>Сообщение:</b> {message if message else '—'}</p>
    """

    msg.attach(MIMEText(html, 'html'))

    with smtplib.SMTP_SSL('smtp.yandex.ru', 465) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, smtp_user, msg.as_string())

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'success': True})
    }