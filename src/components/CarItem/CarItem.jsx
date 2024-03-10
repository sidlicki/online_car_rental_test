import { useDispatch, useSelector } from 'react-redux';
import { StyledItem } from './CarItem.styled';
import { selectFavoriteCars } from 'redux/cars/cars.selectors';
import { addFavorite, removeFavorite } from 'redux/cars/cars.reducer';
import { openModal } from 'redux/modal/modal.reducer';
import Notiflix from 'notiflix';

export const CarItem = ({ car }) => {
  const dispatch = useDispatch();
  const favoritesCars = useSelector(selectFavoriteCars);
  const isFavorite = favoritesCars.some(fav => fav.id === car.id);

  const handleFavoriteClick = item => {
    const isFavorite = favoritesCars.some(fav => fav.id === item.id);

    if (isFavorite) {
      dispatch(removeFavorite(item));
      Notiflix.Notify.info(
        `${item.make} ${item.model} removed from favorite list`
      );
      return;
    }
    dispatch(addFavorite(item));
    Notiflix.Notify.success(
      `${item.make} ${item.model} added to favorite list`
    );
  };

  const handleOpenModal = item => {
    dispatch(openModal(item));
  };

  return (
    <StyledItem>
      <img
        className="img"
        src={
          car.img ||
          'https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg'
        }
        alt={car.description}
      />
      <div className="wrapper-info">
        <div className="nameAndPrice">
          <h3>
            {car.make}
            {car.model.length < 9 && ' '}
            <span className="blueFill">
              {car.model.length < 9 && car.model}
            </span>
            , {car.year}
          </h3>
          <h3 className="price">{car.rentalPrice}</h3>
        </div>
        <ul className="descrList">
          <li>{car.address.split(',')[1]} </li>
          <li>{car.address.split(',')[2]}</li>
          <li>{car.rentalCompany}</li>
          <li>{car.type}</li>
          <li>{car.model}</li>
          <li>{car.mileage}</li>
          <li>{car.accessories[0]}</li>
        </ul>
      </div>
      <button
        className="btnLearnMore"
        type="button"
        onClick={() => handleOpenModal(car)}
      >
        learn more
      </button>
      <button
        className="btnAddFav"
        type="button"
        onClick={() => handleFavoriteClick(car)}
      >
        {isFavorite ? (
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.6301 2.45753C15.247 2.07428 14.7922 1.77026 14.2916 1.56284C13.791 1.35542 13.2545 1.24866 12.7126 1.24866C12.1707 1.24866 11.6342 1.35542 11.1336 1.56284C10.633 1.77026 10.1782 2.07428 9.79509 2.45753L9.00009 3.25253L8.20509 2.45753C7.43132 1.68376 6.38186 1.24906 5.28759 1.24906C4.19331 1.24906 3.14386 1.68376 2.37009 2.45753C1.59632 3.2313 1.16162 4.28075 1.16162 5.37503C1.16162 6.4693 1.59632 7.51876 2.37009 8.29253L3.16509 9.08753L9.00009 14.9225L14.8351 9.08753L15.6301 8.29253C16.0133 7.90946 16.3174 7.45464 16.5248 6.95404C16.7322 6.45345 16.839 5.91689 16.839 5.37503C16.839 4.83316 16.7322 4.2966 16.5248 3.79601C16.3174 3.29542 16.0133 2.84059 15.6301 2.45753Z"
              fill="#3470FF"
              stroke="#3470FF"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.6301 2.45753C15.247 2.07428 14.7922 1.77026 14.2916 1.56284C13.791 1.35542 13.2545 1.24866 12.7126 1.24866C12.1707 1.24866 11.6342 1.35542 11.1336 1.56284C10.633 1.77026 10.1782 2.07428 9.79509 2.45753L9.00009 3.25253L8.20509 2.45753C7.43132 1.68376 6.38186 1.24906 5.28759 1.24906C4.19331 1.24906 3.14386 1.68376 2.37009 2.45753C1.59632 3.2313 1.16162 4.28075 1.16162 5.37503C1.16162 6.4693 1.59632 7.51876 2.37009 8.29253L3.16509 9.08753L9.00009 14.9225L14.8351 9.08753L15.6301 8.29253C16.0133 7.90946 16.3174 7.45464 16.5248 6.95404C16.7322 6.45345 16.839 5.91689 16.839 5.37503C16.839 4.83316 16.7322 4.2966 16.5248 3.79601C16.3174 3.29542 16.0133 2.84059 15.6301 2.45753Z"
              stroke="white"
              strokeOpacity="0.8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </StyledItem>
  );
};
