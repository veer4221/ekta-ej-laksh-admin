import React from 'react'
import { Redirect } from 'react-router-dom'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = () => {
  const token = localStorage.getItem('token')
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body   flex-grow-1 px-3">
          {token ? <AppContent /> : <Redirect to="/login" />}
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
