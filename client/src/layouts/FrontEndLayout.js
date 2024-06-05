import React from 'react'
import FrontEndHeader from '../components/FrontEndHeader'
import FrontEndFooter from '../components/FrontEndFooter'
import { Outlet } from 'react-router-dom'

const FrontEndLayout = ({ children }) => {
  return (
    <>
      <FrontEndHeader />
      <main>
        <Outlet />{/* This renders the matched child routes */}
      </main>
      <FrontEndFooter />
    </>
  )
}

export default FrontEndLayout
