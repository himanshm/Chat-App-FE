import {
  HiMiniPlus,
  HiOutlineMicrophone,
  HiPaperAirplane,
} from 'react-icons/hi2';
import { Contact } from '../contact-list/ContactList';

type MessageInputProps = {
  contact: Contact;
};

function MessageInput({ contact }: MessageInputProps) {
  return (
    <div className='message-input'>
      <button className='icon-btn'>
        <HiMiniPlus />
      </button>
      <button className='icon-btn'>
        <HiOutlineMicrophone />
      </button>
      <div className='input-container'>
        <input type='text' placeholder={`Message ${contact.name}`} />
        <button className='send-btn'>
          <HiPaperAirplane />
        </button>
      </div>
    </div>
  );
}

export default MessageInput;
