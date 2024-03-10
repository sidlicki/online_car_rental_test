import { CarList } from 'components/CarList/CarList';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavoriteCars } from 'redux/cars/cars.selectors';

const FavoritePage = () => {
  const favoritesCars = useSelector(selectFavoriteCars);

  return (
    <>
      <CarList
        key={JSON.stringify(favoritesCars)}
        cars={favoritesCars}
      ></CarList>
    </>
  );
};
export default FavoritePage;
