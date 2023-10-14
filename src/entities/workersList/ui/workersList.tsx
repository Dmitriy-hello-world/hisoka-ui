import { Box } from '@mui/material';
import { WorkersListItem } from 'shared/workersListItem';

import frontEnd from 'app/assets/frontend.jpg';
import backEnd from 'app/assets/backend.jpg';

import style from './workersList.module.scss';

export const WorkersList = () => {
  return (
    <Box className={style.wrapper}>
      <WorkersListItem
        name={'Dmitriy Nikitenko'}
        position={'Front-end Developer'}
        git={'https://github.com/Dmitriy-hello-world'}
        telegram={'https://t.me/Nikitenko_Dmitriy'}
        img={frontEnd}
      />
      <WorkersListItem
        name={'Dmytro Halushka'}
        position={'Back-end developer'}
        git={'https://github.com/ZGltYQ'}
        telegram={'https://t.me/ZGltYQ'}
        img={backEnd}
      />
    </Box>
  );
};
