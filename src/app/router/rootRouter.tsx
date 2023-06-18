import { Routes, Route } from 'react-router-dom';
import { MainPage, NoFoundPage } from 'app/router/lib/lazyPages';
import Layout from './lib/layout';
import CustomSuspense from './lib/route';

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<CustomSuspense RoutElement={MainPage} />} />
        <Route
          path="*"
          element={<CustomSuspense RoutElement={NoFoundPage} />}
        />
      </Route>
    </Routes>
  );
};

export default RootRouter;
