import CardList from '../../components/cards-list/cards-list';
import CitiesList from '../../components/cities-list/cities-list';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks/useApp';
import { selectOffers } from '../../store/site-data/selectors';

function MainPage(): JSX.Element {
  const offers = useAppSelector(selectOffers);
  const isEmpty = offers.length === 0;

  return (
    <div className="page page--gray page--main">

      <Header />

      <main className={`page__main page__main--index${isEmpty ? '-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">

            < CitiesList />

          </section>
        </div>
        <div className="cities">
          <div className={`cities__places-container ${isEmpty ? 'cities__places-container--empty' : ''} container`}>

            <CardList offers={offers} isEmpty={isEmpty}/>

          </div>
        </div>
      </main>
    </div>

  );
}

export default MainPage;
