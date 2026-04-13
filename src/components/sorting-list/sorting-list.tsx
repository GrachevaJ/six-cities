import { useState } from 'react';

const SortingList = (): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const handleButtonClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleButtonClick}>
                  Popular
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      {isOpened && (
        <ul className="places__options places__options--custom places__options--opened">
          <li
            className="places__option places__option--active"
            tabIndex={0}
          >
                    Popular
          </li>
          <li className="places__option" tabIndex={0}>
                    Price: low to high
          </li>
          <li className="places__option" tabIndex={0}>
                    Price: high to low
          </li>
          <li className="places__option" tabIndex={0}>
                    Top rated first
          </li>
        </ul>
      )}
    </form>
  );
};

export default SortingList;
