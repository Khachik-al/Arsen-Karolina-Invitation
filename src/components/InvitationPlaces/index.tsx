'use client';

import type { InvitationPlacesCardType } from '@/utils/constants';
import InvitationPlaceCard from '@/components/InvitationPlaces/elements/InvitationPlaceCard';

export type InvitationPlacesProps = {
  places: InvitationPlacesCardType[];
};

export default function InvitationPlaces({ places }: InvitationPlacesProps) {
  return (
    <div className="flex items-center justify-center flex-col gap-[30px] py-[30px] bg-sky-100">
      {places.map(place => (
        <InvitationPlaceCard key={place.place_name} place={place} />
      ))}
    </div>
  );
}
