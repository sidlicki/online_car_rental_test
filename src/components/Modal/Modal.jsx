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
        <button className="btnClose" onClick={() => dispatch(closeModal())}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="#121417"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#121417"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <img
          className="img"
          src={
            modalData.img ||
            'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg'
          }
          alt={modalData.make}
        />
        <h3 className="caption">
          {modalData.make} <span className="blue">{modalData.model}</span>,{' '}
          {modalData.year}
        </h3>
        <div>
          <ul className="list-modal">
            <li>{modalData.address.split(',')[1]}</li>
            <li>{modalData.address.split(',')[2]}</li>
            <li>Id:{modalData.id}</li>
            <li>Year:{modalData.year}</li>
            <li>Type:{modalData.type}</li>
            <li>Fuel Consumption:{modalData.fuelConsumption}</li>
            <li>Engine Size:{modalData.engineSize}</li>
          </ul>
          <p className="descr">{modalData.description}</p>
          <p className="accessories">
            <span className="subtitle">Accessories and functionalities:</span>
            {modalData.accessories
              .concat(modalData.functionalities.slice(0, 2))
              .join(' | ')}
          </p>

          <div>
            <span className="subtitle">Rental Conditions:</span>
            <ul className="conditions-list">
              <li>
                Minimum age:
                <span className="blueAndBold">
                  {modalData.rentalConditions.split('\n')[0].split(':')[1]}
                </span>
              </li>
              <li>Valid driver’s license</li>
              <li>Security deposite required </li>
              <li>
                Mileage:
                <span className="blueAndBold">
                  {' '}
                  {modalData.mileage
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
              </li>
              <li>
                Price:
                <span className="blueAndBold"> {modalData.rentalPrice}</span>
              </li>
            </ul>

            <a className="btnRent" href="tel:+380730000000">
              Rental car
            </a>
          </div>
        </div>
      </div>
    </Overlay>
  );
};
