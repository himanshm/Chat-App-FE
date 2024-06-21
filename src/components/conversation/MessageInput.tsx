import {
  HiMiniPlus,
  HiOutlineMicrophone,
  HiPaperAirplane,
} from 'react-icons/hi2';
import { useContactContext } from '../../store/useContactContext';

function MessageInput() {
  const { selectedContact } = useContactContext();
  const placeholderText = selectedContact
    ? `Message ${selectedContact.name}`
    : '';

  return (
    <div className='message-input'>
      <button className='icon-btn'>
        <HiMiniPlus />
      </button>
      <button className='icon-btn'>
        <HiOutlineMicrophone />
      </button>
      <div className='input-container'>
        <input type='text' placeholder={placeholderText} />
        <button className='send-btn'>
          <HiPaperAirplane />
        </button>
      </div>
    </div>
  );
}

export default MessageInput;
