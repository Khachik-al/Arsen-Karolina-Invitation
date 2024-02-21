import Link from 'next/link';
import Image from 'next/image';

import { useTranslations } from 'next-intl';

import type { InvitationPlacesCardType } from '@/utils/constants';

type InvitationPlaceCardProps = {
  place: InvitationPlacesCardType;
};

export default function InvitationPlaceCard({ place }: InvitationPlaceCardProps) {
  const t = useTranslations('InvitationPlaces');
  return (
    <div className="flex flex-col gap-[10px] items-center justify-center">
      <Image src={place.src} alt={place.place_name} width={300} height={300} priority />
      <span>{place.invitation_name}</span>
      <span>{place.time}</span>
      <span>{place.place_name}</span>
      <span>{place.place_address}</span>
      <Link
        href={place.place_address_url}
        className="px-[30px] py-[5px] rounded-[50px] border-2 border-[#FFFFFF]"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('how_to_get_there')}
      </Link>
    </div>
  );
}
