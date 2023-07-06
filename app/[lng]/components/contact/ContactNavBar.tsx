import ContactMenuItem from './ContactMenuItem';

export default async function ContactNavBar() {
  const menuItems = [
    { label: 'Github', link: 'https://github.com/doolyawit' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/doolyawit-yodkaew' },
    { label: 'Twitter', link: 'https://www.twitter.com' },
    { label: 'Instagram', link: 'https://www.instagram.com/diwx/' },
    { label: 'Email', link: 'mailto:dew.doolyawit@gmail.com' },
  ];

  return (
    <div className="flex h-full w-full items-end ">
      <ContactMenuItem menuItems={menuItems} />
    </div>
  );
}
