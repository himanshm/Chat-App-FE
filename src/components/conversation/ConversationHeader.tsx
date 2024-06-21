import { Contact } from '../contact-list/ContactList';
import {
  HiOutlineVideoCamera,
  HiOutlinePhone,
  HiEllipsisVertical,
} from 'react-icons/hi2';

type HeaderProps = {
  contact: Contact;
};

const Header = ({ contact }: HeaderProps) => {
  return (
    <div className='header'>
      <div className='contact-info'>
        <img src={contact.profilePictureURL} alt='profile Picture' />
        <div>
          <h3>{contact.name}</h3>
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
