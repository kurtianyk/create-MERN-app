import React, { Suspense, lazy } from 'react';

const NoMatch = lazy(() => import('.'));

export default props => (
  // TODO: Loading Component (Spinner)
  <Suspense fallback={<div>Loading Component...</div>}>
    <NoMatch {...props} />
  </Suspense>
);
