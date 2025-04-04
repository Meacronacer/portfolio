import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const { email, subject, message } = await request.json();

  // Настройка транспондера для отправки письма
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // например, smtp.gmail.com
    port: Number(process.env.SMTP_PORT), // обычно 465 (SSL) или 587 (TLS)
    secure: Number(process.env.SMTP_PORT) === 465, // true для 465, false для других портов
    auth: {
      user: process.env.SMTP_USER, // ваш SMTP логин
      pass: process.env.SMTP_PASS, // ваш SMTP пароль или app password
    },
  });

  try {
    // Отправка письма
    const info = await transporter.sendMail({
      from: `"Мой сайт" <${process.env.SMTP_USER}>`,
      to: process.env.YOUR_EMAIL, // ваш email, куда будут приходить письма
      subject: subject,
      text: message,
      html: `<p><strong>Email отправителя:</strong> ${email}</p><p>${message}</p>`,
    });
    console.log("Сообщение отправлено: %s", info.messageId);
    return NextResponse.json(
      { message: "Письмо успешно отправлено" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Ошибка при отправке письма:", error);
    return NextResponse.json(
      { error: "Ошибка при отправке письма" },
      { status: 500 }
    );
  }
}
