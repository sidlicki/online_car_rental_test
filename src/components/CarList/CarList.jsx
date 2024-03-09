import { CarItem } from 'components/CarItem/CarItem';
import { Modal } from 'components/Modal/Modal';
import { useSelector } from 'react-redux';
import { selectIsOpenModal } from 'redux/modal/modal.selectors';

export const CarList = ({ cars }) => {
  const isModalOpen = useSelector(selectIsOpenModal);
  return (
    <>
      <ul>
        {cars.map(car => {
          return <CarItem key={car.id} car={car} />;
        })}
      </ul>
      {isModalOpen && <Modal />}
    </>
  );
};
