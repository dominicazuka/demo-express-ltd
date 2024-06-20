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
import { LOGIN_USER, UPDATE_PROFILE } from '../../../actions/actions.auth'
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

  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [address, setAddress] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [phone, setPhone] = useState('')
  const [vatTaxId, setVatTaxId] = useState('')
  const [image, setImage] = useState(null)
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')

  const [loading, setLoading] = useState(false)
  const [passwordLoading, setPasswordLoading] = useState(false)

  //error state variables and useRef for required inputs
  const [nameError, setNameError] = useState('')
  const nameInputRef = useRef(null)
  const [companyError, setCompanyError] = useState('')
  const companyInputRef = useRef(null)
  const [addressError, setAddressError] = useState('')
  const addressInputRef = useRef(null)
  const [postalCodeError, setPostalCodeError] = useState('')
  const postalCodeInputRef = useRef(null)
  const [phoneError, setPhoneError] = useState('')
  const phoneInputRef = useRef(null)
  const [vatTaxIdError, setVatTaxIdError] = useState('')
  const vatTaxIdInputRef = useRef(null)
  const [imageError, setImageError] = useState('')
  const imageInputRef = useRef(null)
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
    setCompanyError('')
  }

  const handlePostalCodeChange = e => {
    setPostalCode(e.target.value)
    setPostalCodeError('')
  }

  const handleVatTaxIdChange = e => {
    setVatTaxId(e.target.value)
    setVatTaxIdError('')
  }

  const handleAddressChange = e => {
    setAddress(e.target.value)
    setAddressError('')
  }

  const handlePhoneChange = e => {
    setPhone(e)
    setPhoneError('')
  }

  const handleImageChange = e => {
    const file = e.target.files[0]
    if (file) {
      if (!file.type.match('image/jpeg|image/png|image/jpg')) {
        setImageError('Only .png, .jpg, and .jpeg files are allowed')
        setImage(null)
      } else if (file.size > 2 * 1024 * 1024) {
        setImageError('File size should not exceed 2MB.')
        setImage(null)
      } else {
        setImageError('')
        setImage(file)
      }
    }
  }

  const handleUpdateProfileSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      let isError = false
      if (name.trim() === '') {
        setNameError('Please enter full name')
        nameInputRef.current.focus() // Focus on the input element with the validation error
        return (isError = true)
      }

      if (address.trim() === '') {
        setAddressError('Please enter address')
        addressInputRef.current.focus() // Focus on the input element with the validation error
        return (isError = true)
      }

      if (phone.trim() === '') {
        setPhoneError('Please enter phone number')
        phoneInputRef.current.focus() // Focus on the input element with the validation error
        return (isError = true)
      }

      if (company.trim() === '') {
        setCompanyError('Please enter company')
        companyInputRef.current.focus() // Focus on the input element with the validation error
        return (isError = true)
      }

      if (postalCode.trim() === '') {
        setPostalCodeError('Please enter postal code')
        postalCodeInputRef.current.focus() // Focus on the input element with the validation error
        return (isError = true)
      }

      if (vatTaxId.trim() === '') {
        setVatTaxIdError('Please enter VAT/Tax Id No.')
        vatTaxIdInputRef.current.focus() // Focus on the input element with the validation error
        return (isError = true)
      }

      if (!image) {
        setImageError('No file selected or invalid file selected.')
        imageInputRef.current.focus() // Focus on the input element with the validation error
        setLoading(false)
        return
      }

      const formData = new FormData()
      formData.append('image', image)
      formData.append('name', name)
      formData.append('company', company)
      formData.append('address', address)
      formData.append('postalCode', postalCode)
      formData.append('phone', phone)
      formData.append('vatTaxId', vatTaxId)
      formData.append('email', user.email)

      const { data } = await Axios.patch('/users/update/profile', formData)

      // Dispatch an action to the authentication context to update the user, The action has a type of UPDATE_PROFILE and carries the user data in the payload
      authDispatch({
        type: UPDATE_PROFILE, // Action type indicating the user is logging in
        payload: data.user // Payload containing the user data to be stored in the authentication state
      })

      if (data) {
        // console.log('update profile client data', data)
        // Update local storage with new user details
        localStorage.setItem('user', JSON.stringify(data.user))

        // Display success message and refresh the page
        swal('Great', 'Profile updated successfully', 'success').then(() => {
          setName(() => '') // Update name state with an empty string
          setCompany(() => '') // Similar updates for other state variables
          setPostalCode(() => '')
          setVatTaxId(() => '')
          setPhone(() => '')
          setImage(null)
          window.scrollTo(0, 0)
          window.location.reload() //refresh the window
        })
      }

      setLoading(false)
    } catch (error) {
      swal('Oops!', getErrorMessage(error), 'error')
      setLoading(false)
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
        // console.log('_user', _user)
        const { data, error } = await Axios.patch(
          '/users/update/password',
          _user
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
            localStorage.removeItem('_d_user')

            authDispatch({ type: 'LOG_OUT' })

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

  const handleDeleteProfile = async(e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Are you sure?',
      text: `You won't be able to revert this`,
      icon: 'warning',
      showCancelButton: true,
      showDenyButton: true,
      confirmButtonColor: '#006400',
      cancelButtonColor: '#8a640e',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          setLoading(true);
          const email = user.email; 
          // console.log('email', email)
          const {data} = await Axios.delete('/users/delete/profile', {email});

          if (data) {
            Swal.fire({
              title: 'Deleted!',
              text: `Your profile has been deleted.`,
              icon: 'success',
              confirmButtonColor: '#006400',
            }).then(() => {
              // Perform logout and navigate to login page
              localStorage.removeItem('_d_user')
              authDispatch({ type: 'LOG_OUT' });
              setLoading(false);
              navigate('/login/user');
            });
          }
        } catch (error) {
          setLoading(false);
          swal('Oops', getErrorMessage(error), 'error')
        }
      }else if (result.isDenied) {
        setLoading(false);
        swal('Request Successful', 'Profile not deleted', 'info')
        // Swal.fire({
        //   title: 'Request successful',
        //   text: `Profile not deleted`,
        //   icon: 'info',
        //   confirmButtonColor: '#006400',
        // })
        setLoading(false);
      }
    });
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
            <form
              // onSubmit={handleUpdateProfileSubmit}
              className='file-upload needs-validation'
              noValidate
            >
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
                            className={`form-control ${
                              nameError ? 'is-invalid' : ''
                            } ${name ? 'is-valid' : ''}`}
                            id='name'
                            placeholder='Full Name'
                            required
                            onChange={handleNameChange}
                            ref={nameInputRef}
                          />
                          <div className='invalid-feedback'>{nameError}</div>
                        </div>
                      </div>
                      {/* company */}
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
                            className={`form-control ${
                              companyError ? 'is-invalid' : ''
                            } ${company ? 'is-valid' : ''}`}
                            id='company'
                            placeholder='Company'
                            required
                            onChange={handleCompanyChange}
                            ref={companyInputRef}
                          />
                          <div className='invalid-feedback'>{companyError}</div>
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
                            className={`form-control ${
                              addressError ? 'is-invalid' : ''
                            } ${address ? 'is-valid' : ''}`}
                            id='address'
                            placeholder='Address'
                            required
                            onChange={handleAddressChange}
                            ref={addressInputRef}
                          />
                          <div className='invalid-feedback'>{addressError}</div>
                        </div>
                      </div>
                      {/* postal code */}
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
                            className={`form-control ${
                              postalCodeError ? 'is-invalid' : ''
                            } ${postalCode ? 'is-valid' : ''}`}
                            id='postalCode'
                            placeholder='Postal Code'
                            required
                            onChange={handlePostalCodeChange}
                            ref={postalCodeInputRef}
                          />
                          <div className='invalid-feedback'>
                            {postalCodeError}
                          </div>
                        </div>
                      </div>
                      {/* phone number */}
                      <div
                        tabIndex='-1'
                        ref={phoneInputRef}
                        className='has-validation text-start justify-content-start ms-auto'
                      >
                        <label htmlFor='phone' className='form-label'>
                          Phone Number
                        </label>
                        <PhoneInput
                          className={`form-control ${
                            phoneError ? 'is-invalid' : ''
                          } ${phone ? 'is-valid' : ''}`}
                          id='phone'
                          placeholder='E.g +2347034054567'
                          onChange={e => {
                            handlePhoneChange(e)
                          }}
                          required
                          // ref={phoneInputRef}
                        />
                        <div className='invalid-feedback'>{phoneError}</div>
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
                            className={`form-control ${
                              vatTaxIdError ? 'is-invalid' : ''
                            } ${vatTaxId ? 'is-valid' : ''}`}
                            id='taxNo'
                            required
                            placeholder='Used in Customs Declaration section'
                            onChange={handleVatTaxIdChange}
                            ref={vatTaxIdInputRef}
                          />
                          <div className='invalid-feedback'>
                            {vatTaxIdError}
                          </div>
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
                            className={`form-control mb-2 mt-2 ${
                              imageError ? 'is-invalid' : ''
                            } ${image ? 'is-valid' : ''}`}
                            onChange={handleImageChange}
                            ref={imageInputRef}
                          />
                          <div className='invalid-feedback'>{imageError}</div>
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
                {loading && <Loader />}
                <button
                  type='button'
                  className='btn btn-danger btn-lg shadow mt-2 me-2'
                  onClick={e => handleDeleteProfile(e)}
                >
                  Delete profile
                </button>
                <button
                  className='btn btn-success btn-lg shadow mt-2 me-2'
                  onClick={e => handleUpdateProfileSubmit(e)}
                >
                  Update Profile
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
