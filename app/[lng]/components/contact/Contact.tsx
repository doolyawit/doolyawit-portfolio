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
    <div className="relative flex h-full w-full flex-col overflow-y-hidden px-8 pt-[130px] md:px-10 lg:px-12 xl:mt-20 xl:items-center xl:justify-center xl:pt-0 2xl:max-w-7xl">
      <div className="flex h-full w-full max-w-7xl flex-col xl:block xl:px-[80px]">
        <div className="relative mb-6 h-1/4 w-full xl:mb-[80px] xl:h-full xl:min-h-[162px]">
          <div className="xl:absolute xl:left-[5%]">
            <GetInTouchGraphics className="hidden xl:block" />
          </div>
          <div className="absolute h-full w-full">
            <div className="flex h-full w-full items-center justify-center">
              <div className="xl:mt-20">
                <ContactNavBar />
              </div>
            </div>
          </div>
        </div>
        <GetInTouchGraphics className="absolute right-[40%] top-[35%] hidden w-36 md:block lg:w-52 xl:hidden" />
        <div className="relative flex h-2/4 w-full justify-center px-8 xl:mb-[80px] xl:h-full xl:px-0">
          <LetWork label={t('contact.let_work_together')} />
          <GetInTouchGraphics className="absolute right-[1%] top-[20%] w-28 sm:right-[4%] sm:top-[25%] sm:w-36 md:hidden" />
        </div>
        <div className="flex h-1/4 w-full justify-center  md:pt-20 lg:pt-32 xl:h-full xl:pb-[64px] xl:pt-0">
          <Email />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 z-40 text-green dark:text-orange">
        <Glass />
      </div>
    </div>
  );
}
