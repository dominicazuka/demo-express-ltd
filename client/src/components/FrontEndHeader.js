import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

const FrontEndHeader = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const marginBottom = isTabletOrMobile ? '180px' : '0' // Adjust margin bottom as needed
  const marginRight = isTabletOrMobile ? '0px' : '20px'

  return (
    <>
      <nav
        className='navbar navbar-expand-sm'
        aria-label='Navbar'
        style={{ backgroundColor: 'green' }}
      >
        <div className='container-fluid'>
          <Link to="/" className='navbar-brand'>
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
                <Link to='/about' className='nav-link active' style={{ color: 'white' }}>
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
                    <a className='dropdown-item' href='#'>
                      Another action
                    </a>
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
                    <a className='dropdown-item' href='#'>
                      Another action
                    </a>
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
              <button type='button' className='btn btn-outline-light me-2'>
                Login
              </button>
              <button type='button' className='btn btn-warning'>
                Sign-up
              </button>
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

export default FrontEndHeader;
