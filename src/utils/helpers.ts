import { createTranslator } from 'next-intl';

import type { InvitationPlacesCardType, PlacesNames } from '@/utils/constants';
import { specialPlacesNames, placesNames, places_address_urls } from '@/utils/constants';

import type { Locale } from '@/locales';
import type { MessagesDefaultType } from '@/i18n';

type GetInvitationPlacesArg = {
  locale: Locale;
  special: boolean;
};

export const getCoreMessages = async ({ locale }: Pick<GetInvitationPlacesArg, 'locale'>) => {
  const messages = (await import(`../../messages/${locale}.json`)) as MessagesDefaultType;
  return messages.default;
};

export async function getInvitationPlaces({
  locale = 'hy',
  special = false,
}: GetInvitationPlacesArg): Promise<InvitationPlacesCardType[]> {
  const messages = await getCoreMessages({ locale });
  const t = createTranslator({ locale, messages, namespace: 'InvitationPlaces' });

  const places: PlacesNames[] = special ? specialPlacesNames : placesNames;

  return places.map(place => ({
    src: `/images/places/${place}.png`,
    invitation_name: t(`${place}.invitation_name`),
    time: t(`${place}.time`),
    place_name: t(`${place}.place_name`),
    place_address_url: places_address_urls[place],
  }));
}
