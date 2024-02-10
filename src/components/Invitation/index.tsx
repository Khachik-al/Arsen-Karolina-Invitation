import type { CSSProperties } from 'react';
import { useTranslations } from 'next-intl';

import background from '@/assets/images/test_background.jpg';
import TimeCounter from '@/components/Invitation/elements/TimeCounter';

const InvitationBackground: CSSProperties = {
  backgroundImage: `url(${background.src})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
};

export default function Invitation() {
  const t = useTranslations('Invitation');

  return (
    <div
      className="h-screen flex flex-col justify-end items-center text-white gap-[35px] py-[30px]"
      style={InvitationBackground}
    >
      <div className="flex flex-col items-center gap-[18px]">
        <div className="flex flex-col items-center gap-[5px]">
          <span className="text-xl font-light">{t('title')}</span>
          <span className="text-xl font-light">{t('sub_title')}</span>
        </div>
        <span className="text-2xl font-semibold">{t('date')}</span>
        <div className="flex flex-col items-center gap-[5px]">
          <span className="text-2xl">{t('regards')}</span>
          <span className="text-2xl font-semibold">{t('names')}</span>
        </div>
        <span className="text-2xl">{t('time_left')}</span>
      </div>
      <TimeCounter />
    </div>
  );
}
