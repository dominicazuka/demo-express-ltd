import React from 'react'
import { useMediaQuery } from 'react-responsive'
const FrontEndFooter = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

  return (
    <div className='container'>
      <footer className='py-5'>
        <div className='row'>
          <div className='col-6 col-md-2 mb-3'>
            <h5>Section</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>
                  Home
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>
                  Features
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>
                  Pricing
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>
                  FAQs
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className='col-6 col-md-2 mb-3'>
            <h5>Section</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>
                  Home
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>
                  Features
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>
                  Pricing
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>
                  FAQs
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className='col-6 col-md-2 mb-3'>
            <h5>Section</h5>
            <ul className='nav flex-column'>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>
                  Home
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>
                  Features
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>
                  Pricing
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>
                  FAQs
                </a>
              </li>
              <li className='nav-item mb-2'>
                <a href='#' className='nav-link p-0 text-body-secondary'>
                  About
                </a>
              </li>
            </ul>
          </div>

          <div className='col-md-5 offset-md-1 mb-3'>
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className='d-flex flex-column flex-sm-row w-100 gap-2'>
                <label for='newsletter1' className='visually-hidden'>
                  Email address
                </label>
                <input
                  id='newsletter1'
                  type='text'
                  className='form-control'
                  placeholder='Email address'
                />
                <button className='btn btn-success shadow' type='button'>
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div
          className={`d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top ${
            isTabletOrMobile ? 'justify-content-center align-items-center' : ''
          }`}
        >
          <p>
            {new Date().getFullYear()} © Demo Express LTD | Crafted with{' '}
            <i className='bi bi-heart text-danger'></i> by{' '}
            <a
              href='https://omimek.com'
              target='_blank'
              rel='noopener noreferrer'
              style={{color:"green"}}
            >
              Omimek Technology
            </a>
          </p>
          <ul
            className={`list-unstyled d-flex ${
              isTabletOrMobile
                ? 'justify-content-center'
                : 'justify-content-start'
            }`}
          >
            <li className='ms-3'>
              <a className='link-body-emphasis' href='#'>
                <i className='bi bi-twitter-x' style={{color: "green"}}></i>
              </a>
            </li>
            <li className='ms-3'>
              <a className='link-body-emphasis' href='#'>
                <i className='bi bi-instagram' style={{color: "green"}}></i>
              </a>
            </li>
            <li className='ms-3'>
              <a className='link-body-emphasis' href='#'>
                <i className='bi bi-facebook' style={{color: "green"}}></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default FrontEndFooter
