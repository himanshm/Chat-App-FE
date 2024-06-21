import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react';
import { Contact, data } from '../utils/Data';

type ContactContextType = {
  contacts: Contact[];
  setContacts: Dispatch<SetStateAction<Contact[]>>;
  selectedContact: Contact | null;
  setSelectedContact: Dispatch<SetStateAction<Contact | null>>;
  isModalOpen: boolean;
  openModal: (contact: Contact, positon: { top: number; left: number }) => void;
  closeModal: () => void;
  currentContact: Contact | null;
  setCurrentContact: Dispatch<SetStateAction<Contact | null>>;
  position: { top: number; left: number } | null;
};

export const ContactContext = createContext<ContactContextType | undefined>(
  undefined
);

type ContactProviderProps = {
  children: ReactNode;
};

function ContactProvider({ children }: ContactProviderProps) {
  const [contacts, setContacts] = useState<Contact[]>(data);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState<Contact | null>(null);
  const [modalPosition, setModalPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);

  const openModal = (
    contact: Contact,
    position: { top: number; left: number }
  ) => {
    setCurrentContact(contact);
    setModalPosition(position);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentContact(null);
    setModalPosition(null);
  };

  const contextValue: ContactContextType = {
    contacts,
    setContacts,
    selectedContact,
    setSelectedContact,
    isModalOpen,
    openModal,
    closeModal,
    currentContact,
    setCurrentContact,
    position: modalPosition,
  };
  return (
    <ContactContext.Provider value={contextValue}>
      {children}
    </ContactContext.Provider>
  );
}

export default ContactProvider;
