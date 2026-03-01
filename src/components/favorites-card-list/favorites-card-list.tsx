import type { Offer } from '../../types/offer';
import Card from '../card/card';

type CardListProps = {
  offers: Offer[];
};

function FavoritesCardList ({offers}: CardListProps): JSX.Element {
  const groupedOffersByCity = offers.reduce<{ [key: string ]: Offer[] }>((acc, curr) => {
    if (curr.isFavorite) {
      const city = curr.city.name;

      if (!(city in acc)) {
        acc[city] = [];
      }

      acc[city].push(curr);
    }

    return acc;
  }, {});

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
