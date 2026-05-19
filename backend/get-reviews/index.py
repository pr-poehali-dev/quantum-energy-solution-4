import json
import os
import urllib.parse
import pg8000.native


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

    p = urllib.parse.urlparse(os.environ['DATABASE_URL'])
    conn = pg8000.native.Connection(
        user=p.username, password=p.password,
        host=p.hostname, port=p.port or 5432,
        database=p.path.lstrip('/')
    )
    rows = conn.run(
        "SELECT id, name, message, rating, created_at FROM reviews ORDER BY created_at DESC"
    )
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