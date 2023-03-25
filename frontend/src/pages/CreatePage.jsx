import React, { Fragment, lazy, Suspense } from 'react'
import LazyLoader from '../components/MasterLayout/LazyLoader';
const Create = lazy(() => import('../components/Create/Create'));

const CreatePage = () => {
  return (
    <Fragment>
      <Suspense fallback={<LazyLoader />}>
        <Create />
      </Suspense>
    </Fragment>
  )
}

export default CreatePage