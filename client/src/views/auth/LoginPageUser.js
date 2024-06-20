import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import Loader from '../../components/Loader'
import { validateEmail, getErrorMessage } from '../../utils'
import Axios from '../../config'
import TokenService from '../../libs/token'
import swal from 'sweetalert'
import { LOGIN_USER } from '../../actions/actions.auth'
import { useAuthContext } from '../../contexts/AuthContext'
import Swal from 'sweetalert2'

const LoginPageUser = () => {
  // window scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const navigate = useNavigate() //import useNavigate from react-router-dom

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState('')
  const [redirectUrl, setRedirectUrl] = useState('')
  const [loading, setLoading] = useState('')

  const [emailError, setEmailError] = useState('')
  const emailInputRef = useRef(null)
  const [passwordError, setPasswordError] = useState('')
  const passwordInputRef = useRef(null)

  // Destructure the authState object from the useAuthContext hook to extract isAuthenticated and isAuthenticating
  const {
    authState: { isAuthenticated, isAuthenticating, user }, //Destructures the authState object to extract isAuthenticated and isAuthenticating values.
    authDispatch // Destructure authDispatch from useAuthContext hook
  } = useAuthContext() // Use the useAuthContext hook to get the authentication state and dispatch function

  const handleEmailChange = e => {
    setEmail(e.target.value)
    setEmailError('')
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
    setPasswordError('')
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      let isError = false
      if (email.trim() === '') {
        setEmailError('Please enter email address')
        emailInputRef.current.focus() // Focus on the input element with the validation error
        return (isError = true)
      }

      if (!validateEmail(email.trim())) {
        setEmailError('Please input a valid email address')
        emailInputRef.current.focus() // Focus on the input
        return (isError = true)
      }

      if (password.trim() === '') {
        setPasswordError('Please enter password')
        passwordInputRef.current.focus() // Focus on the input element with the validation error
        return (isError = true)
      }

      const rememberMe = document.getElementById('rememberMeCheck').checked
      const user = {
        email,
        password,
        rememberMe: rememberMe ? true : false //conditional tenary check
      }
      const { data } = await Axios.post('/users/login', user)
      // Dispatch an action to the authentication context to log in the user, The action has a type of LOGIN_USER and carries the user data in the payload
      authDispatch({
        type: LOGIN_USER, // Action type indicating the user is logging in
        payload: data.user // Payload containing the user data to be stored in the authentication state
      })

      // console.log('login page data', data)

      if (data) {
        TokenService.setUser(data.user) // Store user data in local storage
        swal('Great', 'Login Successful', 'success').then(() => {
          // Once the swal dialog is closed, redirect to the account page
          return navigate(`/account`) // Redirect to the verify email page
        })
      }

      setLoading(false)
    } catch (error) {
      //all other status codes aside 2XX comes to the catch block
      if (
        error.response &&
        error.response.data &&
        error.response.data.redirect
      ) {
        swal('Oops', getErrorMessage(error), 'error')

        // Redirect to the URL provided by the server
        setRedirectUrl(error.response.data.redirect)
        setLoading(false)
      } else {
        // Handle other errors
        swal('Oops', getErrorMessage(error), 'error')
        setLoading(false)
      }
    }
  }

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
              Login
            </h1>
            <p
              className='text-white'
              style={{
                marginBottom: '60px'
              }}
            >
              Take advantage of our services and solutions designed to meet all
              of your shipping requirements. Login to your Demo Express LTD
              shipping account below. Let’s get started!
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
                  Login User
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
            Sign in now and enjoy personalized experience!
          </h1>
          <h3 class='text-muted col-lg-6 mx-auto mb-2 mt-5'>
            Don't have an Account?
          </h3>
          <div className='row'>
            <div className='col-lg-12'>
              <Link
                to='/register/user'
                rel='noopener noreferrer'
                className='cursor-pointer'
                aria-label='RegisterUser'
                style={{ color: 'green' }}
              >
                <button class='btn btn-success px-5 mb-3 shadow' type='button'>
                  <i
                    class='bi bi-person-add'
                    style={{ marginRight: '10px' }}
                  ></i>
                  USER REGISTER
                </button>
              </Link>
            </div>

            {/* <div className='col-lg-12'>
              <Link
                to='/register/driver'
                rel='noopener noreferrer'
                className='cursor-pointer'
                aria-label='RegisterDriver'
                style={{ color: 'green' }}
              >
                <button class='btn btn-success px-5 mb-3 shadow' type='button'>
                  <i
                    class='bi bi-car-front-fill'
                    style={{ marginRight: '10px' }}
                  ></i>
                  DRIVER REGISTER
                </button>
              </Link>
            </div> */}
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

              {redirectUrl && (
                <Link
                  to={`/${redirectUrl}`}
                  className='btn btn-warning btn-lg shadow mt-2'
                >
                  Verify Email
                </Link>
              )}

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
                      className={`form-control ${
                        emailError ? 'is-invalid' : ''
                      } ${email ? 'is-valid' : ''}`}
                      id='email'
                      placeholder='Email address'
                      required
                      onChange={e => {
                        handleEmailChange(e)
                      }}
                      ref={emailInputRef}
                    />
                    <div className='invalid-feedback'>{emailError}</div>
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
                      className={`form-control ${
                        passwordError ? 'is-invalid' : ''
                      } ${password ? 'is-valid' : ''}`}
                      id='password'
                      placeholder='Enter your password'
                      required
                      onChange={e => {
                        handlePasswordChange(e)
                      }}
                      ref={passwordInputRef}
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
              <div className='gap-3 d-md-flex justify-content-md-start text-center'>
                {/* remember-me subscription start*/}
                <div class='form-check text-start my-3'>
                  <input
                    class='form-check-input'
                    type='checkbox'
                    name='remember-me'
                    id='rememberMeCheck'
                    onChange={e => setRememberMe(e.target.checked)}
                  />
                  <label class='form-check-label' for='rememberMeCheck'>
                    Remember me
                  </label>

                  {/*forgot password*/}
                  <Link to='/forgot/password' style={{ marginLeft: '10px', color: 'green' }}>
                    Forgot password?
                  </Link>
                </div>
              </div>

              {loading && <Loader />}
              <button
                className='w-70 btn btn-success btn-lg shadow mt-2'
                onClick={e => handleSubmit(e)}
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

export default LoginPageUser
