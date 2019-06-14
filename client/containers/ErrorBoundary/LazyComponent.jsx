import React, { Suspense, lazy } from 'react';

const ErrorBoundary = lazy(() => import('.'));

export default props => (
  // TODO: Loading Component (Spinner)
  <Suspense fallback={<div>Loading Component...</div>}>
    <ErrorBoundary {...props} />
  </Suspense>
);
