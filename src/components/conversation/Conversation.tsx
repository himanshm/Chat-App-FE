import { Chat } from '../../utils/Data';
import Header from './ConversationHeader';
import ChatArea from './ChatArea';
import MessageInput from './MessageInput';
import { Contact } from '../contact-list/ContactList';

type ConversationProps = {
  chat: Chat[];
  contact: Contact;
};

const Conversation = ({ chat, contact }: ConversationProps) => {
  return (
    <div className='conversation'>
      <Header contact={contact} />
      <ChatArea chat={chat} />
      <MessageInput contact={contact} />
    </div>
  );
};

export default Conversation;
