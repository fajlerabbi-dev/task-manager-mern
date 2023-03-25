import React, { Fragment, Suspense, lazy } from 'react'
import LazyLoader from '../components/MasterLayout/LazyLoader';
const Progress = lazy(() => import('../components/Progress/Progress'));

const ProgressPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<LazyLoader />}>
        <Progress />
      </Suspense>
    </Fragment>
  )
}

export default ProgressPage