import type { FVAgreement } from '@/components/InvitationForm';

export type InvitationEmailTemplateProps = Readonly<FVAgreement>;

export default function InvitationEmailTemplate({
  agreement,
  guests,
}: InvitationEmailTemplateProps) {
  return (
    <div>
      <div className="flex gap-[5px]">
        <span>agree:</span>
        <span>{agreement}</span>
      </div>
      <div>
        {guests.map(({ name_surname }) => (
          <div key={name_surname}>{name_surname}</div>
        ))}
      </div>
    </div>
  );
}
