import { Route, Routes} from 'react-router-dom';
import { AppRoute } from '../../const';
import MainPage from '../../pages/main/main';
import Login from '../../pages/login-page/login';
import Favorites from '../../pages/favorites/favorites';
import NotFound from '../not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import Property from '../../pages/property/property';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import history from '../history/history';

function App(): JSX.Element {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route
          index
          element={<MainPage />}
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
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
