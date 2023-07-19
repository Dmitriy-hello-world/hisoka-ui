import { ChangeEvent, useRef, useState } from 'react';
import { SearchProps } from 'features/search/lib/searchTypes';
import { SearchList } from 'entities/searchList';

import {
  SearchElement,
  SearchIconWrapper,
  StyledInputBase,
} from 'features/search/lib/searchElements';

import SearchIcon from '@mui/icons-material/Search';

import style from './search.module.scss';

export const Search = ({ isAuthorized }: SearchProps) => {
  const [searchValue, setSearchValue] = useState('');
  const [display, setDisplay] = useState('none');
  const searchWrapper = useRef<HTMLDivElement | null>(null);

  return (
    <>
      {isAuthorized ? (
        <SearchElement
          className={style.search}
          ref={searchWrapper}
          onClick={() => setDisplay('block')}
        >
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            value={searchValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearchValue(e.target.value)
            }
            placeholder="Search modules"
            inputProps={{ 'aria-label': 'search' }}
          />
          <SearchList
            searchValue={searchValue}
            referWrapp={searchWrapper}
            display={display}
            onSetDisplay={(val) => setDisplay(val)}
          />
        </SearchElement>
      ) : null}
    </>
  );
};
