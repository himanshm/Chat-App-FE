import { Chat } from '../../utils/Data';

type ChatAreaProps = {
  chat: Chat[];
};

const ChatArea = ({ chat }: ChatAreaProps) => {
  return (
    <div className='chat-area'>
      {chat.map((msg, index) => (
        <div key={index} className='message'>
          <div className='sent'>
            <p>{msg.user.message}</p>
            <span>{msg.user.timeStamp}</span>
          </div>

          <div className='received'>
            <p>{msg.you.message}</p>
            <span>{msg.you.timeStamp}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatArea;
