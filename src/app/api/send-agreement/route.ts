import type { ReactElement } from 'react';
import { Resend } from 'resend';

import InvitationEmailTemplate from '@/components/InvitationEmailTemplate';
import type { InvitationEmailTemplateProps } from '@/components/InvitationEmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const { data, error } = await resend.emails.send({
      from: 'Tigran & Mariam Invitation <borisov.vahe.99@tigran-mariam.wedding>',
      to: 'borisov.vahe.99@gmail.com',
      subject: 'Invitation',
      react: InvitationEmailTemplate(body as InvitationEmailTemplateProps) as ReactElement,
    });

    if (error) {
      return Response.json({ ...error }, { status: 400 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
