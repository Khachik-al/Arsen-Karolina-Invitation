import type { RootLayoutProps } from '@/app/[locale]/layout';

import Invitation from '@/components/Invitation';
import WeddingDate from '@/components/WeddingDate';
import InvitationPlaces from '@/components/InvitationPlaces';
import InvitationForm from '@/components/InvitationForm';

import { getInvitationPlaces } from '@/utils/helpers';

export default async function Home({ params: { locale } }: Pick<RootLayoutProps, 'params'>) {
  const places = await getInvitationPlaces({ locale, special: false });

  return (
    <div>
      <Invitation locale={locale} />
      <WeddingDate locale={locale} />
      <InvitationPlaces places={places} />
      <InvitationForm />
    </div>
  );
}
