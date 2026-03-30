export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Property = '/offer'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknow = 'UNKNOW',
}

export const STARS_COUNT = 5;
export const MAX_PERCENT_STARS_WIDTH = 100;

export const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;
