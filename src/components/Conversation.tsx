import { Chat } from '../utils/Data';

type ConversationProps = {
  chat: Chat[];
  contactName: string;
};

const Conversation = ({ chat, contactName }: ConversationProps) => {
  return (
    <div className='main-content'>
      <h3>{contactName}</h3>
      <div className='chat-messages'>
        {chat.map((msg, index) => (
          <div key={index} className='message'>
            <p>{msg.user.message}</p>
            <span>{msg.user.timeStamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Conversation;
