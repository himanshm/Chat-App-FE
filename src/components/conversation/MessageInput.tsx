import {
  HiMiniPlus,
  HiOutlineMicrophone,
  HiPaperAirplane,
} from 'react-icons/hi2';

function MessageInput() {
  return (
    <div className='message-input'>
      <button className='icon-btn'>
        <HiMiniPlus />
      </button>
      <button className='icon-btn'>
        <HiOutlineMicrophone />
      </button>
      <div className='input-container'>
        <input type='text' placeholder='Message Josh California' />
        <button className='send-btn'>
          <HiPaperAirplane />
        </button>
      </div>
    </div>
  );
}

export default MessageInput;
