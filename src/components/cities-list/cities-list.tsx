import type { CityName } from '../../types/types';
import { useAppSelector, useAppDispatch } from '../../hooks/useApp';
import { setCity } from '../../store/site-process/site-process';
import City from '../city/city';
import { cities } from '../../const';
import { getCity } from '../../store/site-process/selectors';
import { useCallback } from 'react';

const CitiesList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector(getCity);

  const handleCityClick = useCallback((name: CityName) => {
    dispatch(setCity(name));
  }, [dispatch]);

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <City key={city} name={city} isActive={city === activeCity.name} onClick={handleCityClick} />
      ))}
    </ul>
  );
};

export default CitiesList;
