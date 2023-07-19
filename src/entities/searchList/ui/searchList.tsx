import { useEffect } from 'react';
import { List } from '@mui/material';
import { SearchListItem } from 'shared/searchListItem';
import { SearchListProps } from 'entities/searchList/lib/searchListProps';
import { UseCloseList } from 'entities/searchList/lib/useCloseList';

import style from './searchList.module.scss';

import { modules } from 'entities/searchList/consts/modulesMock';

export const SearchList = ({
  display,
  onSetDisplay,
  referWrapp,
}: // searchValue,
SearchListProps) => {
  // const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout>();

  const closeList = UseCloseList(onSetDisplay, referWrapp);
  // const filterModule = useFilterModule((timeOut: NodeJS.Timeout) => setSearchTimeout(timeOut));

  useEffect(() => {
    if (display === 'block') {
      window.addEventListener('click', closeList);
    }

    return () => {
      window.removeEventListener('click', closeList);
    };
  }, [display]);

  // useEffect(() => {
  // filterModule(searchValue, searchTimeout);
  // }, [searchValue]);

  return (
    <>
      {modules.length > 0 ? (
        <List style={{ display }} className={style.list} aria-label="contacts">
          {modules.map((module) => {
            return (
              <SearchListItem
                key={module.id}
                id={module.id}
                name={module.name}
              />
            );
          })}
        </List>
      ) : null}
    </>
  );
};
