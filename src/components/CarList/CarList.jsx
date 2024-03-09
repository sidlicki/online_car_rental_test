import React, { useState } from 'react';
import { CarItem } from 'components/CarItem/CarItem';
import { Modal } from 'components/Modal/Modal';
import { useSelector } from 'react-redux';
import { selectIsOpenModal } from 'redux/modal/modal.selectors';

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
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Марка:
            <select
              value={filters.make}
              onChange={e => handleFilterChange('make', e.target.value)}
            >
              <option value="">Оберіть марку</option>
              {carBrands.map(brand => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </label>

          <label>
            Максимальна ціна:
            <select
              value={filters.maxPrice}
              onChange={e => handleFilterChange('maxPrice', e.target.value)}
            >
              <option value="">Оберіть максимальну ціну</option>
              {[...Array(10).keys()].map(price => (
                <option key={price + 1} value={(price + 1) * 10}>
                  {(price + 1) * 10}
                </option>
              ))}
            </select>
          </label>
          <label>
            Мінімальний пробіг:
            <input
              type="number"
              value={filters.minMileage}
              onChange={e => handleFilterChange('minMileage', e.target.value)}
            />
          </label>
          <label>
            Максимальний пробіг:
            <input
              type="number"
              value={filters.maxMileage}
              onChange={e => handleFilterChange('maxMileage', e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Пошук</button>
      </form>
      <ul>
        {filteredCars.map(car => {
          return <CarItem key={car.id} car={car} />;
        })}
      </ul>
      {isModalOpen && <Modal />}
    </>
  );
};
