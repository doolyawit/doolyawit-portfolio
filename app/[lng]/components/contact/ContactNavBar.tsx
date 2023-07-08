import { contacts } from '../../constants';
import ContactMenuItem from './ContactMenuItem';

export default async function ContactNavBar() {
  return (
    <div className="flex items-end">
      <ContactMenuItem menuItems={contacts} />
    </div>
  );
}
