import { Stack } from '@mui/material';
import { DualInputs } from 'entities/dualInputs';
import { AddNewModuleProps } from 'features/addNewModule/lib/types';
import { useState } from 'react';
import { CreateButton } from 'shared/createButton';
import style from './addNewModule.module.scss';

export const AddNewModule = ({ isAuthorizated }: AddNewModuleProps) => {
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');

  return (
    <>
      {isAuthorizated ? (
        <Stack className={style.wrapper}>
          <DualInputs
            firstName="Module Name"
            firstValue={firstValue}
            firstHandleOnChange={setFirstValue}
            secondName="Description"
            secondValue={secondValue}
            secondHandleOnChange={setSecondValue}
          />
          <CreateButton text="Create Module" isLoading={false} />
        </Stack>
      ) : null}
    </>
  );
};
