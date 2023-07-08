import ExternalLink from '../external-link';
import { MenuItem } from '../navigation/NavMenuItem';
import Underline from './svg/underline.svg';

interface Props {
  menuItems: MenuItem[];
}

export default function ContactMenuItem({ menuItems }: Props) {
  return (
    <div className={'flex w-full flex-1 gap-10 p-4'}>
      {menuItems.map((item, index) => {
        return (
          <div key={index} className="group cursor-default text-center">
            <ExternalLink
              label={item.label}
              link={item.link}
              className="font-jk text-2xl font-medium text-gray dark:text-beige"
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
