import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectModalData } from 'redux/modal/modal.selectors';
import { closeModal } from 'redux/modal/modal.reducer';
import { Overlay } from './Modal.styled';

export const Modal = () => {
  const dispatch = useDispatch();

  const modalData = useSelector(selectModalData);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        dispatch(closeModal());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [dispatch]);

  const handleOverlayClick = event => {
    if (event.target === event.currentTarget) {
      dispatch(closeModal());
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <div className="modal">
        <button onClick={() => dispatch(closeModal())}>❌</button>
        <p>{modalData.make}</p>
      </div>
    </Overlay>
  );
};
