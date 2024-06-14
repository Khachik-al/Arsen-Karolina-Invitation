import {Column, Font, Head, Html, Row, Tailwind} from '@react-email/components';

import type {FVAgreement} from '@/components/InvitationForm';

export type InvitationEmailTemplateProps = Readonly<FVAgreement>;

export default function InvitationEmailTemplate({
                                                  agreement,
                                                  guests,
                                                }: InvitationEmailTemplateProps) {
  return (
    <Html lang="en">
      <Head>
        <Font
          fontFamily="Inter"
          fallbackFontFamily="sans-serif"
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Tailwind>
        <Column>
          <Row className="gap-4">
            <Column>{agreement}</Column>
          </Row>
          <Row className="px-1">
            <Column>
              {guests.map(({name_surname}) => (
                <Row key={name_surname}>{name_surname}</Row>
              ))}
            </Column>
          </Row>
        </Column>
      </Tailwind>
    </Html>
  );
}
