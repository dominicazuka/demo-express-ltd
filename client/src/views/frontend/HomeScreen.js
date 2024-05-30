import React from 'react'
import { useMediaQuery } from 'react-responsive'
import logo from '../../logo.svg'
import '../../App.css'

const HomeScreen = () => {
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
          style={{borderRadius: '0 0 50px 50px'}}
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
          <div className='carousel-inner' style={{borderRadius: '0 0 50px 50px'}}>
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
                  <h1>Example headline.</h1>
                  <p className='opacity-75'>
                    Some representative placeholder content for the first slide
                    of the carousel.
                  </p>
                  <p>
                    <a className='btn btn-lg btn-success' href='#'>
                      Sign up today
                    </a>
                  </p>
                </div>
              </div>
            </div>
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
                  <h1>Another example headline.</h1>
                  <p>
                    Some representative placeholder content for the second slide
                    of the carousel.
                  </p>
                  <p>
                    <a className='btn btn-lg btn-success' href='#'>
                      Learn more
                    </a>
                  </p>
                </div>
              </div>
            </div>
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
                  <h1>One more for good measure.</h1>
                  <p>
                    Some representative placeholder content for the third slide
                    of this carousel.
                  </p>
                  <p>
                    <a className='btn btn-lg btn-success' href='#'>
                      Browse gallery
                    </a>
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
            <div className='col-lg-4 mt-5'>
              <img
                src='https://via.placeholder.com/40x32'
                alt='Bootstrap Logo'
                width='140'
                height='140'
                className='me-2 rounded-circle shadow'
              />

              <h2 className='fw-normal'>Heading</h2>
              <p>
                Some representative placeholder content for the three columns of
                text below the carousel. This is the first column.
              </p>
              <p>
                <a className='btn btn-success shadow' href='#'>
                  View details »
                </a>
              </p>
            </div>
            <div className='col-lg-4 mt-5'>
              <img
                src='https://via.placeholder.com/40x32'
                alt='Bootstrap Logo'
                width='140'
                height='140'
                className='me-2 rounded-circle shadow'
              />

              <h2 className='fw-normal'>Heading</h2>
              <p>
                Another exciting bit of representative placeholder content. This
                time, we've moved on to the second column.
              </p>
              <p>
                <a className='btn btn-success shadow' href='#'>
                  View details »
                </a>
              </p>
            </div>
            <div className='col-lg-4 mt-5'>
              <img
                src='https://via.placeholder.com/40x32'
                alt='Bootstrap Logo'
                width='140'
                height='140'
                className='me-2 rounded-circle shadow'
              />

              <h2 className='fw-normal'>Heading</h2>
              <p>
                And lastly this, the third column of representative placeholder
                content.
              </p>
              <p>
                <a className='btn btn-success shadow' href='#'>
                  View details »
                </a>
              </p>
            </div>
          </div>

          <hr className='featurette-divider' />
          {/* jumbrotron info */}
          <div className='container-fluid py-5'>
            <h1 className='display-5 fw-bold'>Custom jumbotron</h1>
            <p className=' fs-4'>
              Using a series of utilities, you can create this jumbotron, just
              like the one in previous versions of Bootstrap. Check out the
              examples below for how you can remix and restyle it to your
              liking.
            </p>
            <button className='btn btn-success btn-lg shadow' type='button'>
              Example button
            </button>
          </div>

          {/*info cards */}
          <div className='row align-items-md-stretch mb-4'>
            <div className='col-md-4 mt-3'>
              <div className='h-100 p-5 text-bg-dark rounded-3 shadow'>
                <h2>Change the background</h2>
                <p>
                  Swap the background-color utility and add a `.text-*` color
                  utility to mix up the jumbotron look. Then, mix and match with
                  additional component themes and more.
                </p>
                <button
                  className='btn btn-success btn-outline-light'
                  type='button'
                >
                  Example button
                </button>
              </div>
            </div>
            <div className='col-md-4 mt-3'>
              <div className='h-100 p-5 bg-body-tertiary border rounded-3 shadow'>
                <h2>Add borders</h2>
                <p>
                  Or, keep it light and add a border for some added definition
                  to the boundaries of your content. Be sure to look under the
                  hood at the source HTML here as we've adjusted the alignment
                  and sizing of both column's content for equal-height.
                </p>
                <button className='btn btn-outline-success shadow' type='button'>
                  Example button
                </button>
              </div>
            </div>

            <div className='col-md-4 mt-3'>
              <div className='h-100 p-5 bg-body-tertiary border rounded-3 shadow'>
                <h2>Add borders</h2>
                <p>
                  Or, keep it light and add a border for some added definition
                  to the boundaries of your content. Be sure to look under the
                  hood at the source HTML here as we've adjusted the alignment
                  and sizing of both column's content for equal-height.
                </p>
                <button className='btn btn-outline-success shadow' type='button'>
                  Example button
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* more info image and description */}
        <hr className='featurette-divider' style={{ marginTop: '70px', marginBottom: '50px' }} />
        
        <div className="container d-flex align-items-center justify-content-center">
          <div className='row featurette' style={{marginTop: '30px', marginBottom: '20px'}}>
          <div className='col-md-7 order-md-2' style={{ marginTop: isDesktop ? '40px' : '0' }}>
            <h2 className='featurette-heading fw-normal lh-1'>
              Oh yeah, it’s that good.{' '}
              <span className='text-body-secondary'>See for yourself.</span>
            </h2>
            <p className='lead'>
              Another featurette? Of course. More placeholder content here to
              give you an idea of how this layout would work with some actual
              real-world content in place.
            </p>
            <button className="btn btn-outline-success shadow mb-4">
              View all Service News
            </button>
          </div>
          <div className='col-md-5 order-md-1 d-flex justify-content-center'>
            <img
              src='https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoaXBwaW5nfGVufDB8fDB8fHww'
              alt='Image'
              className='d-block w-100 rounded shadow'
              width = '500'
              height = '300'
              style={{ maxHeight: '300px', objectFit: 'cover' }}
            />

          </div>
        </div>
        </div>
      </main>
    </div>
  )
}

export default HomeScreen;