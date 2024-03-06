import nodemailer from 'nodemailer';

import { render } from '@react-email/render';

import InvitationEmailTemplate from '@/components/InvitationEmailTemplate';

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_FROM_USER,
        pass: process.env.GMAIL_FROM_PASS,
      },
    });

    await transport.sendMail({
      from: 'Tigran & Mariam <borisov.vahe.99@gmail.com>',
      to: process.env.GMAIL_DESTINATION,
      subject: 'Wedding Invitation',
      html: render(<InvitationEmailTemplate {...body} />),
    });

    return Response.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    return Response.json({ ...error }, { status: error.status ?? 500 });
  }
}
