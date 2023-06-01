import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Modal({ onClose, data }) {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content" ref={modalRef}>
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
        <h1>Sign Up Modal</h1>
        <p>First Name: {data.firstName}</p>
        <p>Last Name: {data.lastName}</p>
        <p>Mobile: {data.mobile}</p>
        <p>Email: {data.email}</p>
        <p>Username: {data.username}</p>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

function SignUpModal({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpenModal}>
        Sign Up
      </button>
      {isOpen && <Modal onClose={handleCloseModal} data={data} />}
    </div>
  );
}

export default SignUpModal;
