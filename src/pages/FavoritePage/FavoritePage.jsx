import { CarList } from 'components/CarList/CarList';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavoriteCars } from 'redux/cars/cars.selectors';

const FavoritePage = () => {
  const favoritesCars = useSelector(selectFavoriteCars);

  return (
    <>
      <h1>FavoritePage</h1>
      <CarList cars={favoritesCars}></CarList>
    </>
  );
};
export default FavoritePage;
