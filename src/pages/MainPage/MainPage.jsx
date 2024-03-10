import { CarList } from 'components/CarList/CarList';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from 'redux/cars/cars.operations';
import { selectCars } from 'redux/cars/cars.selectors';

const MainPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);
  const allCars = useSelector(selectCars);

  return (
    <>
      <CarList cars={allCars}></CarList>
    </>
  );
};
export default MainPage;
