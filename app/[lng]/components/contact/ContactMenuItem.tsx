import ExternalLink from '../external-link';
import { MenuItem } from '../navigation/NavMenuItem';
import Underline from './svg/underline.svg';

interface Props {
  menuItems: MenuItem[];
}

export default function ContactMenuItem({ menuItems }: Props) {
  return (
    <div
      className={
        'flex w-full flex-1 flex-wrap justify-center gap-5 py-2 sm:gap-10 lg:flex-nowrap lg:gap-16 lg:p-4 xl:gap-10 xl:p-4'
      }
    >
      {menuItems.map((item, index) => {
        return (
          <div key={index} className="group cursor-default text-center">
            <ExternalLink
              label={item.label}
              link={item.link}
              className="font-jk text-lg font-medium text-gray dark:text-beige md:text-xl lg:text-3xl xl:text-2xl"
            />
            <div className="flex cursor-pointer justify-center text-center group-hover:text-green dark:group-hover:text-yellow">
              <Underline />
            </div>
          </div>
        );
      })}
    </div>
  );
}
