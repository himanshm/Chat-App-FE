import Conversation from './views/Conversation';
import Modal from './components/contact-list/Modal';
import { useContactContext } from './store/useContactContext';
import { HiChevronLeft } from 'react-icons/hi2';
import { lazy, Suspense } from 'react';

const ContactList = lazy(() => import('./views/ContactList'));

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
          <Suspense fallback={<p className='fallback-text'>Loading...</p>}>
            <ContactList />
          </Suspense>
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
      <Suspense fallback={<p className='fallback-text'>Loading...</p>}>
        <ContactList />
      </Suspense>
      {selectedContact && <Conversation />}
      {isModalOpen && position && <Modal />}
    </div>
  );
};

export default App;
