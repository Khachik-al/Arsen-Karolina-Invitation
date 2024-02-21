import Invitation from '@/components/Invitation';
import WeddingDate from '@/components/WeddingDate';
import InvitationPlaces from '@/components/InvitationPlaces';

import type { RootLayoutProps } from '@/app/[locale]/layout';

import { getInvitationPlaces } from '@/utils/helpers';

export default async function Home({ params: { locale } }: Pick<RootLayoutProps, 'params'>) {
  const places = await getInvitationPlaces({ locale, special: false });

  return (
    <div>
      <Invitation />
      <WeddingDate />
      <InvitationPlaces places={places} />
    </div>
  );
}
