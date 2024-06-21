import Header from './ConversationHeader';
import ChatArea from './ChatArea';
import MessageInput from './MessageInput';

const Conversation = () => {
  return (
    <div className='conversation'>
      <Header />
      <ChatArea />
      <MessageInput />
    </div>
  );
};

export default Conversation;
