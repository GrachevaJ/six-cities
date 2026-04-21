import { useState } from 'react';
import Card from '../card/card';
import Map from '../map/map';
import { useAppDispatch, useAppSelector } from '../../hooks/useApp';
import SortingList from '../sorting-list/sorting-list';
import { Comparator } from '../../const';
import { SortName } from '../../types/types';
import { setSorting } from '../../store/action';
import Spinner from '../spinner/spinner';


function CardList (): JSX.Element {
  const dispatch = useAppDispatch();
  const activeSorting = useAppSelector((state) => state.sorting);
  const activeCity = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers.filter((offer) => offer.city.name === state.city.name).sort(Comparator[state.sorting]));
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);
  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  const handleCardMouseMove = (id: number) => {
    setActiveOffer(id);
  };

  const handleCardMouseLeave = () => {
    setActiveOffer(null);
  };

  const onSortingChange = (name: SortName) => {
    dispatch(setSorting(name));
  };

  if (isOffersLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {activeCity.name}</b>
        <SortingList onChange={onSortingChange} activeSorting={activeSorting} />
        <div className="cities__places-list places__list tabs__content">
          {offers.map((offer) => (
            <Card
              key={offer.id}
              {...offer}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
            />
          ))}
        </div>
      </section>
      <div className="cities__right-section">
        <Map locations={offers.map(({id, location}) => ({id, ...location}))} city={activeCity} activeOffer={activeOffer}/>
      </div>
    </>
  );
}

export default CardList;
