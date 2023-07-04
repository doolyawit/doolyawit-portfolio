import HoverLineSvg from './svg/HoverLineSvg';

export interface MenuItem {
  label: string;
  link: string;
}

export default function NavMenuItem({ item }: { item: MenuItem }) {
  return (
    <div className="flex items-center justify-center space-x-4 pt-4">
      <div className="group h-10 w-[90px] text-center font-jk text-menu font-medium text-gray dark:text-beige">
        <p>{item.label}</p>
        <HoverLineSvg
          width="70"
          height="16"
          className="invisible mx-auto cursor-pointer text-yellow group-hover:visible dark:text-green"
        />
      </div>
    </div>
  );
}
