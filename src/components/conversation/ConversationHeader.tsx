import { useContactContext } from '../../store/useContactContext';
import {
  HiOutlineVideoCamera,
  HiOutlinePhone,
  HiEllipsisVertical,
} from 'react-icons/hi2';

const Header = () => {
  const { selectedContact } = useContactContext();
  return (
    <div className='header'>
      <div className='contact-info'>
        {selectedContact && (
          <img src={selectedContact.profilePictureURL} alt='profile Picture' />
        )}
        <div>
          {selectedContact && <h3>{selectedContact.name}</h3>}
          <span>Click here for contact info</span>
        </div>
      </div>
      <div className='icons'>
        <i className='icon-video'>
          <HiOutlineVideoCamera />
        </i>
        <i className='icon-call'>
          <HiOutlinePhone />
        </i>
        <i className='icon-menu'>
          <HiEllipsisVertical />
        </i>
      </div>
    </div>
  );
};

export default Header;
