import CardList from '../../components/cards-list/cards-list';
import CitiesList from '../../components/cities-list/cities-list';
import Header from '../../components/header/header';

function MainPage(): JSX.Element {
  return (
    <>
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            < CitiesList />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <CardList />
          </div>
        </div>
      </main>
    </>

  );
}

export default MainPage;
