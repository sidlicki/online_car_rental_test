import { CarList } from 'components/CarList/CarList';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectCars } from 'redux/cars/cars.selectors';

const MainPage = () => {
  const allCars = useSelector(selectCars);

  return (
    <>
      <h1>MainPage</h1>
      <CarList cars={allCars}></CarList>
    </>
  );
};
export default MainPage;
