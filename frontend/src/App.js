import React, { Fragment } from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import FullscreenLoader from './components/MasterLayout/FullScreenLoader';
import CanceledPage from './pages/CanceledPage';
import CompletedPage from './pages/CompletedPage';
import CreatePage from './pages/CreatePage';
import DashboardPage from './pages/DashboardPage';
import NewPage from './pages/NewPage';
import NotFoundPage from './pages/NotFoundPage';
import ProfilePage from './pages/ProfilePage';
import ProgressPage from './pages/ProgressPage';
import RegistrationPage from './pages/RegistrationPage';



const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route exact path='/' element={<DashboardPage />} />
        <Route exact path='/create' element={<CreatePage />} />
        <Route exact path='/all' element={<NewPage />} />
        <Route exact path='/progress' element={<ProgressPage />} />
        <Route exact path='/completed' element={<CompletedPage />} />
        <Route exact path='/canceled' element={<CanceledPage />} />
        <Route exact path='/profile' element={<ProfilePage />} />
        <Route exact path='/registration' element={<RegistrationPage />} />
        <Route exact path='/*' element={<NotFoundPage />} />
      </Routes>
      <FullscreenLoader />
    </Fragment>
  )
}

export default App