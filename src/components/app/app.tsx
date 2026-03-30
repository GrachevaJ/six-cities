import { Route, BrowserRouter, Routes} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainPage from '../../pages/main/main';
import Login from '../../pages/login-page/login';
import Favorites from '../../pages/favorites/favorites';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import type { Offer, City } from '../../types/types';
import Property from '../../pages/property/property';

type AppProps = {
  city: City;
  offers: Offer[];
}

function App({ city, offers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<MainPage city={city} offers={offers} />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={`${AppRoute.Property}/:id`}
          element={<Property />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <Favorites offers={offers}/>
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
