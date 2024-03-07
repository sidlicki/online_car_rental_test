import { StyledItem } from './CarItem.styled';

export const CarItem = ({ car }) => {
  console.log(car);
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
      <button> learn more</button>
    </StyledItem>
  );
};
