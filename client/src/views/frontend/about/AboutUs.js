import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  // window scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='clearfix' style={{ position: 'relative' }}>
      {/* Breadcrumb  */}
      <div
        className='shadow'
        style={{
          backgroundImage:
            'url("https://www.montway.com/app/uploads/2018/07/Should-You-Transport-Your-Car-via-Airplane-Or-Not--1200x675.jpg")',
          height: '250px',
          maxHeight: '250px',
          objectFit: 'cover',
          position: 'relative',
          borderRadius: '0 0 50px 50px'
        }}
      >
        <div
          className='overlay'
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
            zIndex: 1,
            backdropFilter: 'blur(10px)', // Adjust the blur intensity as needed
            borderRadius: '0 0 50px 50px'
          }}
        ></div>
        <div
          className=''
          style={{ textAlign: 'left', position: 'relative', zIndex: 2 }}
        >
          <h1
            className='ml-5 mt-5 p-5'
            style={{
              display: 'inline-block',
              color: '#FFFFFF'
            }}
          >
            About Demo Express LTD
          </h1>

          {/* Breadcrumb */}
          <nav
            aria-label='breadcrumb'
            className='p-5'
            style={{ marginTop: '-90px' }}
          >
            <ol className='breadcrumb breadcrumb-chevron p-2 bg-body-tertiary rounded-3 shadow'>
              <li className='breadcrumb-item'>
                <Link to='/' className='link-body-emphasis'>
                  <i className='bi bi-house-door-fill'></i>
                  <span className='visually-hidden'>Home</span>
                </Link>
              </li>
              <li className='breadcrumb-item'>
                <a
                  className='link-body-emphasis fw-semibold text-decoration-none'
                  href='#!'
                >
                  About
                </a>
              </li>
            </ol>
          </nav>
          {/* breadcrumb end */}
        </div>
      </div>

      {/* features start */}
      <div className='container mt-4 px-4 py-5'>
        <h2 className='pb-2 border-bottom'>Features with title</h2>
        <div className='row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5'>
          <div className='col d-flex flex-column align-items-start gap-2'>
            <h2 className='fw-bold text-body-emphasis'>
              Left-aligned title explaining these awesome features
            </h2>
            <p className='text-body-secondary'>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a href='#' className='btn btn-success shadow btn-lg'>
              Primary button
            </a>
          </div>

          <div className='col'>
            <div className='row row-cols-1 row-cols-sm-2 g-4'>
              <div className='col d-flex flex-column gap-2'>
                <div className='feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-4 rounded-3'>
                  <i className='bi bi-gear' width='1em' height='1em'></i>
                </div>
                <h4 className='fw-semibold mb-0 text-body-emphasis'>
                  Featured title
                </h4>
                <p className='text-body-secondary'>
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>

              <div className='col d-flex flex-column gap-2'>
                <div className='feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-4 rounded-3'>
                  <i className='bi bi-graph-up-arrow'></i>
                </div>
                <h4 className='fw-semibold mb-0 text-body-emphasis'>
                  Featured title
                </h4>
                <p className='text-body-secondary'>
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>

              <div className='col d-flex flex-column gap-2'>
                <div className='feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-4 rounded-3'>
                  <i className='bi bi-clipboard-data-fill'></i>
                </div>
                <h4 className='fw-semibold mb-0 text-body-emphasis'>
                  Featured title
                </h4>
                <p className='text-body-secondary'>
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>

              <div className='col d-flex flex-column gap-2'>
                <div className='feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-4 rounded-3'>
                  <i className='bi bi-people'></i>
                </div>
                <h4 className='fw-semibold mb-0 text-body-emphasis'>
                  Featured title
                </h4>
                <p className='text-body-secondary'>
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* features end */}

      {/* Cards start */}
      <div className='container px-4 py-5' id='custom-cards'>
        <h2 className='pb-2 border-bottom'>Custom cards</h2>

        <div className='row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5'>
          <div className='col'>
            <div className='card card-cover h-100 overflow-hidden bg-success bg-gradient rounded-4 shadow'>
              <div
                className='d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1'
                style={{ zIndex: 1 }}
              >
                <h3 className='pt-5 mt-5 mb-4 display-6 lh-1 fw-bold'>
                  Short title, long jacket
                </h3>
                <ul className='d-flex list-unstyled mt-auto'>
                  <li className='me-auto'>
                    <img
                      src='https://github.com/twbs.png'
                      alt='Bootstrap'
                      width='32'
                      height='32'
                      className='rounded-circle border border-white'
                    />
                  </li>
                  <li className='d-flex align-items-center me-3'>
                    <i
                      className='bi bi-compass'
                      style={{ marginRight: '10px' }}
                    ></i>
                    <small>Earth</small>
                  </li>
                  <li className='d-flex align-items-center'>
                    <i
                      className='bi bi-calendar-date-fill'
                      style={{ marginRight: '10px' }}
                    ></i>
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='col'>
            <div className='card card-cover h-100 overflow-hidden bg-success bg-gradient rounded-4 shadow'>
              <div className='d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1'>
                <h3 className='pt-5 mt-5 mb-4 display-6 lh-1 fw-bold'>
                  Much longer title that wraps to multiple lines
                </h3>
                <ul className='d-flex list-unstyled mt-auto'>
                  <li className='me-auto'>
                    <img
                      src='https://github.com/twbs.png'
                      alt='Bootstrap'
                      width='32'
                      height='32'
                      className='rounded-circle border border-white'
                    />
                  </li>
                  <li className='d-flex align-items-center me-3'>
                    <i
                      className='bi bi-compass'
                      style={{ marginRight: '10px' }}
                    ></i>
                    <small>Pakistan</small>
                  </li>
                  <li className='d-flex align-items-center'>
                    <i
                      className='bi bi-calendar-date-fill'
                      style={{ marginRight: '10px' }}
                    ></i>
                    <small>4d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className='col'>
            <div className='text-white card card-cover h-100 overflow-hidden bg-success bg-gradient rounded-4 shadow'>
              <div className='d-flex flex-column h-100 p-5 pb-3 text-shadow-1'>
                <h3 className='pt-5 mt-5 mb-4 display-6 lh-1 fw-bold'>
                  Another longer title belongs here
                </h3>
                <ul className='d-flex list-unstyled mt-auto'>
                  <li className='me-auto'>
                    <img
                      src='https://github.com/twbs.png'
                      alt='Bootstrap'
                      width='32'
                      height='32'
                      className='rounded-circle border border-white'
                    />
                  </li>
                  <li className='d-flex align-items-center me-3'>
                    <i
                      className='bi bi-compass'
                      style={{ marginRight: '10px' }}
                    ></i>
                    <small>California</small>
                  </li>
                  <li className='d-flex align-items-center'>
                    <i
                      className='bi bi-calendar-date-fill'
                      style={{ marginRight: '10px' }}
                    ></i>

                    <small>5d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* cards end */}

      {/* columns start */}
      <div className='container px-4 py-5' id='featured-3'>
        <h2 className='pb-2 border-bottom'>Columns with icons</h2>
        <div className='row g-4 py-5 row-cols-1 row-cols-lg-3'>
          <div className='feature col'>
            <div className='feature-icon d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-2 mb-3 rounded-3 p-2 shadow'>
              <i class='bi bi-toggles'></i>
            </div>
            <h3 className='fs-2 text-body-emphasis'>Featured title</h3>
            <p style={{ textAlign: 'justify' }}>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a
              href='#'
              className='icon-link'
              style={{ color: 'green', textDecorationColor: 'green' }}
            >
              Call to action
              <i class='bi bi-chevron-double-right'></i>
            </a>
          </div>
          <div className='feature col'>
            <div className='feature-icon d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-2 mb-3 rounded-3 p-2 shadow'>
              <i class='bi bi-collection'></i>
            </div>
            <h3 className='fs-2 text-body-emphasis'>Featured title</h3>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a
              href='#'
              className='icon-link'
              style={{ color: 'green', textDecorationColor: 'green' }}
            >
              Call to action
              <i class='bi bi-chevron-double-right'></i>
            </a>
          </div>
          <div className='feature col'>
            <div className='feature-icon d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-2 mb-3 rounded-3 p-2 shadow'>
              <i class='bi bi-person-vcard'></i>
            </div>
            <h3 className='fs-2 text-body-emphasis'>Featured title</h3>
            <p style={{ textAlign: 'justify' }}>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
            <a
              href='#!'
              className='icon-link'
              style={{ color: 'green', textDecorationColor: 'green' }}
            >
              Call to action
              <i class='bi bi-chevron-double-right'></i>
            </a>
          </div>
        </div>
      </div>
      {/* columns end */}
    </div>
  )
}

export default AboutUs
