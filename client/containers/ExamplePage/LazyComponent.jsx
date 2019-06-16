import React, { Suspense, lazy } from 'react';

const ExamplePage = lazy(() => import('.'));

export default props => (
  // TODO: Loading Component (Spinner)
  <Suspense fallback={<div>Loading Component...</div>}>
    <ExamplePage {...props} />
  </Suspense>
);
