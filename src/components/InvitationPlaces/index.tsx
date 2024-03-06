import { useTranslations } from 'next-intl';

import type { InvitationPlacesCardType } from '@/utils/constants';
import InvitationPlaceCard from '@/components/InvitationPlaces/elements/InvitationPlaceCard';

export type InvitationPlacesProps = {
  places: InvitationPlacesCardType[];
};

export default function InvitationPlaces({ places }: InvitationPlacesProps) {
  const t = useTranslations('InvitationPlaces');

  return (
    <div className="flex items-center justify-center flex-col gap-[120px] py-[30px] bg-[#FFF]">
      {places.map((place, index) => (
        <InvitationPlaceCard key={place.place_name} index={index} place={place} />
      ))}
      <div className="flex flex-col gap-[15px] items-center justify-center">
        <span className="text-xl md:text-2xl text-center px-[40px]">{t('waiting_with_love')}</span>
        <span className="text-md md:text-xl font-light text-center px-[40px]">
          {t('waiting_for_reply')}
        </span>
      </div>
    </div>
  );
}
