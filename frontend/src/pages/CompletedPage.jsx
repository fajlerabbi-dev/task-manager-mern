import React, { Fragment, lazy, Suspense } from 'react'
import LazyLoader from '../components/MasterLayout/LazyLoader';
const Completed = lazy(() => import('../components/Completed/Completed'));

const CompletedPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<LazyLoader />}>
        <Completed />
      </Suspense>
    </Fragment>
  )
}

export default CompletedPage