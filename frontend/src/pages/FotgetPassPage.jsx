import React, { Fragment, lazy, Suspense } from 'react'
import LazyLoader from '../components/MasterLayout/LazyLoader';
const ForgetPassword = lazy(() => import('../components/ForgetPassword/ForgetPassword'));

const FotgetPassPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<LazyLoader />}>
        <ForgetPassword />
      </Suspense>
    </Fragment>
  )
}

export default FotgetPassPage