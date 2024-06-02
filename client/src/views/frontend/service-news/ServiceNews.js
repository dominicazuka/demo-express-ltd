import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

const ServiceNews = () => {
  // window scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Define media queries for mobile and desktop images
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const isDesktop = useMediaQuery({ minWidth: 768 })
  return (
    <>
      {/* Breadcrumb  */}
      <div
        className='shadow'
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcHBpbmd8ZW58MHx8MHx8fDA%3D")',
          height: '250px',
          maxHeight: '250px',
          objectFit: 'cover',
          position: 'relative',
          borderRadius: '0 0 50px 50px'
        }}
      >
        {/* overlay start */}
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
        {/* overlay end */}
        <div
          className=''
          style={{ textAlign: 'left', position: 'relative', zIndex: 2 }}
        >
          <div className='container'>
            <h1
              className='mt-5'
              style={{
                display: 'inline-block',
                color: '#FFFFFF'
              }}
            >
              Service News
            </h1>
            <p
              className='text-white'
              style={{
                marginBottom: '60px'
              }}
            >
              Stay informed with the latest news and updates about our services.
              From important announcements and feature releases to maintenance
              schedules and performance improvements, our Service News page
              keeps you in the loop.
            </p>
          </div>

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
                  Service News
                </a>
              </li>
            </ol>
          </nav>
          {/* breadcrumb end */}
        </div>
      </div>
      {/* Breadcrumb  end*/}

      <div className='container'>
        {/* 1 */}
        <div className='row'>
          <div className='col-lg-12'>
            {/* <!-- Page title --> */}
            <div className='my-5'>
              <h3 className='text-start justify-content-start ms-auto'>
                Latest Service Updates
              </h3>
              <hr />
            </div>
          </div>
          <div className='col-lg-12'>
            {/* service news start */}
            <div class='accordion' id='accordionExample'>
              <div class='accordion-item'>
                <h2 class='accordion-header'>
                  <button
                    class='accordion-button'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseOne'
                    aria-expanded='true'
                    aria-controls='collapseOne'
                  >
                    Accordion Item #1
                  </button>
                </h2>
                <div
                  id='collapseOne'
                  class='accordion-collapse collapse show'
                  data-bs-parent='#accordionExample'
                >
                  <div class='accordion-body'>
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class='accordion-item'>
                <h2 class='accordion-header'>
                  <button
                    class='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseTwo'
                    aria-expanded='false'
                    aria-controls='collapseTwo'
                  >
                    Accordion Item #2
                  </button>
                </h2>
                <div
                  id='collapseTwo'
                  class='accordion-collapse collapse'
                  data-bs-parent='#accordionExample'
                >
                  <div class='accordion-body'>
                    <strong>This is the second item's accordion body.</strong>{' '}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class='accordion-item'>
                <h2 class='accordion-header'>
                  <button
                    class='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseThree'
                    aria-expanded='false'
                    aria-controls='collapseThree'
                  >
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  id='collapseThree'
                  class='accordion-collapse collapse'
                  data-bs-parent='#accordionExample'
                >
                  <div class='accordion-body'>
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
            {/* service news end */}
          </div>
        </div>
        {/* 1 end */}

        {/* 2 */}
        <div className='row'>
          <div className='col-lg-12'>
            {/* <!-- Page title --> */}
            <div className='my-5'>
              <h3 className='text-start justify-content-start ms-auto'>
                Online Fraud Alert
              </h3>
              <hr />
            </div>
          </div>
          <div className='col-lg-12'>
            {/* service news start */}
            <div class='accordion' id='accordionExample'>
              <div class='accordion-item'>
                <h2 class='accordion-header'>
                  <button
                    class='accordion-button'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseOne'
                    aria-expanded='true'
                    aria-controls='collapseOne'
                  >
                    Accordion Item #1
                  </button>
                </h2>
                <div
                  id='collapseOne'
                  class='accordion-collapse collapse show'
                  data-bs-parent='#accordionExample'
                >
                  <div class='accordion-body'>
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class='accordion-item'>
                <h2 class='accordion-header'>
                  <button
                    class='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseTwo'
                    aria-expanded='false'
                    aria-controls='collapseTwo'
                  >
                    Accordion Item #2
                  </button>
                </h2>
                <div
                  id='collapseTwo'
                  class='accordion-collapse collapse'
                  data-bs-parent='#accordionExample'
                >
                  <div class='accordion-body'>
                    <strong>This is the second item's accordion body.</strong>{' '}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class='accordion-item'>
                <h2 class='accordion-header'>
                  <button
                    class='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseThree'
                    aria-expanded='false'
                    aria-controls='collapseThree'
                  >
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  id='collapseThree'
                  class='accordion-collapse collapse'
                  data-bs-parent='#accordionExample'
                >
                  <div class='accordion-body'>
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
            {/* service news end */}
          </div>
        </div>
        {/* 2 end */}

        {/* 3 */}
        <div className='row'>
          <div className='col-lg-12'>
            {/* <!-- Page title --> */}
            <div className='my-5'>
              <h3 className='text-start justify-content-start ms-auto'>
                Service Disruption Alerts
              </h3>
              <hr />
            </div>
          </div>
          <div className='col-lg-12'>
            {/* service news start */}
            <div class='accordion' id='accordionExample'>
              <div class='accordion-item'>
                <h2 class='accordion-header'>
                  <button
                    class='accordion-button'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseOne'
                    aria-expanded='true'
                    aria-controls='collapseOne'
                  >
                    Accordion Item #1
                  </button>
                </h2>
                <div
                  id='collapseOne'
                  class='accordion-collapse collapse show'
                  data-bs-parent='#accordionExample'
                >
                  <div class='accordion-body'>
                    <strong>This is the first item's accordion body.</strong> It
                    is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class='accordion-item'>
                <h2 class='accordion-header'>
                  <button
                    class='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseTwo'
                    aria-expanded='false'
                    aria-controls='collapseTwo'
                  >
                    Accordion Item #2
                  </button>
                </h2>
                <div
                  id='collapseTwo'
                  class='accordion-collapse collapse'
                  data-bs-parent='#accordionExample'
                >
                  <div class='accordion-body'>
                    <strong>This is the second item's accordion body.</strong>{' '}
                    It is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class='accordion-item'>
                <h2 class='accordion-header'>
                  <button
                    class='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseThree'
                    aria-expanded='false'
                    aria-controls='collapseThree'
                  >
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  id='collapseThree'
                  class='accordion-collapse collapse'
                  data-bs-parent='#accordionExample'
                >
                  <div class='accordion-body'>
                    <strong>This is the third item's accordion body.</strong> It
                    is hidden by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
            {/* service news end */}
          </div>
        </div>
        {/* 3 end */}

        {/* more info image and description */}
        <hr
          className='featurette-divider'
          style={{ marginTop: '70px', marginBottom: '50px' }}
        />

        <div className='container d-flex align-items-center justify-content-center mb-5'>
          <div
            className='row featurette'
          >
            <div className='col-md-5 order-md-1 d-flex justify-content-center'>
              <img
                src='https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcHBpbmd8ZW58MHx8MHx8fDA%3D'
                alt='service'
                className='d-block w-100 rounded shadow'
                width='500'
                height='300'
                style={{ maxHeight: '300px', objectFit: 'cover' }}
              />
            </div>
            <div
              className='col-md-7 mt-3 justify-content-center align-content-center'
              style={{ marginTop: isDesktop ? '70px' : '0' }}
            >
              <h2 className='featurette-heading fw-normal lh-1'>
                Get in touch {' '}
                <span className='text-body-secondary'>See for yourself.</span>
              </h2>
              <p className='lead'>We’re here to help! Whether you have questions, feedback, or need assistance with our services, our team is ready to assist you. Reach out to us through our contact form, email, or phone, and we’ll get back to you as soon as possible. </p>
              <Link to='/contact-us' className='btn btn-outline-success shadow mb-4'>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceNews
