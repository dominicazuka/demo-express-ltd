import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PhoneInput from 'react-phone-number-input'
import { useMediaQuery } from 'react-responsive'

const LoginPageDriver = () => {
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
    return (
        <div className='clearfix' style={{ position: 'relative' }}>
      {/* Breadcrumb  */}
      <div
        className='shadow'
        style={{
          backgroundImage:
            'url("https://cdn.britannica.com/06/166306-050-0D839F24/Cargo-ship-freight-containers.jpg")',
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
              Log in 
            </h1>
            <p
              className='text-white'
              style={{
                marginBottom: '60px'
              }}
            >
              Access your delivery schedule, manage your routes, and stay updated with the latest shipment details. Your next successful delivery is just a login away.
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
                  Login Driver
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
          Log in to Your Demo Express LTD Driver Account
          </h1>
          <h3 class='text-muted col-lg-6 mx-auto mb-2 mt-5'>
            Don't have an Account?
          </h3>
          <div className='row'>
            <div className='col-lg-12'>
              <Link
                to='/register/user'
                rel='noopener noreferrer'
                className='btn btn-link cursor-pointer'
                aria-label='RegisterUser'
                style={{ color: 'green' }}
              >
                <button class='btn btn-success px-5 mb-3 shadow' type='button'>
                <i class="bi bi-person-add" style={{marginRight:'10px'}}></i>
                  USER REGISTER
                </button>
              </Link>
            </div>

            <div className='col-lg-12'>
              <Link
                to='/register/driver'
                rel='noopener noreferrer'
                className='btn btn-link cursor-pointer'
                aria-label='RegisterDriver'
                style={{ color: 'green' }}
              >
                <button class='btn btn-success px-5 mb-3 shadow' type='button'>
                <i class="bi bi-car-front-fill" style={{marginRight:'10px'}}></i>
                  DRIVER REGISTER
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* cta end */}

      {/* register form start */}
      <main className='container mt-5'>
        <div className='p-2 shadow rounded'>
          <form
            className='row needs-validation'
            noValidate
            style={{ padding: '20px' }}
          >
            <div className='mt-3 col-md-12 col-lg-12'>
              <h4 className='mb-3'>Sign In</h4>

              <div className='row g-3'>
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

                {/* password */}
                <div className='col-12 text-start justify-content-start ms-auto mt-3'>
                  <label htmlFor='password' className='form-label'>
                    Password
                  </label>
                  <div className='input-group has-validation'>
                    <span className='input-group-text'>
                      <i className='bi bi-lock'></i>
                    </span>
                    <input
                      type='password'
                      className='form-control'
                      id='password'
                      placeholder='Enter your password'
                      required
                    />
                    <button
                      className='btn btn-outline-secondary'
                      type='button'
                      id='togglePassword'
                      onClick={() => {
                        const passwordField =
                          document.getElementById('password')
                        const toggleButton =
                          document.getElementById('togglePassword')
                        if (passwordField.type === 'password') {
                          passwordField.type = 'text'
                          toggleButton.innerHTML =
                            '<i class="bi bi-eye-slash"></i>'
                        } else {
                          passwordField.type = 'password'
                          toggleButton.innerHTML = '<i class="bi bi-eye"></i>'
                        }
                      }}
                    >
                      <i className='bi bi-eye'></i>
                    </button>
                    <div className='invalid-feedback'>
                      Password is required.
                    </div>
                  </div>
                </div>
              </div>

              <hr className='my-4' />
              {/* remember-me subscription start*/}
              <div class='form-check text-start my-3'>
                <input
                  class='form-check-input'
                  type='checkbox'
                  name='remember-me'
                  id='rememberMe'
                />
                <label class='form-check-label' for='rememberMe'>
                  Remember me
                </label>
              </div>
              {/* remember-me end */}

              <button
                className='w-70 btn btn-success btn-lg shadow'
                type='submit'
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </main>
      {/* register form ends */}
    </div>
    )
}

export default LoginPageDriver
