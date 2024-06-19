import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import { getErrorMessage } from '../utils'
import Axios from '../config'
import { useAuthContext } from '../contexts/AuthContext'

const BackEndSideBar = () => {
  const navigate = useNavigate()

  // Destructure authentication state and dispatcher from the authentication context
  const {
    authState: { isAuthenticated, user }, // Destructure isAuthenticated and user from authState
    authDispatch // Get the authentication dispatcher
  } = useAuthContext()

  // Use effect to trigger re-render when authState changes
  useEffect(() => {
    console.log('header isAuthenticated useEffect', isAuthenticated)
  }, [isAuthenticated])

  // handle logout
  const handleLogout = async () => {
    try {
      if (localStorage.getItem('_f_user')) {
        const user = localStorage.getItem('_d_user')

        if (!user) return null
        const _user = JSON.parse(user)
        await Axios.patch('/users/logout', { refreshToken: _user.refreshToken })
      }
      localStorage.removeItem('_d_user')

      authDispatch({ type: 'LOG_OUT' })

      swal('Great', 'Logout Successful', 'success').then(() => {
        // Once the swal dialog is closed, redirect to the home page
        navigate('/')
      })
    } catch (error) {
      console.log('header Logout error', error)
      swal('Oops', getErrorMessage(error), 'error')
    }
  }

  return (
    <>
      {/* <!-- ========== Left Sidebar Start ========== --> */}
      <div className='border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary'>
        <div
          className='offcanvas-md offcanvas-end bg-body-tertiary'
          tabindex='-1'
          id='sidebarMenu'
          aria-labelledby='sidebarMenuLabel'
        >
          <div className='offcanvas-header'>
            <h5 className='offcanvas-title' id='sidebarMenuLabel'>
              <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
                Demo Express LTD
              </Link>
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='offcanvas'
              data-bs-target='#sidebarMenu'
              aria-label='Close'
            ></button>
          </div>
          <div className='offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto'>
            <ul className='nav flex-column'>
              <li className='nav-item'>
                <Link
                  to='/dashboard'
                  className='nav-link d-flex align-items-center gap-2 active'
                  aria-current='page'
                >
                  <i className='bi bi-house-door-fill'></i>
                  Dashboard
                </Link>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link d-flex align-items-center gap-2'
                  href='#'
                >
                  <i className='bi bi-file-earmark'></i>
                  Orders
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link d-flex align-items-center gap-2'
                  href='#'
                >
                  <i className='bi bi-people'></i>
                  Users
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link d-flex align-items-center gap-2'
                  href='#'
                >
                  <i className='bi bi-graph-up'></i>
                  Reports
                </a>
              </li>
              <li className='nav-item'>
                <Link
                  to='/all/partners'
                  className='nav-link d-flex align-items-center gap-2'
                >
                  <i class='fa-regular fa-handshake'></i>
                  Partners
                </Link>
              </li>
            </ul>

            <h6 className='sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase'>
              <span>Saved reports</span>
              <a
                className='link-secondary'
                href='#'
                aria-label='Add a new report'
              >
                <i className='bi bi-plus-circle'></i>
              </a>
            </h6>
            <ul className='nav flex-column mb-auto'>
              <li className='nav-item'>
                <a
                  className='nav-link d-flex align-items-center gap-2'
                  href='#'
                >
                  <i className='bi bi-file-earmark-text'></i>
                  Current month
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link d-flex align-items-center gap-2'
                  href='#'
                >
                  <i className='bi bi-file-earmark-text'></i>
                  Last quarter
                </a>
              </li>
            </ul>

            <hr className='my-3' />

            <ul className='nav flex-column mb-auto'>
              <li className='nav-item'>
                <a
                  className='nav-link d-flex align-items-center gap-2'
                  href='#'
                >
                  <i className='bi bi-gear-wide-connected'></i>
                  Settings
                </a>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link d-flex align-items-center gap-2'
                  onClick={e => handleLogout(e)}
                >
                  <i className='bi bi-door-closed'></i>
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- ========== Left Sidebar end ========== --> */}
    </>
  )
}

export default BackEndSideBar
