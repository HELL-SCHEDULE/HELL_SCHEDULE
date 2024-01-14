import React, { useCallback, useState } from 'react';
import { FilterStyle } from './styles';

interface Props {
  filterTitle: string;
  filterList: string[];
}

const Filter = ({ filterTitle, filterList }: Props) => {
  const [filterListToggle, setFilterListToggle] = useState(false);
  const [filterValue, setFilterValue] = useState(filterTitle);

  const handleFilterValue = useCallback(
    (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
      const text = (e.target as HTMLButtonElement).innerText;
      setFilterValue(text);
    },
    []
  );

  return (
    <FilterStyle>
      <div
        className='select'
        onClick={() => {
          setFilterListToggle((prev) => !prev);
        }}
      >
        <div className='selected'>
          <div className='selected-value'>{filterValue}</div>
          <div className='arrow'>v</div>
        </div>
        <ul className={`${filterListToggle ? 'active' : ''}`}>
          {filterList.map((list, i) => (
            <li
              key={i}
              className={`${filterValue === list && 'focus'}`}
              onClick={(e) => handleFilterValue(e)}
            >
              {list}
            </li>
          ))}
        </ul>
      </div>
    </FilterStyle>
  );
};

export default Filter;
