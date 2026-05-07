import { Offer } from '../../types/types';
import { useAppDispatch } from '../../hooks/useApp';
import { postFavorite } from '../../store/action';

type BookmarkProps = {
  id: Offer['id'];
  isActive: boolean;
  place?: 'place-card' | 'property';
}

const Bookmark = ({id, isActive, place = 'place-card'}: BookmarkProps) => {
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(postFavorite({
      id,
      status: isActive ? 0 : 1
    }));
  };

  return (
    <button onClick={handleButtonClick} className={`${place}__bookmark-button ${isActive ? `${place}__bookmark-button--active` : ''} button`} type="button">
      <svg className={`${place}__bookmark-icon`} width={place === 'property' ? 31 : 18} height={place === 'property' ? 33 : 19}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{isActive ? 'From' : 'To'} bookmarks</span>
    </button>
  );
};

export default Bookmark;
