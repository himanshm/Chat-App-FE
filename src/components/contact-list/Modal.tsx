import { useEffect, useRef, useState } from 'react';
import { useContactContext } from '../../store/useContactContext';

function Modal() {
  const {
    closeModal,
    position,
    currentContact,
    contacts,
    setContacts,
    selectedContact,
    setSelectedContact,
  } = useContactContext();
  const [modalPosition, setModalPosition] = useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleMarkAsUnread = () => {
    if (currentContact) {
      const updatedContacts = contacts.map((c) =>
        c.userId === currentContact.userId ? { ...c, unreadCount: 1 } : c
      );
      setContacts(updatedContacts);
      closeModal();
    }
  };

  const handleDeleteConversation = () => {
    if (currentContact) {
      const updatedContacts = contacts.filter(
        (c) => c.userId !== currentContact.userId
      );
      setContacts(updatedContacts);
      if (selectedContact && selectedContact.userId === currentContact.userId) {
        setSelectedContact(null);
      }
      closeModal();
    }
  };

  useEffect(() => {
    const calculatePosition = () => {
      if (position) {
        if (modalRef.current) {
          const modalWidth = modalRef.current.offsetWidth;
          setModalPosition({
            top: position.top,
            left: position.left - modalWidth,
          });
        }
      }
    };

    calculatePosition(); // Initial calculation

    window.addEventListener('resize', calculatePosition);

    return () => {
      window.removeEventListener('resize', calculatePosition);
    };
  }, [position]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeModal]);

  return (
    <div
      ref={modalRef}
      className='modal'
      style={{
        position: 'absolute',
        top: `${modalPosition.top}px`,
        left: `${modalPosition.left}px`,
      }}
    >
      <div className='modal-content'>
        <button onClick={handleMarkAsUnread}>Mark as Unread</button>
        <button onClick={handleDeleteConversation}>Delete</button>
        <button onClick={closeModal}>Cancel</button>
      </div>
    </div>
  );
}

export default Modal;
