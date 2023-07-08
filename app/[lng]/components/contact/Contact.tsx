import { useTranslation } from '../../../i18n';
import { BaseProp } from '../../../types';
import ContactNavBar from './ContactNavBar';
import Email from './Email';
import LetWork from './LetWork';
import { GetInTouchGraphics } from './svg/GetInTouchGraphics';
import Glass from './svg/glass.svg';

export default async function Contact({ lng }: BaseProp) {
  const { t } = await useTranslation(lng);

  return (
    <div className="relative mt-20 flex h-full w-full flex-col items-center justify-center overflow-y-hidden 2xl:max-w-7xl">
      <div className="w-full max-w-7xl px-[80px]">
        <div className="relative mb-[80px] min-h-[162px] w-full">
          <div className="absolute left-[5%]">
            <GetInTouchGraphics />
          </div>
          <div className="absolute h-full w-full">
            <div className="flex h-full w-full items-center justify-center">
              <div className="mt-20">
                <ContactNavBar />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-[80px] flex w-full justify-center">
          <LetWork label={t('contact.let_work_together')} />
        </div>
        <div className="flex w-full justify-center pb-[64px]">
          <Email />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 z-40 text-green dark:text-orange">
        <Glass />
      </div>
    </div>
  );
}
