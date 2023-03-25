import React, { Fragment, lazy, Suspense } from 'react'
import LazyLoader from '../components/MasterLayout/LazyLoader';
const New = lazy(() => import('../components/New/New'));

const NewPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<LazyLoader />}>
        <New />
      </Suspense>
    </Fragment>
  )
}

export default NewPage