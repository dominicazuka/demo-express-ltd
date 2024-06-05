import React from 'react'
import BackEndHeader from '../components/BackEndHeader'
import BackEndFooter from '../components/BackEndFooter'
import { Outlet } from 'react-router-dom'

const BackEndLayout = ({ children }) => {
  return (
    <>
      <BackEndHeader />
      <main>
        <Outlet />{/* This renders the matched child routes */}
      </main>
      <BackEndFooter />
    </>
  )
}

export default BackEndLayout;
