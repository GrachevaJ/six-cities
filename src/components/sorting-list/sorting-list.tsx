import { useState } from 'react';
import type { SortName } from '../../types/types';
import { Sorting } from '../../const';

type SortingListProps = {
  onChange: (name: SortName) => void;
  activeSorting: SortName;
};

const SortingList = ({onChange, activeSorting}: SortingListProps): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleButtonClick = () => {
    setIsOpened(!isOpened);
  };

  const handleSortItemClick = (name: SortName) => {
    setIsOpened(false);
    onChange(name);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleButtonClick}>
        {Sorting[activeSorting]}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      {isOpened && (
        <ul className="places__options places__options--custom places__options--opened">
          {(Object.entries(Sorting) as [SortName, Sorting][]).map(([name, title]) =>
            (
              <li
                key={name}
                className={`places__option${name === activeSorting ? ' places__option-active' : ''}`}
                tabIndex={0}
                onClick={() => handleSortItemClick(name)}
              >
                {title}
              </li>
            ))}
        </ul>
      )}
    </form>
  );
};

export default SortingList;
