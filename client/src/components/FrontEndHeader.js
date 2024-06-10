import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import { getErrorMessage } from '../utils'
import Axios from '../config'
import { useAuthContext } from '../contexts/AuthContext'

const FrontEndHeader = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const marginBottom = isTabletOrMobile ? '180px' : '0' // Adjust margin bottom as needed
  const marginRight = isTabletOrMobile ? '0px' : '20px'

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

  const isAuthorizedRole = ['Admin', 'Driver', 'SuperAdmin'].includes(user.role)

  return (
    <>
      <nav
        className='navbar navbar-expand-sm shadow'
        aria-label='Navbar'
        style={{ backgroundColor: 'green' }}
      >
        <div className='container-fluid'>
          {/* logo */}
          <Link to='/' className='navbar-brand'>
            <img
              src='https://via.placeholder.com/40x32'
              alt='Logo'
              width='40'
              height='32'
              className='me-2'
            />
          </Link>
          <button
            className='navbar-toggler collapsed'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarsExample03'
            aria-controls='navbarsExample03'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div
            className='navbar-collapse collapse'
            id='navbarsExample03'
            style={{}}
          >
            <ul className='navbar-nav me-auto mb-2 mb-sm-0'>
              <li className='nav-item'>
                <Link
                  to='/about'
                  className='nav-link active'
                  style={{ color: 'white' }}
                >
                  About
                </Link>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                  style={{ color: 'white' }}
                >
                  Support
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <Link to='/faq' className='dropdown-item'>
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to='/service-news' className='dropdown-item'>
                      Service News
                    </Link>
                  </li>
                  <li>
                    <Link to='/contact-us' className='dropdown-item'>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                  style={{ color: 'white' }}
                >
                  Ship
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <Link to='/ship' className='dropdown-item'>
                      Ship
                    </Link>
                  </li>
                  <li>
                    <Link to='/locations' className='dropdown-item'>
                      Locations
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form
              className='mt-2'
              style={{ marginRight: marginRight }}
              role='search'
            >
              <div className='input-group'>
                <input
                  type='search'
                  className='form-control'
                  placeholder='Search Tracking ID...'
                  aria-label='Search Tracking ID'
                />
                <button
                  className='btn btn-outline-secondary btn-warning'
                  type='button'
                >
                  <i className='bi bi-search'></i>
                </button>
              </div>
            </form>

            <div className='mt-2 text-center'>
              {isAuthenticated ? (
                <ul className='navbar-nav navbar-right-wrap ms-lg-auto d-flex nav-top-wrap align-items-center ms-4 ms-lg-0'>
                  <li className='dropdown ms-2'>
                    <a
                      className='rounded-circle'
                      href='#!'
                      role='button'
                      id='dropdownUser'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      <div className='avatar avatar-md avatar-indicators avatar-online'>
                        <img
                          alt='avatar'
                          src={
                            user.image
                              ? `${user.image}`
                              : 'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'
                          }
                          className='rounded-circle shadow'
                          width='40'
                          height='40'
                          style={{ maxWidth: '60' }}
                        />
                      </div>
                    </a>
                    <div className='dropdown-menu dropdown-menu-end shadow'>
                      <div className='dropdown-item'>
                        <div className='d-flex'>
                          {/* <div className="avatar avatar-md avatar-indicators avatar-online">
                          <img alt="avatar" src={user.image ? user.image : 'https://via.placeholder.com/64x64'} className="rounded-circle" />
                        </div> */}
                          <div className='ms-3 lh-1'>
                            <h5 className='mb-1'>{user.name}</h5>
                            <p className='mb-0 text-muted'>{user.email}</p>
                          </div>
                        </div>
                      </div>
                      <div className='dropdown-divider'></div>
                      <ul className='list-unstyled'>
                        <li>
                          <Link to='/account' className='dropdown-item'>
                            <i className='bi bi-person-badge me-2'></i>Profile
                          </Link>
                        </li>
                        {isAuthorizedRole && (
                          <li>
                            <Link to='/dashboard' className='dropdown-item'>
                              <i className='bi bi-speedometer me-2'></i>
                              Dashboard
                            </Link>
                          </li>
                        )}
                        <li>
                          <Link to='/my-orders' className='dropdown-item'>
                            <i className='bi bi-cart me-2'></i>My Orders
                          </Link>
                        </li>
                        <li>
                          <Link to='/track-order' className='dropdown-item'>
                            <i className='bi bi-binoculars me-2'></i>Track Order
                          </Link>
                        </li>
                        <li>
                          <Link
                            className='dropdown-item'
                            onClick={e => handleLogout(e)}
                          >
                            <i className='bi bi-power me-2'></i>Logout
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              ) : (
                <>
                  <Link
                    to='/login/user'
                    className='btn btn-sm me-2 btn-outline-light'
                    style={{ marginRight: '20px', marginBottom: marginBottom }}
                  >
                    Login
                  </Link>
                  <Link
                    to='/register/user'
                    className='btn btn-warning btn-sm me-2'
                    style={{ marginRight: '20px', marginBottom: marginBottom }}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>

            <div
              className={`mt-2 d-flex flex-column flex-sm-row justify-content-between ${
                isTabletOrMobile
                  ? 'justify-content-center align-items-center'
                  : ''
              }`}
            >
              <ul
                className={`list-unstyled d-flex mt-3 ${
                  isTabletOrMobile
                    ? 'justify-content-center'
                    : 'justify-content-start'
                }`}
              >
                <li className='ms-3'>
                  <a className='link-body-emphasis' href='#'>
                    <i
                      className='bi bi-twitter-x'
                      style={{ color: 'white' }}
                    ></i>
                  </a>
                </li>
                <li className='ms-3'>
                  <a className='link-body-emphasis' href='#'>
                    <i
                      className='bi bi-instagram'
                      style={{ color: 'white' }}
                    ></i>
                  </a>
                </li>
                <li className='ms-3'>
                  <a className='link-body-emphasis' href='#'>
                    <i
                      className='bi bi-facebook'
                      style={{ color: 'white' }}
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default FrontEndHeader
