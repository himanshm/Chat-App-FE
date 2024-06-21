import { MouseEvent } from 'react';
import { Contact } from './ContactList';
import { HiEllipsisVertical } from 'react-icons/hi2';
import { useContactContext } from '../../store/useContactContext';

type ContactItemProps = {
  contact: Contact;
  isSelected: boolean;
};

const ContactItem = ({ contact, isSelected }: ContactItemProps) => {
  const { openModal, contacts, setSelectedContact, setContacts, closeModal } =
    useContactContext();

  const handleSelectContact = (userId: string) => {
    const contact = contacts.find((c) => c.userId === userId) || null;
    setSelectedContact(contact);
    // Remove unread count when conversation is opened
    setContacts(
      contacts.map((c) => (c.userId === userId ? { ...c, unreadCount: 0 } : c))
    );

    closeModal();
  };

  const handleKebabMenuClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    const rect = event.currentTarget.getBoundingClientRect();
    openModal(contact, { top: rect.top, left: rect.left });
  };

  return (
    <div
      className={`contact-item ${isSelected ? 'selected' : ''}`}
      onClick={() => handleSelectContact(contact.userId)}
    >
      <img
        src={contact.profilePictureURL}
        alt={contact.name}
        className='contact-avatar'
      />
      <div className='contact-details'>
        <div className='contact-name'>{contact.name}</div>
        <div className='contact-message'>
          {contact.chat[contact.chat.length - 1].you.message}
          {contact.unreadCount > 0 && (
            <div className='unread-count'>{contact.unreadCount}</div>
          )}
        </div>
      </div>
      <div className='kebab-menu' onClick={handleKebabMenuClick}>
        <HiEllipsisVertical />
      </div>
    </div>
  );
};

export default ContactItem;
