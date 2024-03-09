import { useDispatch, useSelector } from 'react-redux';
import { StyledItem } from './CarItem.styled';
import { selectFavoriteCars } from 'redux/cars/cars.selectors';
import { addFavorite, removeFavorite } from 'redux/cars/cars.reducer';
import { openModal } from 'redux/modal/modal.reducer';

export const CarItem = ({ car }) => {
  const dispatch = useDispatch();
  console.log(car);
  const favoritesCars = useSelector(selectFavoriteCars);

  const handleFavoriteClick = item => {
    const isFavorite = favoritesCars.some(fav => fav.id === item.id);
    if (isFavorite) {
      dispatch(removeFavorite(item));
      return;
    }
    dispatch(addFavorite(item));
  };

  const handleOpenModal = item => {
    dispatch(openModal(item));
  };

  return (
    <StyledItem>
      <img className="img" src={car.img} alt={car.description} />
      <div>
        <div>
          <h3>
            {car.make} {car.model}, {car.year}
          </h3>
          <h3>{car.rentalPrice}</h3>
        </div>
        <ul>
          <li>{car.address.split(',')[1]}</li>
          <li>{car.address.split(',')[2]}</li>
          <li>{car.rentalCompany}</li>
          <li>{car.type}</li>
          <li>{car.model}</li>
          <li>{car.mileage}</li>
          <li>{car.accessories[0]}</li>
        </ul>
      </div>
      <button type="button" onClick={() => handleOpenModal(car)}>
        learn more
      </button>
      <button type="button" onClick={() => handleFavoriteClick(car)}>
        add to favorite
      </button>
    </StyledItem>
  );
};
