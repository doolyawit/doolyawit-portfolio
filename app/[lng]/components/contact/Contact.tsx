import ContactNavBar from './ContactNavBar';
import Email from './Email';
import LetWork from './LetWork';
import { GetInTouchGraphics } from './svg/GetInTouchGraphics';
import { Glass } from './svg/Glass';

function Contact() {
  return (
    <div className="col-span-10 col-start-2 row-span-3 row-start-2 flex h-full w-full flex-col">
      <div className="relative mb-[70px] h-1/3 w-full 2xl:mb-0">
        <div className="absolute left-[7%] 2xl:left-[18%] 3xl:left-[26%]">
          <GetInTouchGraphics />
        </div>
        <div className="absolute h-full w-full">
          <div className="flex h-full w-full items-end justify-center 2xl:-mt-6 2xl:items-center">
            <ContactNavBar />
          </div>
        </div>
      </div>
      <div className="flex h-1/3 w-full justify-center">
        <LetWork />
      </div>
      <div className="flex h-1/3 w-full justify-center">
        <Email />
      </div>
      <div className="absolute bottom-0 right-0 z-40 text-green dark:text-orange">
        <Glass />
      </div>
    </div>
  );
}

export default Contact;
