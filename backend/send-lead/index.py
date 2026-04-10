"""
Отправка заявки с сайта AMI GROUP на почту и в Telegram.
Принимает имя и телефон, уведомляет менеджера.
"""
import json
import os
import urllib.request
import urllib.parse
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime


def send_telegram(name: str, phone: str) -> None:
    token = os.environ.get("TELEGRAM_BOT_TOKEN", "")
    chat_id = os.environ.get("TELEGRAM_CHAT_ID", "")
    if not token or not chat_id:
        return

    now = datetime.now().strftime("%d.%m.%Y %H:%M")
    text = (
        f"🏠 *Новая заявка — AMI GROUP*\n\n"
        f"👤 Имя: {name}\n"
        f"📞 Телефон: {phone}\n"
        f"🕐 Время: {now}"
    )

    data = urllib.parse.urlencode({
        "chat_id": chat_id,
        "text": text,
        "parse_mode": "Markdown"
    }).encode()

    req = urllib.request.Request(
        f"https://api.telegram.org/bot{token}/sendMessage",
        data=data,
        method="POST"
    )
    urllib.request.urlopen(req, timeout=10)


def send_email(name: str, phone: str) -> None:
    smtp_user = os.environ.get("SMTP_USER", "")
    smtp_password = os.environ.get("SMTP_PASSWORD", "")
    smtp_host = os.environ.get("SMTP_HOST", "smtp.mail.ru")
    smtp_port = int(os.environ.get("SMTP_PORT", "465"))
    if not smtp_user or not smtp_password:
        return

    now = datetime.now().strftime("%d.%m.%Y %H:%M")

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"Новая заявка с сайта — {name}"
    msg["From"] = smtp_user
    msg["To"] = smtp_user

    html = f"""<html><body style="font-family: Arial, sans-serif; color: #222;">
      <h2>Новая заявка — AMI GROUP</h2>
      <table>
        <tr><td><b>Имя:</b></td><td>{name}</td></tr>
        <tr><td><b>Телефон:</b></td><td>{phone}</td></tr>
        <tr><td><b>Время:</b></td><td>{now}</td></tr>
      </table>
    </body></html>"""
    msg.attach(MIMEText(html, "html", "utf-8"))

    with smtplib.SMTP_SSL(smtp_host, smtp_port, timeout=15) as server:
        server.login(smtp_user, smtp_password)
        server.sendmail(smtp_user, smtp_user, msg.as_string())


def handler(event: dict, context) -> dict:
    """Обработчик заявки с сайта AMI GROUP — отправляет письмо на почту и уведомление в Telegram."""
    cors_headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": cors_headers, "body": ""}

    body = json.loads(event.get("body") or "{}")
    name = body.get("name", "").strip()
    phone = body.get("phone", "").strip()

    if not name or not phone:
        return {
            "statusCode": 400,
            "headers": cors_headers,
            "body": json.dumps({"error": "Заполните имя и телефон"})
        }

    send_telegram(name, phone)
    send_email(name, phone)

    return {
        "statusCode": 200,
        "headers": cors_headers,
        "body": json.dumps({"success": True, "message": "Заявка отправлена"})
    }