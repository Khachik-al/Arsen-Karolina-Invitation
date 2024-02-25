'use client';

import type { InvitationPlacesCardType } from '@/utils/constants';
import InvitationPlaceCard from '@/components/InvitationPlaces/elements/InvitationPlaceCard';
import Image from 'next/image';

export type InvitationPlacesProps = {
  places: InvitationPlacesCardType[];
};

export default function InvitationPlaces({ places }: InvitationPlacesProps) {
  return (
    <div className="flex items-center justify-center flex-col gap-[120px] py-[30px] bg-[#FFF]">
      {places.map(place => (
        <InvitationPlaceCard key={place.place_name} place={place} />
      ))}
      <div className="flex flex-col gap-[15px] items-center justify-center">
        {/*<Image src={place.src} alt={place.place_name} width={300} height={300} priority />*/}
        <span className="text-xl font-light text-center uppercase px-[40px]">
          Սիրով սպասում ենք Ձեզ
        </span>
      </div>
    </div>
  );
}
