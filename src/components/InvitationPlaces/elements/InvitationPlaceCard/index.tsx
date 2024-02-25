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
    <div className="flex flex-col gap-[15px] items-center justify-center">
      <Image src={place.src} alt={place.place_name} width={300} height={300} priority />
      <span className="text-xl font-light text-center uppercase px-[40px]">
        {place.invitation_name}
      </span>
      <span className="text-xl font-bold">{place.time}</span>
      <span className="text-xl font-bold text-center px-[50px]">{place.place_name}</span>
      <Link
        href={place.place_address_url}
        className="px-[30px] py-[8px] mt-5 rounded-[50px] border-[3px] border-[#000000] text-lg font-bold"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('how_to_get_there')}
      </Link>
    </div>
  );
}
