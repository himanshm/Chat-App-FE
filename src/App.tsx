import { useState } from 'react';
import ContactList from './components/contact-list/ContactList';
import Conversation from './components/conversation/Conversation';
import { data } from './utils/Data';
import { Contact } from './utils/Data';
import Modal from './components/contact-list/Modal';

const App = function () {
  const [contacts, setContacts] = useState(data);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState<Contact | null>(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const handleOpenModal = (
    contact: Contact,
    position: { top: number; left: number }
  ) => {
    setCurrentContact(contact);
    setModalPosition(position);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentContact(null);
  };

  const handleMarkAsUnread = () => {
    if (currentContact) {
      setContacts(
        contacts.map((c) =>
          c.userId === currentContact.userId ? { ...c, unreadCount: 1 } : c
        )
      );
      handleCloseModal();
    }
  };

  const handleDeleteConversation = () => {
    if (currentContact) {
      setContacts(contacts.filter((c) => c.userId !== currentContact.userId));
      if (selectedContact && selectedContact.userId === currentContact.userId) {
        setSelectedContact(null);
      }
      handleCloseModal();
    }
  };

  const handleSelectContact = (userId: string) => {
    const contact = contacts.find((c) => c.userId === userId) || null;
    setSelectedContact(contact);
    // Remove unread count when conversation is opened
    setContacts(
      contacts.map((c) => (c.userId === userId ? { ...c, unreadCount: 0 } : c))
    );

    handleCloseModal();
  };

  return (
    <div className='app'>
      <ContactList
        contacts={contacts}
        onSelectContact={handleSelectContact}
        onOpenModal={handleOpenModal}
        selectedContactId={selectedContact ? selectedContact.userId : null}
      />
      {selectedContact && (
        <Conversation chat={selectedContact.chat} contact={selectedContact} />
      )}

      {isModalOpen && (
        <Modal
          onMarkAsUnread={handleMarkAsUnread}
          onDelete={handleDeleteConversation}
          onClose={handleCloseModal}
          position={modalPosition}
        />
      )}
    </div>
  );
};

export default App;
