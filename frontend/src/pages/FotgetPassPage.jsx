import React, { Fragment, lazy, Suspense } from 'react';
import LazyLoader from '../components/MasterLayout/LazyLoader';
import MasterLayout from '../components/MasterLayout/MasterLayout';
const ForgetPassword = lazy(() => import('../components/ForgetPassword/ForgetPassword'));

const FotgetPassPage = () => {
  return (
    <Fragment>
      <MasterLayout>
        <Suspense fallback={<LazyLoader />}>
          <ForgetPassword />
        </Suspense>
      </MasterLayout>
    </Fragment>
  )
}

export default FotgetPassPage