import React from 'react';

const PageLoading = ({success, children}) => (
  <div className={success ? 'page' : 'page-loading'}>
    { success ? children : <p>Loading...</p> }
  </div>
);

export default PageLoading;
