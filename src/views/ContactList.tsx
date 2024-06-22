import ContactItem from '../components/contact-list/ContactItem';
import { Chat } from '../utils/Data';
import { useContactContext } from '../store/useContactContext';

export type Contact = {
  userId: string;
  name: string;
  unreadCount: number;
  profilePictureURL: string;
  chat: Chat[];
};

const ContactList = () => {
  const { contacts, selectedContact } = useContactContext();
  const selectedContactId = selectedContact ? selectedContact.userId : null;

  return (
    <div className='sidebar'>
      <h2>Chats</h2>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.userId}
          contact={contact}
          isSelected={contact.userId === selectedContactId}
        />
      ))}
    </div>
  );
};

export default ContactList;
