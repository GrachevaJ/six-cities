import type { Offer } from '../../types/offer';
import Card from '../card/card';

type CardListProps = {
  offers: Offer[];
};

function CardList ({offers}: CardListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (<Card key={offer.id} {...offer} />))}
    </div>
  );
}

export default CardList;
