import json
import os
import psycopg2


def handler(event: dict, context) -> dict:
    """Получение списка отзывов из БД."""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()
    cur.execute("SELECT id, name, message, rating, created_at FROM reviews ORDER BY created_at DESC")
    rows = cur.fetchall()
    cur.close()
    conn.close()

    reviews = []
    for row in rows:
        reviews.append({
            'id': row[0],
            'name': row[1],
            'message': row[2] or '',
            'rating': row[3],
            'created_at': row[4].strftime('%B %Y') if row[4] else '',
        })

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'reviews': reviews}, ensure_ascii=False)
    }