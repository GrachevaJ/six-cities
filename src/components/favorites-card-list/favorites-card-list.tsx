import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useApp';
import { getFavoriteOffers, getIsFavoriteOffersLoading } from '../../store/site-data/selectors';
import type { CityName, Offer } from '../../types/types';
import Card from '../card/card';
import Spinner from '../spinner/spinner';
import { setCity } from '../../store/site-process/site-process';


function FavoritesCardList (): JSX.Element {

  const isFavoriteOffersLoading = useAppSelector(getIsFavoriteOffersLoading);
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const dispatch = useAppDispatch();

  const groupedOffersByCity = favoriteOffers.reduce<{ [key: string ]: Offer[] }>((acc, curr) => {
    if (curr.isFavorite) {
      const city = curr.city.name;

      if (!(city in acc)) {
        acc[city] = [];
      }

      acc[city].push(curr);
    }

    return acc;
  }, {});

  if (isFavoriteOffersLoading) {
    return <Spinner />;
  }

  return (
    <ul className="favorites__list">
      {Object.entries(groupedOffersByCity).map(([city, groupedOffers]) => (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="/" onClick={() => dispatch(setCity(city as CityName))}>
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            {groupedOffers.map((offer) => <Card key={offer.id} {...offer} place="favorites" />)}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesCardList;
