import { MouseEvent } from 'react';
import { Contact } from './ContactList';

type ContactItemProps = {
  contact: Contact;
  onOpenModal: (
    contact: Contact,
    position: { top: number; left: number }
  ) => void;
  onSelect: (userId: string) => void;
  isSelected: boolean;
};

const ContactItem = ({
  contact,
  onSelect,
  isSelected,
  onOpenModal,
}: ContactItemProps) => {
  const handleKebabMenuClick = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    const rect = event.currentTarget.getBoundingClientRect();
    onOpenModal(contact, { top: rect.top, left: rect.left });
  };

  return (
    <div
      className={`contact-item ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(contact.userId)}
    >
      <img
        src={contact.profilePictureURL}
        alt={contact.name}
        className='contact-avatar'
      />
      <div className='contact-details'>
        <div className='contact-name'>{contact.name}</div>
        <div className='contact-message'>
          {contact.chat[contact.chat.length - 1].user.message}
          {contact.unreadCount > 0 && (
            <div className='unread-count'>{contact.unreadCount}</div>
          )}
        </div>
      </div>
      <div className='kebab-menu' onClick={handleKebabMenuClick}>
        ⋮
      </div>
    </div>
  );
};

export default ContactItem;
