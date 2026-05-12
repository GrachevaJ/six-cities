import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/useApp';
import Logo from '../logo/logo';
import { getAuthorizationStatus, getUser } from '../../store/user-process/selectors';
import { getFavoriteOffers } from '../../store/site-data/selectors';
import { memo } from 'react';
import { logoutUser } from '../../store/action';

const Header = () => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUser);
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const dispatch = useAppDispatch();

  const handleLogoutClick = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(logoutUser());
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthorizationStatus.Auth && (
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{user} </span>
                    <span
                      className="header__favorite-count"
                      style={{
                        color: '#fff',
                        backgroundColor: '#4481c3',
                        height: '30px',
                        width: '30px',
                        textShadow: '1px 0 0,.5px 0 0,-1px 0 0',
                        borderRadius: '50%',
                        padding: '10px'
                      }}
                    >{favoriteOffers.length}
                    </span>
                  </Link>
                </li>
              )}
              <li className="header__nav-item">
                <Link className="header__nav-link" to={AppRoute.Login} onClick={handleLogoutClick}>
                  <span className="header__signout">{
                    authorizationStatus === AuthorizationStatus.Auth ? 'Sign out' : 'Sign in'
                  }
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
