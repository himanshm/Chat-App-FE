type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onMarkAsUnread: () => void;
  onDelete: () => void;
};

function Modal({ isOpen, onClose, onMarkAsUnread, onDelete }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className='modal'>
      <div className='modal-content'>
        <button onClick={onMarkAsUnread}>Mark as Unread</button>
        <button onClick={onDelete}>Delete</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default Modal;
