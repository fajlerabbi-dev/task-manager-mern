import React, { Fragment, lazy, Suspense } from 'react'
import LazyLoader from '../components/MasterLayout/LazyLoader';
const Profile = lazy(() => import('../components/Profile/Profile'));

const ProfilePage = () => {
  return (
    <Fragment>
      <Suspense fallback={<LazyLoader />}>
        <Profile />
      </Suspense>
    </Fragment>
  )
}

export default ProfilePage