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

        <img src={modalData.img} alt={modalData.make} />
        <p>
          {modalData.make} {modalData.model} {modalData.year}
        </p>
        <div>
          <ul>
            <li>{modalData.address.split(',')[1]}</li>
            <li>{modalData.address.split(',')[2]}</li>
            <li>{modalData.rentalCompany}</li>
            <li>{modalData.type}</li>
            <li>{modalData.model}</li>
            <li>{modalData.mileage}</li>
            <li>{modalData.accessories[0]}</li>
          </ul>
          <p>{modalData.description}</p>
          <p>
            {modalData.accessories
              .concat(modalData.functionalities)
              .join(' | ')}
          </p>
          <p>Milleage: {modalData.mileage}</p>
          <p>Price: {modalData.rentalPrice}</p>
        </div>
      </div>
    </Overlay>
  );
};
