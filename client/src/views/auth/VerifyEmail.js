import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Loader from '../../components/Loader'
import Axios from '../../config'
import swal from 'sweetalert'
import { getErrorMessage } from '../../utils'
import TokenService from '../../libs/token';
import { LOGIN_USER } from '../../actions/actions.auth'
import { useAuthContext } from '../../contexts/AuthContext'

const VerifyEmail = () => {
  // window scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get('email');

  const navigate = useNavigate() //import useNavigate from react-router-dom

  const [verificationString, setVerificationString] = useState('')
  const [verificationStringError, setVerificationStringError] = useState('')
  const verificationStringInputRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [loadingResendVerificationEmail, setLoadingResendVerificationEmail] = useState(false)

  // Destructure the authState object from the useAuthContext hook to extract isAuthenticated and isAuthenticating
  const {
    authState: { isAuthenticated, isAuthenticating }, //Destructures the authState object to extract isAuthenticated and isAuthenticating values.
    authDispatch // Destructure authDispatch from useAuthContext hook
  } = useAuthContext() // Use the useAuthContext hook to get the authentication state and dispatch function


  const handleVerificationStringInput = e => {
    setVerificationString(e.target.value)
    setVerificationStringError('')
  }

  const resendVerificationCode = async e => {
    e.preventDefault()
    setLoadingResendVerificationEmail(true)
    try {
      const { data, error } = await Axios.put('/users/resend-verification-email', {
        email: email
      })
      // console.log('data', data)
      swal(
        error ? 'Oops' : 'Great',
        'Email Verification Resent',
        !error ? 'success' : 'error'
      )
      setLoadingResendVerificationEmail(false)
    } catch (error) {
      swal('Oops', getErrorMessage(error), 'error')
      setLoadingResendVerificationEmail(false)
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      let isError = false

      // Validate the verification string
      if (verificationString.trim() === '') {
        setVerificationStringError('Please enter verification code')
        verificationStringInputRef.current.focus() // Focus on the input element with the validation error
        return (isError = true)
      }
      const verificationCodePattern = /^[0-9a-zA-Z]{6}$/

      if (!verificationCodePattern.test(verificationString)) {
        setVerificationStringError('Verification code must be 6 digits')
        verificationStringInputRef.current.focus() // Focus on the input element with the validation error
        return (isError = true)
      }
        setLoading(true)
      // Make the request to verify the email
      const { data, error } = await Axios.put('/users/verify-email', {
        verificationString: verificationString
      })
      // console.log('data', data)

       // If verification is successful
      if (data) {
        // Dispatch an action to the authentication context to log in the user, The action has a type of LOGIN_USER and carries the user data in the payload
        authDispatch({
          type: LOGIN_USER, // Action type indicating the user is logging in
          payload: data.user // Payload containing the user data to be stored in the authentication state
        });

        TokenService.setUser(data.user); // Store user data in local storage
        swal(
            error ? 'Oops' : 'Great',
            'Email Verification Successful',
            !error ? 'success' : 'error'
          )
          if(data.user.role === 'User'){
            setLoading(false)
           return navigate('/account'); // Redirect to account page
          } else{
            setLoading(false)
            return navigate('/dashboard'); // Redirect to dashboard page
          }
      }else {
        // Handle any other response that might not have been covered
        swal('Oops', 'Email Verification Failed', 'error');
        setLoading(false)
      }
    } catch (error) {
        // Handle any errors that occur during the request
      swal('Oops', getErrorMessage(error), 'error')
      setLoading(false)
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
              Email Verification
            </h1>
            <p
              className='text-white'
              style={{
                marginBottom: '60px'
              }}
            >
              Please enter the 6-digit verification code sent to your email
              address to verify your account and gain access to our platform. If
              you haven't received the code, please check your spam folder or
              request a new one.
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
                  Verify Email
                </a>
              </li>
            </ol>
          </nav>
          {/* breadcrumb end */}
        </div>
      </div>
      {/* Breadcrumb  end*/}

      {/* verify email form start */}
      <main className='container mt-5'>
        <div className='p-2 shadow rounded'>
          <form
            className='row needs-validation'
            noValidate
            style={{ padding: '20px' }}
          >
            <div className='mt-3'>
              <img
                className='img-fluid'
                src='https://www.svgrepo.com/show/381142/password-protection-privacy-access-verification-code.svg'
                width='100'
                height='100'
              />
              <h4 className='mb-3 mt-3'>Email Verification</h4>
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
                      then: 
                      <br/>
                      <div className="mb-2 mt-2">{loadingResendVerificationEmail && <Loader />}</div>
                      <button
                        className='btn btn-warning btn-sm waves-effect'
                        onClick={e => resendVerificationCode(e)}
                      >
                        resend the verification email
                      </button>
                    </li>
                  </ul>
                </div>
                {/* verification code */}
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
              {loading && <Loader />}
              <button
                className='w-70 btn btn-success btn-lg shadow mt-2'
                onClick={e => handleSubmit(e)}
              >
                Verify
              </button>
            </div>
          </form>
        </div>
      </main>
      {/* verify email form ends */}
    </>
  )
}

export default VerifyEmail
