import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PhoneInput from 'react-phone-number-input'
import { useMediaQuery } from 'react-responsive'
const RegisterPageUser = () => {
  // window scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const useFormValidation = () => {
    useEffect(() => {
      const forms = document.querySelectorAll('.needs-validation')

      Array.from(forms).forEach(form => {
        form.addEventListener(
          'submit',
          event => {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
              // Add 'was-validated' class to show validation messages
              form.classList.add('was-validated')
              // Highlight the required fields with the 'is-invalid' class
              const invalidInputs = form.querySelectorAll(':invalid')
              invalidInputs.forEach(input => {
                input.classList.add('is-invalid')
              })
            }

            form.classList.add('was-validated')
          },
          false
        )
      })

      return () => {
        // Cleanup event listeners
        Array.from(forms).forEach(form => {
          form.removeEventListener('submit', () => {})
        })
      }
    }, [])
  }

  useFormValidation()

  const handlePhoneNumberInput = e => {}

  return (
    <div className='clearfix' style={{ position: 'relative' }}>
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
              Open an account
            </h1>
            <p
              className='text-white'
              style={{
                marginBottom: '60px'
              }}
            >
              Take advantage of our services and solutions designed to meet all
              of your shipping requirements. Open a Demo Express LTD shipping
              account below. Let’s get started!
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
                  Register
                </a>
              </li>
            </ol>
          </nav>
          {/* breadcrumb end */}
        </div>
      </div>
      {/* Breadcrumb  end*/}

      {/* cta start */}
      <div class='container my-5 mb-4'>
        <div class='position-relative p-2 text-center text-muted bg-body border border-dashed rounded-5 shadow'>
          <h1 class='mt-2 text-body-emphasis'>
            Sign up now and enjoy personalized shipping rates!
          </h1>
          <h3 class='text-muted col-lg-6 mx-auto mb-2 mt-5'>
            Have an Account?
          </h3>
          <div className='row'>
            <div className='col-lg-12'>
              <Link
                to='/login/user'
                rel='noopener noreferrer'
                className='cursor-pointer'
                aria-label='RegisterUser'
                style={{ color: 'green' }}
              >
                <button class='btn btn-success px-5 mb-3 shadow' type='button'>
                  <i
                    class='bi bi-person-bounding-box'
                    style={{ marginRight: '10px' }}
                  ></i>
                  USER LOGIN
                </button>
              </Link>
            </div>

            <div className='col-lg-12'>
              <Link
                to='/login/driver'
                rel='noopener noreferrer'
                className='cursor-pointer'
                aria-label='RegisterDriver'
                style={{ color: 'green' }}
              >
                <button class='btn btn-success px-5 mb-3 shadow' type='button'>
                  <i
                    class='bi bi-ev-front-fill'
                    style={{ marginRight: '10px' }}
                  ></i>
                  DRIVER LOGIN
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* cta end */}

      {/* register form start */}
      <main className='container mt-2'>
        <div className='p-2 shadow rounded'>
          <form
            className='row needs-validation'
            noValidate
            style={{ padding: '20px' }}
          >
            <div className='mt-3 col-md-12 col-lg-12'>
              <h4 className='mb-3'>Sign Up</h4>

              <div className='row g-3'>
                {/* name */}
                <div className='col-12 text-start justify-content-start ms-auto'>
                  <label htmlFor='name' className='form-label'>
                    Your Name
                  </label>
                  <div className='input-group has-validation'>
                    <span className='input-group-text'>
                      <i class='bi bi-person-bounding-box'></i>
                    </span>
                    <input
                      type='text'
                      className='form-control'
                      id='name'
                      placeholder='Full Name'
                      required
                    />
                    <div className='invalid-feedback'>
                      Valid full name is required.
                    </div>
                  </div>
                </div>
                {/* company - optional */}
                <div className='col-12 text-start justify-content-start ms-auto'>
                  <label htmlFor='company' className='form-label'>
                    Company
                  </label>
                  <div className='input-group has-validation'>
                    <span className='input-group-text'>
                      <i class='bi bi-building'></i>
                    </span>
                    <input
                      type='text'
                      className='form-control'
                      id='company'
                      placeholder='(optional)'
                    />
                  </div>
                </div>

                {/* address */}
                <div className='col-12 text-start justify-content-start ms-auto'>
                  <label htmlFor='address' className='form-label'>
                    Address
                  </label>
                  <div className='input-group has-validation'>
                    <span className='input-group-text'>
                      <i class='bi bi-send'></i>
                    </span>
                    <input
                      type='text'
                      className='form-control'
                      id='address'
                      placeholder='Address'
                      required
                    />
                    <div className='invalid-feedback'>
                      Valid address is required.
                    </div>
                  </div>
                </div>

                {/* postal code - optional */}
                <div className='col-12 text-start justify-content-start ms-auto'>
                  <label htmlFor='postalCode' className='form-label'>
                    Postal Code
                  </label>
                  <div className='input-group has-validation'>
                    <span className='input-group-text'>
                      <i class='bi bi-upc'></i>
                    </span>
                    <input
                      type='text'
                      className='form-control'
                      id='postalCode'
                      placeholder='(optional)'
                    />
                  </div>
                </div>

                {/* country, state, city */}
                <div className='col-md-4 has-validation text-start justify-content-start ms-auto'>
                  <label htmlFor='country' className='form-label'>
                    Country
                  </label>
                  <span style={{ marginLeft: '10px' }}>
                    <i class='bi bi-globe-asia-australia'></i>
                  </span>
                  <select className='form-select' id='country' required>
                    <option value=''>Choose...</option>
                    <option>United States</option>
                  </select>
                  <div className='invalid-feedback'>
                    Please select a valid country.
                  </div>
                </div>

                <div className='col-md-4 has-validation text-start justify-content-start ms-auto'>
                  <label htmlFor='state' className='form-label'>
                    State
                  </label>
                  <span style={{ marginLeft: '10px' }}>
                    <i class='bi bi-map'></i>
                  </span>
                  <select className='form-select' id='state' required>
                    <option value=''>Choose...</option>
                    <option>Califonia</option>
                  </select>
                  <div className='invalid-feedback'>
                    Please select a valid state.
                  </div>
                </div>

                <div className='col-md-4 has-validation text-start justify-content-start ms-auto'>
                  <label htmlFor='city' className='form-label'>
                    City
                  </label>
                  <span style={{ marginLeft: '10px' }}>
                    <i class='bi bi-radar'></i>
                  </span>
                  <select className='form-select' id='city' required>
                    <option value=''>Choose...</option>
                    <option>City 1</option>
                  </select>
                  <div className='invalid-feedback'>
                    Please select a valid city.
                  </div>
                </div>

                {/* phone number */}
                <div className='has-validation text-start justify-content-start ms-auto'>
                  <label htmlFor='phone' className='form-label'>
                    Phone Number
                  </label>
                  <PhoneInput
                    className='form-control rounded'
                    id='phone'
                    placeholder='E.g +2347034054567'
                    onChange={e => {
                      handlePhoneNumberInput(e)
                    }}
                    required
                  />
                  <div className='invalid-feedback'>
                    Valid phone number is required.
                  </div>
                </div>

                {/* email */}
                <div className='col-12 text-start justify-content-start ms-auto'>
                  <label htmlFor='email' className='form-label'>
                    Email Address
                  </label>
                  <div className='input-group has-validation'>
                    <span className='input-group-text'>
                      <i class='bi bi-envelope-at'></i>
                    </span>
                    <input
                      type='email'
                      className='form-control'
                      id='email'
                      placeholder='Email would be used for shipment notifications'
                      required
                    />
                    <div className='invalid-feedback'>
                      Valid sender email address is required.
                    </div>
                  </div>
                </div>

                {/* VAT/Tax ID */}
                <div className='col-12 text-start justify-content-start ms-auto'>
                  <label htmlFor='taxNo' className='form-label'>
                    VAT/Tax ID
                  </label>
                  <div className='input-group'>
                    <span className='input-group-text'>
                      <i class='bi bi-cash-stack'></i>
                    </span>
                    <input
                      type='text'
                      className='form-control'
                      id='taxNo'
                      placeholder='Used in Customs Declaration section (optional)'
                    />
                  </div>
                </div>

                {/* notes */}
                <div className='col-12 text-start justify-content-start ms-auto'>
                  <label htmlFor='note' className='form-label'>
                    Notes/Message
                  </label>
                  <div className='input-group'>
                    <span className='input-group-text'>
                      <i class='bi bi-journal-check'></i>
                    </span>
                    <textarea
                      className='form-control'
                      id='note'
                      placeholder='Important things we need to take note of... (optional)'
                      rows='5'
                    />
                  </div>
                </div>

                {/* new password */}
                <div className='col-12 text-start justify-content-start ms-auto mt-3'>
                  <label htmlFor='newPassword' className='form-label'>
                    New Password
                  </label>
                  <div className='input-group has-validation'>
                    <span className='input-group-text'>
                      <i className='bi bi-lock'></i>
                    </span>
                    <input
                      type='password'
                      className='form-control w-70'
                      id='newPassword'
                      placeholder='Enter your new password'
                      required
                    />
                    <button
                      className='btn btn-outline-secondary'
                      type='button'
                      id='toggleNewPassword'
                      onClick={() => {
                        const passwordField =
                          document.getElementById('newPassword')
                        const toggleButton =
                          document.getElementById('toggleNewPassword')
                        if (passwordField.type === 'password') {
                          passwordField.type = 'text'
                          toggleButton.innerHTML =
                            '<i className="bi bi-eye-slash"></i>'
                        } else {
                          passwordField.type = 'password'
                          toggleButton.innerHTML =
                            '<i className="bi bi-eye"></i>'
                        }
                      }}
                    >
                      <i className='bi bi-eye'></i>
                    </button>
                    <div className='invalid-feedback'>
                      New Password is required.
                    </div>
                  </div>
                </div>

                {/* confirm new password */}
                <div className='col-12 text-start justify-content-start ms-auto mt-3'>
                  <label htmlFor='confirmNewPassword' className='form-label'>
                    Confirm New Password
                  </label>
                  <div className='input-group has-validation'>
                    <span className='input-group-text'>
                      <i className='bi bi-lock'></i>
                    </span>
                    <input
                      type='password'
                      className='form-control w-70'
                      id='confirmNewPassword'
                      placeholder='Confirm your new password'
                      required
                    />
                    <button
                      className='btn btn-outline-secondary'
                      type='button'
                      id='toggleConfirmNewPassword'
                      onClick={() => {
                        const passwordField =
                          document.getElementById('confirmNewPassword')
                        const toggleButton = document.getElementById(
                          'toggleConfirmNewPassword'
                        )
                        if (passwordField.type === 'password') {
                          passwordField.type = 'text'
                          toggleButton.innerHTML =
                            '<i className="bi bi-eye-slash"></i>'
                        } else {
                          passwordField.type = 'password'
                          toggleButton.innerHTML =
                            '<i className="bi bi-eye"></i>'
                        }
                      }}
                    >
                      <i className='bi bi-eye'></i>
                    </button>
                    <div className='invalid-feedback'>
                      Confirmation of New Password is required.
                    </div>
                  </div>
                </div>

                {/* password requirements */}
                <div className='col-12 text-start justify-content-start ms-auto mt-3'>
                  <h6 className='mb-1'>Password requirements:</h6>
                  <p>Ensure that these requirements are met:</p>
                  <ul
                    style={{
                      paddingLeft: '20px',
                      listStylePosition: 'inside'
                    }}
                  >
                    <li> Minimum 8 characters long the more, the better</li>
                    <li>At least one lowercase character</li>
                    <li>At least one uppercase character</li>
                    <li>
                      At least one number, symbol, or whitespace character
                    </li>
                  </ul>
                </div>
              </div>

              <hr className='my-4' />
              {/* //newsletter subscription start*/}
              <div class='form-check text-start my-3'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  name='newsletter'
                  id='newsletterCheck'
                />
                <label class='form-check-label' for='newsletterCheck'>
                  I agree to receive regular communications of promotions,
                  information and news on specific Demo Express LTD solutions
                  per email.
                </label>
              </div>
              {/* newsletter end */}

              {/* //privacy policy subscription start*/}
              <div class='form-check text-start my-3 has-validation'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  name='privacyPolicy'
                  id='privacyPolicyCheck'
                  required
                />
                <label class='form-check-label' for='privacyPolicyCheck'>
                  I have read the Privacy Policy{' '}
                  <sup className='text-danger'> *</sup>
                </label>
                <div className='invalid-feedback'>
                  Kindly check the box for privacy policy.
                </div>
              </div>
              {/* privacy policy end */}

              <button
                className='w-70 btn btn-success btn-lg shadow'
                type='submit'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
      {/* register form ends */}

      {/* benefits start */}
      <div class='container mt-3 px-4 py-5' id='hanging-icons'>
        <h2 class='pb-2 border-bottom'>Opening an account has its benefits</h2>
        <div class='row g-4 py-5 row-cols-1 row-cols-lg-3'>
          <div class='col d-flex align-items-start'>
            <div class='icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3'>
              <i class='bi-truck'></i>
            </div>
            <div>
              <h3 class='fs-2 text-body-emphasis'>Fast Delivery</h3>
              <p>
                With Demo Express LTD, you can expect fast and reliable delivery
                services for all your packages. Our extensive network and
                efficient logistics ensure that your items reach their
                destination quickly and safely. Experience the convenience of
                timely deliveries with every order.
              </p>
            </div>
          </div>
          <div class='col d-flex align-items-start'>
            <div class='icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3'>
              <i class='bi bi-map'></i>
            </div>
            <div>
              <h3 class='fs-2 text-body-emphasis'>Real-Time Tracking</h3>
              <p>
                Stay informed about the status of your shipments with our
                real-time tracking feature. Monitor your package's journey from
                the moment it leaves the sender until it arrives at your
                doorstep. Receive updates and notifications to always know where
                your package is and when it will arrive.
              </p>
            </div>
          </div>
          <div class='col d-flex align-items-start'>
            <div class='icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3'>
              <i class='bi bi-tools'></i>
            </div>
            <div>
              <h3 class='fs-2 text-body-emphasis'>Secure Payments</h3>
              <p>
                Demo Express LTD prioritizes your security with secure and
                hassle-free payment options. Our platform uses advanced
                encryption technology to protect your financial information.
                Enjoy peace of mind knowing that your transactions are safe and
                your data is protected
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* benefits end */}
    </div>
  )
}

export default RegisterPageUser
