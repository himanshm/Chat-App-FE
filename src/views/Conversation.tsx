import Header from '../components/conversation/ConversationHeader';
import ChatArea from '../components/conversation/ChatArea';
import MessageInput from '../components/conversation/MessageInput';

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
