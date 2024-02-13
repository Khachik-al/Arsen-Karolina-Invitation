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
    <div className="h-screen" style={InvitationBackground}>
      <div className="h-full w-full bg-gradient-to-t from-[#000000]/40 to-[#000000]/0 flex flex-col justify-end items-center text-white gap-[35px] py-[30px]">
        <div className="flex flex-col items-center gap-[18px]">
          <span className="text-2xl font-light">{t('wedding_time_left')}</span>
        </div>
        <TimeCounter />
      </div>
    </div>
  );
}
