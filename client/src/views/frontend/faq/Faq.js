import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Faq = () => {
  // window scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
              Frequently Asked Questions (FAQ)
            </h1>
            <p
              className='text-white'
              style={{
                marginBottom: '60px'
              }}
            >
              Our comprehensive FAQ section is designed to help you quickly find
              the information you need, from account management and shipping
              options to payment methods and tracking orders.
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
                  FAQ
                </a>
              </li>
            </ol>
          </nav>
          {/* breadcrumb end */}
        </div>
      </div>
      {/* Breadcrumb  end*/}

      <div class='container-fluid mt-3'>
        {/* Row start */}
        <div class='row'>
          <div class='col-xl-12 pa-0'>
            <div class='mt-2 faq-search-wrap bg-green-dark-3 rounded shadow'>
              <div class='container'>
                <h1 class='display-5 text-white mb-20'>
                  Ask a question or browse by category below.
                </h1>

                <div class='input-group'>
                  <input
                    class='form-control form-control-lg filled-input bg-white'
                    placeholder='Search by keywords'
                    type='search'
                  />
                  <button
                    className='btn btn-outline-secondary btn-warning'
                    type='button'
                  >
                    <i className='bi bi-search'></i>
                  </button>
                </div>
              </div>
            </div>

            <div class='container mt-sm-60 mt-30'>
              <div class='row'>
                {/* category start */}
                <div class='col-xl-4 mb-5'>
                  <div class='card shadow'>
                    <h6 class='card-header'>Category</h6>
                    <ul class='list-group list-group-flush'>
                      <li class='list-group-item d-flex align-items-center active'>
                        <i class='ion ion-md-sunny mr-15'></i>Terms &amp;
                        conditions
                        <span class='badge badge-light badge-pill ml-15'>
                          06
                        </span>
                      </li>
                      <li class='list-group-item d-flex align-items-center'>
                        <i class='ion ion-md-unlock mr-15'></i>Privacy policy
                        <span class='badge badge-light badge-pill ml-15'>
                          14
                        </span>
                      </li>
                      <li class='list-group-item d-flex align-items-center'>
                        <i class='ion ion-md-bookmark mr-15'></i>Terms of use
                        <span class='badge badge-light badge-pill ml-15'>
                          10
                        </span>
                      </li>
                      <li class='list-group-item d-flex align-items-center'>
                        <i class='ion ion-md-filing mr-15'></i>Documentation
                        <span class='badge badge-light badge-pill ml-15'>
                          27
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* category end */}

                {/* faq start */}
                <div class='col-xl-8 text-center mb-5'>
                  <div class='card card-lg shadow'>
                    <h3 class='card-header border-bottom-0'>
                      Terms and Conditions
                    </h3>
                    <div class='accordion' id='accordionPanelsStayOpenExample'>
                      <div class='accordion-item'>
                        <h2
                          class='accordion-header'
                          id='panelsStayOpen-headingOne'
                        >
                          <button
                            class='accordion-button'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#panelsStayOpen-collapseOne'
                            aria-expanded='true'
                            aria-controls='panelsStayOpen-collapseOne'
                          >
                            Accordion Item #1
                          </button>
                        </h2>
                        <div
                          id='panelsStayOpen-collapseOne'
                          class='accordion-collapse collapse show'
                          aria-labelledby='panelsStayOpen-headingOne'
                        >
                          <div class='accordion-body'>
                            <strong>
                              This is the first item's accordion body.
                            </strong>{' '}
                            It is shown by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the <code>.accordion-body</code>, though the
                            transition does limit overflow.
                          </div>
                        </div>
                      </div>
                      <div class='accordion-item'>
                        <h2
                          class='accordion-header'
                          id='panelsStayOpen-headingTwo'
                        >
                          <button
                            class='accordion-button collapsed'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#panelsStayOpen-collapseTwo'
                            aria-expanded='false'
                            aria-controls='panelsStayOpen-collapseTwo'
                          >
                            Accordion Item #2
                          </button>
                        </h2>
                        <div
                          id='panelsStayOpen-collapseTwo'
                          class='accordion-collapse collapse'
                          aria-labelledby='panelsStayOpen-headingTwo'
                        >
                          <div class='accordion-body'>
                            <strong>
                              This is the second item's accordion body.
                            </strong>{' '}
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the <code>.accordion-body</code>, though the
                            transition does limit overflow.
                          </div>
                        </div>
                      </div>
                      <div class='accordion-item'>
                        <h2
                          class='accordion-header'
                          id='panelsStayOpen-headingThree'
                        >
                          <button
                            class='accordion-button collapsed'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#panelsStayOpen-collapseThree'
                            aria-expanded='false'
                            aria-controls='panelsStayOpen-collapseThree'
                          >
                            Accordion Item #3
                          </button>
                        </h2>
                        <div
                          id='panelsStayOpen-collapseThree'
                          class='accordion-collapse collapse'
                          aria-labelledby='panelsStayOpen-headingThree'
                        >
                          <div class='accordion-body'>
                            <strong>
                              This is the third item's accordion body.
                            </strong>{' '}
                            It is hidden by default, until the collapse plugin
                            adds the appropriate classes that we use to style
                            each element. These classes control the overall
                            appearance, as well as the showing and hiding via
                            CSS transitions. You can modify any of this with
                            custom CSS or overriding our default variables. It's
                            also worth noting that just about any HTML can go
                            within the <code>.accordion-body</code>, though the
                            transition does limit overflow.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* faq end */}
              </div>
            </div>
          </div>
        </div>
        {/* row end */}
      </div>
    </>
  )
}

export default Faq
