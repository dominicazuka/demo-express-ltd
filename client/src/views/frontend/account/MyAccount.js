import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Loader from '../../../components/Loader'
import {
  validateEmail,
  getErrorMessage,
  validatePassword
} from '../../../utils'
import Axios from '../../../config'
import TokenService from '../../../libs/token'
import swal from 'sweetalert'
import { LOGIN_USER } from '../../../actions/actions.auth'
import { useAuthContext } from '../../../contexts/AuthContext'
import Swal from 'sweetalert2'

const MyAccount = () => {
  // window scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const navigate = useNavigate() //import useNavigate from react-router-dom

  // Destructure the authState object from the useAuthContext hook to extract isAuthenticated and isAuthenticating
  const {
    authState: { isAuthenticated, isAuthenticating, user }, //Destructures the authState object to extract isAuthenticated and isAuthenticating values.
    authDispatch // Destructure authDispatch from useAuthContext hook
  } = useAuthContext() // Use the useAuthContext hook to get the authentication state and dispatch function

  const [name, setName] = useState(user.name ? user.name : '')
  const [company, setCompany] = useState(user.company ? user.company : '')
  const [address, setAddress] = useState(user.address ? user.address : '')
  const [postalCode, setPostalCode] = useState(
    user.postalCode ? user.postalCode : ''
  )
  const [phone, setPhone] = useState(user.phone ? user.phone : '')
  const [vatTaxId, setVatTaxId] = useState(user.vatTaxtId ? user.vatTaxtId : '')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')

  const [loading, setLoading] = useState(false)
  const [passwordLoading, setPasswordLoading] = useState(false)

  //error state variables and useRef for required inputs
  const [nameError, setNameError] = useState('')
  const nameInputRef = useRef(null)
  const companyInputRef = useRef(null)
  const [addressError, setAddressError] = useState('')
  const addressInputRef = useRef(null)
  const postalCodeInputRef = useRef(null)
  const [phoneError, setPhoneError] = useState('')
  const phoneInputRef = useRef(null)
  const vatTaxIdInputRef = useRef(null)
  const [newPasswordError, setNewPasswordError] = useState('')
  const newPasswordInputRef = useRef(null)
  const [confirmNewPasswordError, setConfirmNewPasswordError] = useState('')
  const confirmNewPasswordInputRef = useRef(null)

  const handleNameChange = e => {
    setName(e.target.value)
    setNameError('')
  }

  const handleCompanyChange = e => {
    setCompany(e.target.value)
  }

  const handlePostalCodeChange = e => {
    setPostalCode(e.target.value)
  }

  const handleVatTaxIdChange = e => {
    setVatTaxId(e.target.value)
  }

  const handleAddressChange = e => {
    setAddress(e.target.value)
    setAddressError('')
  }

  const handlePhoneChange = e => {
    setPhone(e)
    setPhoneError('')
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
        return (isError = true)
      }

      if (!validatePassword(confirmNewPassword)) {
        setConfirmNewPasswordError(
          'Please input a strong password that matches the below requirements'
        )
        confirmNewPasswordInputRef.current.focus() // Focus on the input
        return (isError = true)
      }

      if (newPassword !== confirmNewPassword) {
        setNewPasswordError('Passwords do not match')
        setConfirmNewPasswordError('Passwords do not match')
        newPasswordInputRef.current.focus() // Focus on the input
        return (isError = true)
      }

      if (newPassword === confirmNewPassword) {
        const _user = {
          email: user.email,
          password: newPassword
        }
        console.log('_user', _user)
        const { data, error } = await Axios.patch(
          '/users/update/password',
          _user
        )
        console.log('data', data)
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
            localStorage.removeItem('_d_user')

            authDispatch({ type: 'LOG_OUT' })

            return navigate(`/login/user`) // Redirect to the user login page
          })
        }
        setPasswordLoading(false)
      }
    } catch (error) {
      console.log('error update password', error)
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
              My Account
            </h1>
            <p
              className='text-white'
              style={{
                marginBottom: '60px'
              }}
            >
              Here, you can view and update your personal information and manage
              your password.
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
                  My Account
                </a>
              </li>
            </ol>
          </nav>
          {/* breadcrumb end */}
        </div>
      </div>
      {/* Breadcrumb  end*/}

      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            {/* <!-- Page title --> */}
            <div className='my-5'>
              <h3 className='text-start justify-content-start ms-auto'>
                My Profile
              </h3>
              <hr />
            </div>
            {/* <!-- Form START --> */}
            <form className='file-upload needs-validation' noValidate>
              <div className='row mb-3 gx-5'>
                {/* <!-- Contact detail --> */}
                <div className='col-xxl-8 mb-5 mb-xxl-0'>
                  <div className='bg-secondary-soft px-4 py-5 rounded'>
                    <div className='row g-3'>
                      <h4 className='mb-4 mt-0 text-start justify-content-start ms-auto'>
                        Contact detail
                      </h4>
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
                            defaultValue={name}
                            onChange={handleNameChange}
                            ref={nameInputRef}
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
                            defaultValue={company}
                            onChange={handleCompanyChange}
                            ref={companyInputRef}
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
                            defaultValue={address}
                            onChange={handleAddressChange}
                            ref={addressInputRef}
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
                            defaultValue={postalCode}
                            onChange={handlePostalCodeChange}
                            ref={postalCodeInputRef}
                          />
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
                            handlePhoneChange(e)
                          }}
                          required
                          defaultValue={phone}
                          ref={phoneInputRef}
                        />
                        <div className='invalid-feedback'>
                          Valid phone number is required.
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
                            defaultValue={vatTaxId}
                            onChange={handleVatTaxIdChange}
                            ref={vatTaxIdInputRef}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Upload profile photo --> */}
                <div className='col-xxl-4'>
                  <div className='bg-secondary-soft px-4 py-5 rounded'>
                    <div className='row g-3 text-start justify-content-start ms-auto'>
                      <h4 className='mb-4 mt-0'>Upload your profile photo</h4>
                      <div className='text-center'>
                        {/* <!-- Image upload --> */}
                        <div className='input-group'>
                          <span className='input-group-text'>
                            <i class='bi bi-camera2'></i>
                          </span>
                          <input
                            type='file'
                            id='customFile'
                            name='file'
                            hidden=''
                            className='form-control mb-2 mt-2'
                          />
                        </div>
                        {/* <!-- Content --> */}
                        <p className='text-muted mt-3 mb-0'>
                          <span className='me-1'>Note:</span>Minimum size 300px
                          x 300px; Maximum file upload: 2MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='gap-3 d-md-flex justify-content-md-end text-center'>
                <button
                  type='button'
                  className='btn btn-danger btn-lg shadow mt-2'
                >
                  Delete profile
                </button>
                <button
                  type='submit'
                  className='btn btn-success btn-lg shadow mt-2'
                >
                  Update profile
                </button>
              </div>
            </form>

            {/* change password */}
            <div className='container' style={{ marginTop: '90px' }}>
              <div className='mb-3 mt-3'>
                <h4 className='mb-3'>Change your password</h4>
              </div>
              <form>
                <div className='row'>
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyAccount
