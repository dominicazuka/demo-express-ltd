import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import Loader from '../../components/Loader'
import { validateEmail, getErrorMessage, validatePassword } from '../../utils'
import Axios from '../../config'
import TokenService from '../../libs/token'
import swal from 'sweetalert'
import { LOGIN_USER } from '../../actions/actions.auth'
import { useAuthContext } from '../../contexts/AuthContext'
import Swal from 'sweetalert2'

const ForgotPassword = () => {
  // window scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const navigate = useNavigate() //import useNavigate from react-router-dom

  const [email, setEmail] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [verificationString, setVerificationString] = useState('')
  const [verificationStringVerified, setVerificationStringVerified] =
    useState(false)
  const [loading, setLoading] = useState(false)
  const [verificationStringLoading, setVerificationStringLoading] =
    useState(false)
  const [passwordLoading, setPasswordLoading] = useState(false)
  const [newPasswordError, setNewPasswordError] = useState('')
  const newPasswordInputRef = useRef(null)
  const [confirmNewPasswordError, setConfirmNewPasswordError] = useState('')
  const confirmNewPasswordInputRef = useRef(null)
  const [emailError, setEmailError] = useState('')
  const emailInputRef = useRef(null)
  const [verificationStringError, setVerificationStringError] = useState('')
  const verificationStringInputRef = useRef(null)

  const handleEmailChange = e => {
    setEmail(e.target.value)
    setEmailError('')
  }

  const handleVerificationStringInput = e => {
    setVerificationString(e.target.value)
    setVerificationStringError('')
  }

  const handleEmailSearch = async e => {
    e.preventDefault()
    setLoading(true)

    try {
      let isError = false
      if (email.trim() === '') {
        setEmailError('Please enter email address')
        emailInputRef.current.focus() // Focus on the input element with the validation error
        setLoading(false)
        return (isError = true)
      }

      if (!validateEmail(email.trim())) {
        setEmailError('Please input a valid email address')
        emailInputRef.current.focus() // Focus on the input
        setLoading(false)
        return (isError = true)
      }

      const { data } = await Axios.patch('/users/forgot-password-request', {
        email: email
      })

      if (data) {
        // setEmail('')
        setUserEmail(email)
        swal('Great', 'Verification code sent successfully', 'success')
        setLoading(false)
      }
    } catch (error) {
      swal('Oops', getErrorMessage(error), 'error')
      setLoading(false)
    }
  }

  const handleVerificationCodeSubmit = async e => {
    e.preventDefault()
    setVerificationStringLoading(true)
    try {
      let isError = false

      // Validate the verification string
      if (verificationString.trim() === '') {
        setVerificationStringError('Please enter verification code')
        verificationStringInputRef.current.focus() // Focus on the input element with the validation error
        setVerificationStringLoading(false)
        return (isError = true)
      }
      const verificationCodePattern = /^[0-9a-zA-Z]{6}$/

      if (!verificationCodePattern.test(verificationString)) {
        setVerificationStringError('Verification code must be 6 digits')
        verificationStringInputRef.current.focus() // Focus on the input element with the validation error
        setVerificationStringLoading(false)
        return (isError = true)
      }
      // Make the request to verify the email
      const { data } = await Axios.put('/users/forgot-password/verify-email', {
        verificationString: verificationString
      })
      // console.log('data', data)

      // If verification is successful
      if (data) {
        setVerificationStringLoading(false)
        setVerificationStringVerified(true)
        swal('Great', 'Verification code verified', 'success')
      }
    } catch (error) {
      // Handle any errors that occur during the request
      swal('Oops', 'Sorry verification code is wrong', 'error')
      setVerificationStringLoading(false)
      setVerificationStringVerified(false)
    }
  }

  const handleNewPasswordChange = e => {
    setNewPassword(e.target.value)
    setNewPasswordError('')
  }

  const handleConfirmNewPasswordChange = e => {
    setConfirmNewPassword(e.target.value)
    setConfirmNewPasswordError('')
  }

  const handlePasswordChange = async e => {
    e.preventDefault()
    setPasswordLoading(true)

    try {
      let isError = false
      if (!validatePassword(newPassword)) {
        setNewPasswordError(
          'Please input a strong password that matches the below requirements'
        )
        newPasswordInputRef.current.focus() // Focus on the input
        setPasswordLoading(false)
        return (isError = true)
      }

      if (!validatePassword(confirmNewPassword)) {
        setConfirmNewPasswordError(
          'Please input a strong password that matches the below requirements'
        )
        confirmNewPasswordInputRef.current.focus() // Focus on the input
        setPasswordLoading(false)
        return (isError = true)
      }

      if (newPassword !== confirmNewPassword) {
        setNewPasswordError('Passwords do not match')
        setConfirmNewPasswordError('Passwords do not match')
        newPasswordInputRef.current.focus() // Focus on the input
        setPasswordLoading(false)
        return (isError = true)
      }

      if (newPassword === confirmNewPassword) {
        const user = {
          email: userEmail,
          password: newPassword
        }
        // console.log('_user', user)
        const { data, error } = await Axios.patch(
          '/users/forgot-password/update/password',
          user
        )
        // console.log('data', data)
        if (data) {
          swal(
            error ? 'Oops' : 'Great',
            'Password Update Successful',
            !error ? 'success' : 'error'
          ).then(() => {
            // Once the swal dialog is closed
            setNewPassword('')
            setConfirmNewPassword('')
            setNewPasswordError('')
            setConfirmNewPasswordError('')
            // localStorage.removeItem('_d_user')

            // authDispatch({ type: 'LOG_OUT' })

            return navigate(`/login/user`) // Redirect to the user login page
          })
        }
        setPasswordLoading(false)
      }
    } catch (error) {
      // console.log('error update password', error)
      swal('Oops', getErrorMessage(error), 'error')
      setPasswordLoading(false)
    }
  }

  return (
    <>
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
              Forgot Password - Reset Your Account Password
            </h1>
            <p
              className='text-white'
              style={{
                marginBottom: '60px'
              }}
            >
              Reset your account password easily. If you've forgotten your
              password, follow the simple steps to recover access to your
              account.
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
                  Forgot Password
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

      {/* verify email form start */}
      <main className='container mt-5'>
        <div className='p-2 shadow rounded'>
          <form
            className='needs-validation'
            noValidate
            style={{ padding: '20px' }}
          >
            <div className='mt-3'>
              <img
                className='img-fluid'
                src='https://cdn-icons-png.freepik.com/512/7080/7080646.png'
                width='100'
                height='100'
              />
              <h4 className='mb-3 mt-3'>Forgot Password</h4>

              <div className='row g-3'>
                {/* <!-- Instructions --> */}
                <div
                  className='alert alert-success col-md-12 col-lg-12 mt-3 mb-3 shadow'
                  role='alert'
                  id='notes'
                >
                  <h4>NOTES</h4>
                  <ul style={{ listStylePosition: 'inside' }}>
                    <li>
                      You will receive a verification code on your mail after
                      you registered. Enter that code below.
                    </li>
                    <li>
                      If somehow, you did not receive the verification email
                      then enter your email and click submit again:
                      <br />
                    </li>
                  </ul>
                </div>
              </div>

              {/* email address */}
              <div className='row'>
                <div className='col-12 text-start justify-content-start ms-auto'>
                  <label htmlFor='email' className='form-label'>
                    Email
                  </label>
                  <div className='input-group has-validation'>
                    <span className='input-group-text'>
                      <i className='bi bi-envelope'></i>
                    </span>
                    <input
                      type='text'
                      className={`form-control ${
                        emailError ? 'is-invalid' : ''
                      } ${email ? 'is-valid' : ''}`}
                      id='email'
                      placeholder='Enter email address associated to your account'
                      required
                      defaultValue={email}
                      onChange={handleEmailChange}
                      ref={emailInputRef}
                    />
                    <div className='invalid-feedback'>{emailError}</div>
                  </div>
                </div>
              </div>
              <hr className='my-4' />
              {loading && <Loader />}
              <button
                className='w-70 btn btn-success btn-lg shadow mt-2'
                onClick={e => handleEmailSearch(e)}
              >
                Submit
              </button>

              {/* verification code */}
              <div className='row'>
                <div className='col-12 text-start justify-content-start ms-auto'>
                  <label htmlFor='verificationString' className='form-label'>
                    Verification Code
                  </label>
                  <div className='input-group has-validation'>
                    <span className='input-group-text'>
                      <i class='bi bi-qr-code'></i>
                    </span>
                    <input
                      type='text'
                      className={`form-control ${
                        verificationStringError ? 'is-invalid' : ''
                      } ${verificationString ? 'is-valid' : ''}`}
                      id='verificationString'
                      placeholder='Enter verification code sent to your email'
                      required
                      onChange={handleVerificationStringInput}
                      ref={verificationStringInputRef}
                    />
                    <div className='invalid-feedback'>
                      {verificationStringError}
                    </div>
                  </div>
                </div>
              </div>

              <hr className='my-4' />
              {verificationStringLoading && <Loader />}
              <button
                className='w-70 btn btn-success btn-lg shadow mt-2'
                onClick={e => handleVerificationCodeSubmit(e)}
              >
                Verify
              </button>

              {/* password */}
              {verificationStringVerified && (
                <div className='row'>
                  {/* new password */}
                  <div className='col-12 text-start justify-content-start ms-auto mt-5'>
                    <label htmlFor='newPassword' className='form-label'>
                      New Password
                    </label>
                    <div className='input-group has-validation'>
                      <span className='input-group-text'>
                        <i className='bi bi-lock'></i>
                      </span>
                      <input
                        type='password'
                        className={`form-control w-70 ${
                          newPasswordError ? 'is-invalid' : ''
                        } ${newPassword ? 'is-valid' : ''}`}
                        id='newPassword'
                        placeholder='Enter your new password'
                        required
                        onChange={handleNewPasswordChange}
                        ref={newPasswordInputRef}
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
                      <div className='invalid-feedback'>{newPasswordError}</div>
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
                        className={`form-control w-70 ${
                          confirmNewPasswordError ? 'is-invalid' : ''
                        } ${confirmNewPassword ? 'is-valid' : ''}`}
                        id='confirmNewPassword'
                        placeholder='Confirm your new password'
                        required
                        onChange={handleConfirmNewPasswordChange}
                        ref={confirmNewPasswordInputRef}
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
                        {confirmNewPasswordError}
                      </div>
                    </div>
                  </div>

                  {/* password requirements */}
                  <div className='col-12 text-start justify-content-start ms-auto mt-3'>
                    <h6 className='mb-1'>Password requirements:</h6>
                    <p style={{ textAlign: 'justify' }}>
                      Ensure that these requirements are met:
                    </p>
                    <ul
                      style={{
                        paddingLeft: '20px',
                        listStylePosition: 'inside',
                        color:
                          newPasswordError || confirmNewPasswordError
                            ? 'red'
                            : newPassword === confirmNewPassword && newPassword
                            ? 'green'
                            : 'black'
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

                  <div className='text-center'>
                    {passwordLoading && <Loader />}
                    <button
                      className='text-center btn btn-success shadow mt-2'
                      style={{ width: '30%' }}
                      onClick={e => handlePasswordChange(e)}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      </main>
      {/* verify email form ends */}
    </>
  )
}

export default ForgotPassword
