import React, { Fragment, lazy, Suspense } from 'react'
import LazyLoader from '../components/MasterLayout/LazyLoader';
const Dashboard = lazy(() => import('../components/Dashboard/Dashboard'));
const DashboardPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<LazyLoader />}>
        <Dashboard />
      </Suspense>
    </Fragment>
  )
}

export default DashboardPage