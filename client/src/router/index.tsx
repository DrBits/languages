import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Loader } from '@app/core/ui-library';

const Home = lazy(() => import('@app/pages/Home'));

const Router = () => {
  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <Suspense fallback={<Loader active />}>
              <Home />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default Router;
