import nodemailer from 'nodemailer';

import { render } from '@react-email/render';

import InvitationEmailTemplate from '@/components/InvitationEmailTemplate';

import type { FVAgreement } from '@/components/InvitationForm';

export async function POST(request: Request) {
  const body = (await request.json()) as FVAgreement;

  try {
    const transport = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_FROM_USER,
        pass: process.env.GMAIL_FROM_PASS,
      },
    });

    await transport.sendMail({
      from: `${body.guests[0].name_surname} <${process.env.GMAIL_FROM_USER}>`,
      to: process.env.GMAIL_DESTINATION,
      subject: 'Հարսանեկան հրավերքի պատասխան',
      html: render(<InvitationEmailTemplate {...body} />),
    });

    return Response.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error: unknown) {
    return Response.json({ ...(error as Record<string, unknown>) }, { status: 500 });
  }
}
