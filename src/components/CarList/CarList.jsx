import { CarItem } from 'components/CarItem/CarItem';

export const CarList = ({ cars }) => {
  return (
    <ul>
      {cars.map(car => {
        return <CarItem key={car.id} car={car} />;
      })}
    </ul>
  );
};
