import React, { useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import logo from '../../logo.svg'
import '../../App.css'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  // window scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

  // Define media queries for mobile and desktop images
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const isDesktop = useMediaQuery({ minWidth: 768 })

  return (
    <div className='homeScreenContainer'>
      <main>
        {/* Carousel */}
        <div
          id='myCarousel'
          className='carousel slide mb-6 shadow'
          data-bs-ride='carousel'
          style={{ borderRadius: '0 0 50px 50px' }}
        >
          {/* carousel button indicators */}
          <div className='carousel-indicators'>
            <button
              type='button'
              data-bs-target='#myCarousel'
              data-bs-slide-to='0'
              className=''
              aria-label='Slide 1'
            ></button>
            <button
              type='button'
              data-bs-target='#myCarousel'
              data-bs-slide-to='1'
              aria-label='Slide 2'
              className=''
            ></button>
            <button
              type='button'
              data-bs-target='#myCarousel'
              data-bs-slide-to='2'
              aria-label='Slide 3'
              className='active'
              aria-current='true'
            ></button>
          </div>
          {/* carousel inner */}
          <div
            className='carousel-inner'
            style={{ borderRadius: '0 0 50px 50px' }}
          >
            {/* 1 */}
            <div className='carousel-item'>
              {isMobile && (
                // Mobile image: 350x525
                <img
                  src='https://worldwidedeliveryagency.com/wp-content/uploads/2021/03/1-2.jpg'
                  alt='Bootstrap Logo'
                  className='d-block w-100'
                  style={{ maxHeight: '500px', objectFit: 'cover' }}
                />
              )}
              {isDesktop && (
                // Desktop image: 1024x600
                <img
                  src='https://www.dropoff.com/wp-content/uploads/2022/05/Shipping-vs-Delivery-What_s-the-Difference_-01-1024x600.jpg'
                  alt='Bootstrap Logo'
                  className='d-block w-100'
                  style={{ maxHeight: '500px', objectFit: 'cover' }}
                />
              )}
              {/* overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
                  zIndex: 1
                }}
              ></div>

              <div
                className='container'
                style={{
                  position: 'relative',
                  zIndex: 2
                }}
              >
                <div className='carousel-caption text-start'>
                  <h1>Global Shipping, Local Expertise</h1>
                  <p className='opacity-75' style={{ textAlign: 'justify' }}>
                    Wherever you need to send your package, we’ve got you
                    covered. With our extensive network of locations worldwide,
                    your shipment is in safe hands, arriving swiftly and
                    securely.
                  </p>
                  <p style={{ textAlign: 'justify' }}>
                    <Link to='/locations' className='btn btn-lg btn-success'>
                      Explore Our Network
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className='carousel-item'>
              {isMobile && (
                // Mobile image: 350x525
                <img
                  src='https://5156.store/static/upload/image/20230314/1678780596878165.jpg'
                  alt='Bootstrap Logo'
                  className='d-block w-100'
                  style={{ maxHeight: '500px', objectFit: 'cover' }}
                />
              )}
              {isDesktop && (
                // Desktop image: 1024x600
                <img
                  src='https://assets-global.website-files.com/60a4a4fb42c31d8c7ae0d7bd/61b0bb04360dff3c34314704_What%20Is%20Freight%20Shipping.jpg'
                  alt='Bootstrap Logo'
                  className='d-block w-100'
                  style={{ maxHeight: '500px', objectFit: 'cover' }}
                />
              )}
              {/* overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
                  zIndex: 1
                }}
              ></div>

              <div
                className='container'
                style={{
                  position: 'relative',
                  zIndex: 2
                }}
              >
                <div className='carousel-caption'>
                  <h1>24/7 Customer Support</h1>
                  <p style={{ textAlign: 'justify' }}>
                    We're here for you around the clock. Our dedicated support
                    team is ready to assist with any inquiries, ensuring a
                    smooth and worry-free shipping experience.
                  </p>
                  <p>
                    <Link to='/contact-us' className='btn btn-lg btn-success'>
                      Contact Us
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className='carousel-item active'>
              {isMobile && (
                // Mobile image: 350x525
                <img
                  src='https://i.ebayimg.com/images/g/K4kAAOSw64Zdr8gU/s-l1600.jpg'
                  alt='Bootstrap Logo'
                  className='d-block w-100'
                  style={{ maxHeight: '500px', objectFit: 'cover' }}
                />
              )}
              {isDesktop && (
                // Desktop image: 1024x600
                <img
                  src='https://lswordpress.s3.amazonaws.com/blog/wp-content/uploads/2022/02/26131521/Out-for-delivery-blog-header.png'
                  alt='Bootstrap Logo'
                  className='d-block w-100'
                  style={{ maxHeight: '500px', objectFit: 'cover' }}
                />
              )}

              {/* overlay */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
                  zIndex: 1
                }}
              ></div>

              <div
                className='container'
                style={{
                  position: 'relative',
                  zIndex: 2
                }}
              >
                <div className='carousel-caption text-end'>
                  <h1>Affordable Shipping Rates</h1>
                  <p style={{ textAlign: 'justify' }}>
                    Ship more for less with our competitive pricing. We offer
                    some of the best rates in the industry without compromising
                    on service quality. Get a quote and start saving today.
                  </p>
                  <p>
                    <Link to='/ship' className='btn btn-lg btn-success'>
                      Check Rates
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* carousel buttons */}
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#myCarousel'
            data-bs-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#myCarousel'
            data-bs-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>

        {/* info cards more services */}
        <div className='container marketing' style={{ marginTop: '50px' }}>
          <div className='row'>
            <h3 className='display-5 fw-medium'>Manage your shipments</h3>
            <div className='col-lg-3 mt-3'>
              <i
                className='bi bi-person-circle'
                style={{
                  fontSize: '140px',
                  color: '#6c757d'
                }}
              ></i>

              <p>
                <a className='btn btn-success shadow' href='#!'>
                  SCHEDULE PICKUP »
                </a>
              </p>
            </div>
            <div className='col-lg-3 mt-3'>
              <i
                className='bi bi-truck'
                style={{
                  fontSize: '140px',
                  color: '#6c757d'
                }}
              ></i>

              <p>
                <a className='btn btn-success shadow' href='#!'>
                  REDIRECT YOUR PACKAGE »
                </a>
              </p>
            </div>
            <div className='col-lg-3 mt-3'>
              <i
                className='bi bi-geo-fill'
                style={{
                  fontSize: '140px',
                  color: '#6c757d'
                }}
              ></i>

              <p>
                <Link to='/locations' className='btn btn-success shadow'>
                  FIND LOCATIONS »
                </Link>
              </p>
            </div>
            <div className='col-lg-3 mt-3'>
              <i
                className='bi bi-cash-stack'
                style={{
                  fontSize: '140px',
                  color: '#6c757d'
                }}
              ></i>

              <p>
                <Link to='/ship' className='btn btn-success shadow'>
                  FRIENDLY SHIPPING RATES »
                </Link>
              </p>
            </div>
          </div>

          <hr className='featurette-divider' />

          {/* Sign up CTA info */}
          <div className='container mt-5 mb-5'>
            <div
              className='row rounded shadow'
              style={{ backgroundColor: '#006400' }}
            >
              {/* <!-- Column 1 --> */}
              <div className='col-sm-2 d-flex align-items-center justify-content-center'>
                <i
                  className='bi bi-tags'
                  style={{ fontSize: '90px', color: '#FFFFFF' }}
                ></i>
              </div>
              {/* <!-- Column 2 --> */}
              <div className='col-sm-6 text-center text-sm-start'>
                <h2 className='text-white my-4' style={{ fontSize: '25px' }}>
                  Sign up now to enjoy personalized shipping rates!
                </h2>
                <p className='text-white'>
                  Benefit from our services and solutions designed to meet all
                  of your shipping needs.
                </p>
              </div>
              {/* <!-- Column 3 --> */}
              <div className='col-sm-4 d-flex align-items-center justify-content-center'>
                <Link to='/register/user' className='btn btn-warning text-dark'>
                  OPEN AN ACCOUNT
                </Link>
              </div>
            </div>
          </div>

          {/*info cards */}
          <div className='row align-items-md-stretch mb-4'>
            <div className='col-md-4 mt-3'>
              <div className='h-100 p-5 text-bg-dark rounded-3 shadow'>
                <h2>Report Fraudulent Activities</h2>
                <p style={{ textAlign: 'justify' }}>
                  Help us ensure the security and integrity of our services by
                  reporting any suspicious or fraudulent activities. Your
                  vigilance is crucial in protecting our community. If you
                  encounter any fraudulent behavior, please provide detailed
                  information so we can take immediate action.
                </p>
                <Link
                  to='/report-fraud'
                  className='btn btn-success btn-outline-light'
                  type='button'
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className='col-md-4 mt-3'>
              <div className='h-100 p-5 bg-body-tertiary border rounded-3 shadow'>
                <h2>Conditions of Carriage</h2>
                <p style={{ textAlign: 'justify' }}>
                  Familiarize yourself with the Terms and Conditions of Carriage
                  to ensure a clear understanding of the rules and guidelines
                  for shipping your packages.
                </p>
                <Link
                  to='/conditions-of-carriage'
                  className='btn btn-outline-success shadow'
                  type='button'
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className='col-md-4 mt-3'>
              <div className='h-100 p-5 bg-body-tertiary border rounded-3 shadow'>
                <h2>Frequently Asked Questions (FAQ)</h2>
                <p style={{ textAlign: 'justify' }}>
                Have questions about our services? Find answers to the most commonly asked questions here. From shipping details to account management, our FAQ section provides all the information you need to ensure a smooth experience with Demo Express LTD.
                </p>
                <Link
                  to='/faq'
                  className='btn btn-outline-success shadow'
                  type='button'
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* more info image and description */}
        <hr
          className='featurette-divider'
          style={{ marginTop: '70px', marginBottom: '50px' }}
        />

        <div className='container d-flex align-items-center justify-content-center'>
          <div
            className='row featurette'
            style={{ marginTop: '30px', marginBottom: '20px' }}
          >
            <div
              className='col-md-7 order-md-2 justify-content-center align-content-center'
              style={{ marginTop: isDesktop ? '40px' : '0' }}
            >
              <h2 className='featurette-heading fw-normal lh-1'>
                Stay Updated with Our Latest Services{' '}
                <span className='text-body-secondary'>See for yourself.</span>
              </h2>
              <p className='lead'>
                Keep informed about our latest shipping services, special
                offers, and operational updates. Our service news section
                ensures you never miss out on important information that can
                benefit your shipping needs.
              </p>
              <Link
                to='/service-news'
                className='btn btn-outline-success shadow mb-4'
              >
                View all Service News
              </Link>
            </div>
            <div className='col-md-5 order-md-1 d-flex justify-content-center'>
              <img
                src='https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoaXBwaW5nfGVufDB8fDB8fHww'
                alt='ServiceImage'
                className='d-block w-100 rounded shadow'
                width='500'
                height='300'
                style={{ maxHeight: '300px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomeScreen
