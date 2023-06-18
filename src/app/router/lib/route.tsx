import { CircularProgress } from '@mui/material';
import { Suspense } from 'react';
import style from '../../styles/router.module.scss';

interface CustomRouteProps {
  RoutElement: React.LazyExoticComponent<() => JSX.Element>;
}

const CustomSuspense = ({ RoutElement }: CustomRouteProps) => {
  return (
    <Suspense fallback={<CircularProgress className={style.centered} />}>
      <RoutElement />
    </Suspense>
  );
};

export default CustomSuspense;
