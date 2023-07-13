import { Routes, Route } from 'react-router-dom';
import Layout from './lib/layout';
import CustomSuspense from './lib/route';

import { pagesConfiguration } from 'app/config/config';

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {pagesConfiguration.map((pageItem, index) => {
          const attr = {
            element: <CustomSuspense RoutElement={pageItem.componentItem} />,
            index: pageItem.name === 'Home' ? true : false,
            path: pageItem.name === 'Home' ? '' : pageItem.link,
            key: index,
          };

          return <Route {...attr} />;
        })}
      </Route>
    </Routes>
  );
};

export default RootRouter;
