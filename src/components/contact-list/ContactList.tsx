import ContactItem from './ContactItem';
import { Chat } from '../../utils/Data';

export type Contact = {
  userId: string;
  name: string;
  unreadCount: number;
  profilePictureURL: string;
  chat: Chat[];
};

type ContactListProps = {
  contacts: Contact[];
  selectedContactId: string | null;
  onOpenModal: (
    contact: Contact,
    position: { top: number; left: number }
  ) => void;
  onSelectContact: (userId: string) => void;
};

const ContactList = ({
  contacts,
  selectedContactId,
  onOpenModal,
  onSelectContact,
}: ContactListProps) => {
  return (
    <div className='sidebar'>
      <h2>Chats</h2>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.userId}
          contact={contact}
          onSelect={onSelectContact}
          onOpenModal={onOpenModal}
          isSelected={contact.userId === selectedContactId}
        />
      ))}
    </div>
  );
};

export default ContactList;
