import { useAppSelector } from '../../hooks/useApp';
import { getFavoriteOffers, getIsFavoriteOffersLoading } from '../../store/site-data/selectors';
import type { Offer } from '../../types/types';
import Card from '../card/card';
import Spinner from '../spinner/spinner';


function FavoritesCardList (): JSX.Element {

  const isFavoriteOffersLoading = useAppSelector(getIsFavoriteOffersLoading);
  const favoriteOffers = useAppSelector(getFavoriteOffers);

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
              <a className="locations__item-link" href="#">
                <span>{city}</span>
              </a>
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
