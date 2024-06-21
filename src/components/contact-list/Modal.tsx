import { useEffect, useRef, useState } from 'react';

type ModalProps = {
  onClose: () => void;
  onMarkAsUnread: () => void;
  onDelete: () => void;
  position: { top: number; left: number };
};

function Modal({ onClose, onMarkAsUnread, onDelete, position }: ModalProps) {
  const [modalPosition, setModalPosition] = useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const calculatePosition = () => {
      if (modalRef.current) {
        const modalWidth = modalRef.current.offsetWidth;
        setModalPosition({
          top: position.top,
          left: position.left - modalWidth,
        });
      }
    };

    calculatePosition(); // Initial calculation

    window.addEventListener('resize', calculatePosition);

    return () => {
      window.removeEventListener('resize', calculatePosition);
    };
  }, [position]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div
      ref={modalRef}
      className='modal'
      style={{
        position: 'absolute',
        top: `${modalPosition.top}px`,
        left: `${modalPosition.left}px`,
      }}
    >
      <div className='modal-content'>
        <button onClick={onMarkAsUnread}>Mark as Unread</button>
        <button onClick={onDelete}>Delete</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default Modal;
