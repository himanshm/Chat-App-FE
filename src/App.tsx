import ContactList from './views/ContactList';
import Conversation from './views/Conversation';
import Modal from './components/contact-list/Modal';
import { useContactContext } from './store/useContactContext';
import { HiChevronLeft } from 'react-icons/hi2';

const App = function () {
  const {
    selectedContact,
    isMobile,
    isModalOpen,
    position,
    setSelectedContact,
  } = useContactContext();

  if (isMobile) {
    return (
      <div className='app'>
        {!selectedContact ? (
          <ContactList />
        ) : (
          <div>
            <button
              onClick={() => setSelectedContact(null)}
              className='back-button'
            >
              <HiChevronLeft />
              <span>
                <h2>Chats</h2>
              </span>
            </button>
            <Conversation />
          </div>
        )}
        {isModalOpen && position && <Modal />}
      </div>
    );
  }

  return (
    <div className='app'>
      <ContactList />
      {selectedContact && <Conversation />}
      {isModalOpen && position && <Modal />}
    </div>
  );
};

export default App;
