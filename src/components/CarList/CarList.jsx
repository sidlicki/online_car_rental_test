import React, { useState } from 'react';
import { CarItem } from 'components/CarItem/CarItem';
import { Modal } from 'components/Modal/Modal';
import { useSelector } from 'react-redux';
import { selectIsOpenModal } from 'redux/modal/modal.selectors';
import { NotFoundDiv, StyledWrapper } from './CarList.styled';

const carBrands = [
  'Buick',
  'Volvo',
  'HUMMER',
  'Subaru',
  'Mitsubishi',
  'Nissan',
  'Lincoln',
  'GMC',
  'Hyundai',
  'Bentley',
  'Mercedes-Benz',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Chrysler',
  'Kia',
  'Land',
];

export const CarList = ({ cars }) => {
  const isModalOpen = useSelector(selectIsOpenModal);
  const [filters, setFilters] = useState({
    make: '', // Марка
    maxPrice: '', // Максимальна ціна
    minMileage: '', // Мінімальний пробіг
    maxMileage: '', // Максимальний пробіг
  });
  const [filteredCars, setFilteredCars] = useState(cars);

  const handleFilterChange = (field, value) => {
    setFilters({
      ...filters,
      [field]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Фільтрація за введеними критеріями
    const filtered = cars.filter(car => {
      if (
        filters.make &&
        car.make.toLowerCase() !== filters.make.toLowerCase()
      ) {
        return false;
      }
      if (
        filters.maxPrice &&
        parseFloat(car.rentalPrice.slice(1)) > parseFloat(filters.maxPrice)
      ) {
        return false;
      }
      if (filters.minMileage && car.mileage < parseFloat(filters.minMileage)) {
        return false;
      }
      if (filters.maxMileage && car.mileage > parseFloat(filters.maxMileage)) {
        return false;
      }
      return true;
    });

    // Оновлення стейту з відфільтрованими автомобілями
    setFilteredCars(filtered);
  };

  return (
    <StyledWrapper>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">
          Car brand
          <select
            className="select-brand"
            value={filters.make}
            onChange={e => handleFilterChange('make', e.target.value)}
          >
            <option value="">Select a brand</option>
            {carBrands.map(brand => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </label>
        <label className="label">
          Price/ 1 hour
          <select
            className="select-price"
            value={filters.maxPrice}
            onChange={e => handleFilterChange('maxPrice', e.target.value)}
          >
            <option value="">To $</option>
            {[...Array(10).keys()].map(price => (
              <option key={price + 1} value={(price + 1) * 10}>
                {(price + 1) * 15}
              </option>
            ))}
          </select>
        </label>
        <label className="label">
          Сar mileage / km
          <div className="inputsMillage">
            <input
              className="inputMillageLeft"
              type="number"
              placeholder="From"
              value={filters.minMileage}
              onChange={e => handleFilterChange('minMileage', e.target.value)}
            />
            <input
              className="inputMillageRight"
              type="number"
              placeholder="To"
              value={filters.maxMileage}
              onChange={e => handleFilterChange('maxMileage', e.target.value)}
            />
          </div>
        </label>

        <button className="btnSearch" type="submit">
          Search
        </button>
      </form>
      {filteredCars.length > 0 ? (
        <ul className="list">
          {filteredCars.map(car => {
            return <CarItem key={car.id} car={car} />;
          })}
        </ul>
      ) : (
        <NotFoundDiv>Unfortunately, nothing was found</NotFoundDiv>
      )}

      {isModalOpen && <Modal />}
    </StyledWrapper>
  );
};
