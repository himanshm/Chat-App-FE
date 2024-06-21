import ContactList from './components/contact-list/ContactList';
import Conversation from './components/conversation/Conversation';
import Modal from './components/contact-list/Modal';
import { useContactContext } from './store/useContactContext';

const App = function () {
  const { selectedContact, isModalOpen, position } = useContactContext();

  return (
    <div className='app'>
      <ContactList />
      {selectedContact && <Conversation />}

      {isModalOpen && position && <Modal />}
    </div>
  );
};

export default App;
