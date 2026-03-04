import type { Offer } from '../../types/offer';
import { AppRoute, STARS_COUNT, MAX_PERCENT_STARS_WIDTH } from '../../const';
import { Link } from 'react-router-dom';


type CardProps = Offer & {
  onMouseMove?: (id: number) => void;
  onMouseLeave?: () => void;
  place?: 'cities' | 'favorites';
}

function Card({
  id,
  price,
  rating,
  title,
  isPremium,
  isFavorite,
  previewImage,
  type,
  place = 'cities',
  onMouseMove = () => void 0,
  onMouseLeave = () => void 0,
}: CardProps) : JSX.Element {
  const handleMouseMove = () => {
    onMouseMove(id);
  };

  return (
    <article
      className={`${place === 'cities' ? `${place}__place` : `${place}`}-card place-card`}
      onMouseMove={handleMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && (<div className="place-card__mark"><span>Premium</span></div>)}
      <div className={`${place}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Property}/${id}`}>{title}
          <img className="place-card__image" src={previewImage} width={place === 'cities' ? 260 : 150} height={place === 'cities' ? 200 : 110} alt={title} />
        </Link>
      </div>
      <div className={`${isFavorite ? 'favorites__card-info' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button${isFavorite ? ' place-card__bookmark-button--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${(MAX_PERCENT_STARS_WIDTH * rating) / STARS_COUNT}%`,}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Property}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}


export default Card;
