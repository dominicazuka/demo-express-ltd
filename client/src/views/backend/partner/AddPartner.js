import React, { useEffect, useRef, useState } from 'react'
import BackEndSideBar from '../../../components/BackEndSideBar'
import $ from 'jquery'
import { useNavigate } from 'react-router-dom'
import Axios from '../../../config'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import swal from 'sweetalert'
import {
  getErrorMessage,
  validateEmail
} from '../../../utils'
import Swal from 'sweetalert2'
import { Country } from 'country-state-city'
import Loader from '../../../components/Loader'
import { useAuthContext } from '../../../contexts/AuthContext'

const AddPartner = () => {
  // window scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

    // Destructure the authState object from the useAuthContext hook to extract isAuthenticated, isAuthenticating, and user
    const {
        authState: { isAuthenticated, isAuthenticating, user }, // Destructures the authState object to extract isAuthenticated, isAuthenticating, and user values.
        authDispatch // Destructure authDispatch from useAuthContext hook
      } = useAuthContext() // Use the useAuthContext hook to get the authentication state and dispatch function

  const navigate = useNavigate() //import useNavigate from react-router-dom

  const [partnerName, setPartnerName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [servicesOffered, setServicesOffered] = useState([])
  const [isTouched, setIsTouched] = useState(false) // For conditional validation state for tags
  const [address, setAddress] = useState('')
  const [country, setCountry] = useState('')
  const [countryCode, setCountryCode] = useState('')
  const [loading, setLoading] = useState(false)

  //error state variables and useRef for required inputs
  const [partnerNameError, setPartnerNameError] = useState('')
  const partnerNameInputRef = useRef(null)
  const [phoneNumberError, setPhoneNumberError] = useState('')
  const phoneNumberInputRef = useRef(null)
  const [emailError, setEmailError] = useState('')
  const emailInputRef = useRef(null)
  const [servicesOfferedError, setServicesOfferedError] = useState('')
  const servicesOfferedInputRef = useRef(null)
  const [addressError, setAddressError] = useState('')
  const addressInputRef = useRef(null)
  const [countryError, setCountryError] = useState('')
  const countryInputRef = useRef(null)

  const handlePartnerNameChange = e => {
    setPartnerName(e.target.value)
    setPartnerNameError('')
  }

  const handlePhoneNumberChange = e => {
    setPhoneNumber(e)
    setPhoneNumberError('')
  }

  const handleEmailChange = e => {
    setEmail(e.target.value)
    setEmailError('')
  }

  const handleServicesOfferedChange = e => {
    setIsTouched(true)
    // const newTags = e.target.value.split(',') // Assuming tags are comma-separated
    const input = e.target.value
    const newTags = input
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag)

    // Validate input for non-comma-separated characters
    const invalidChars = /[^a-zA-Z0-9, ]/
    if (invalidChars.test(input)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Input',
        text: 'Please only input comma-separated words.',
        confirmButtonColor: '#006400'
      })
      setServicesOfferedError('Invalid input.')
    } else {
      setServicesOffered(newTags)
      setServicesOfferedError('')
    }
  }

  const handleAddressChange = e => {
    setAddress(e.target.value)
    setAddressError('')
  }

  const allCountries = Country.getAllCountries() //fetch all countries

  const handleCountryChange = e => {
    const countryIsoCode = e.target.value
    setCountryCode(countryIsoCode)
    const filterCountry = allCountries.find(c => c.isoCode === countryIsoCode)
    setCountry(filterCountry.name)
    console.log('country:', country)
    setCountryError('')
  }

  const handleSubmit = async e => {
    e.preventDefault() // Prevent default form submission
    setLoading(true)
    try {
      let isError = false
      if (partnerName.trim() === '') {
        setPartnerNameError('Please enter partner name')
        partnerNameInputRef.current.focus() // Focus on the input element with the validation error
        return (isError = true)
      }

      if (phoneNumber.trim() === '') {
        setPhoneNumberError('Please enter phone number')
        phoneNumberInputRef.current.focus() // Focus on the input element with the validation error
        return (isError = true)
      }

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

      if (servicesOffered.length === 0) {
        setServicesOfferedError('Please enter at least one service')
        servicesOfferedInputRef.current.focus() // Focus on the input element with the validation error
        return (isError = true)
      }

      if (address.trim() === '') {
        setAddressError('Please enter address')
        addressInputRef.current.focus() // Focus on the input element with the validation error
        return (isError = true)
      }

      if (country.trim() === '') {
        setCountryError('Please enter country')
        countryInputRef.current.focus() // Focus on the input element with the validation error
        return (isError = true)
      }

      const partner = {
        partnerName,
        phoneNumber,
        email,
        servicesOffered,
        address,
        country,
        countryCode
      }

      const response = await Axios.post('/partners/add-partner', {...partner, user})
      if (response.status === 201) {
        setLoading(false)
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Partner added successfully',
          confirmButtonColor: '#006400'
        })
        setPartnerName('')
        setPhoneNumber('')
        setEmail('')
        setServicesOffered([])
        setAddress('')
        setCountry('')
        setCountryCode('')
        navigate('/all/partners')
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: response.data.message,
          confirmButtonColor: '#006400'
        })
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
      swal('Oops', getErrorMessage(error), 'error')
    }
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <BackEndSideBar />
        <div className='col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-3'>
          <div className='card shadow'>
            <div className='card-body'>
              <h4 className='card-title'>Add Partner</h4>
              <form
                className='needs-validation'
                noValidate
                style={{ padding: '20px' }}
              >
                <div className='row g-3'>
                  {/* partnerName */}
                  <div className='col-12 text-start justify-content-start ms-auto'>
                    <label htmlFor='partnerName' className='form-label'>
                      Partner Name
                    </label>
                    <div className='input-group has-validation'>
                      <span className='input-group-text'>
                        <i class='bi bi-person-bounding-box'></i>
                      </span>
                      <input
                        type='text'
                        className={`form-control ${
                          partnerNameError ? 'is-invalid' : ''
                        } ${partnerName ? 'is-valid' : ''}`}
                        id='partnerName'
                        placeholder='Partner Full Name'
                        required
                        onChange={e => {
                          handlePartnerNameChange(e)
                        }}
                        ref={partnerNameInputRef}
                      />
                      <div className='invalid-feedback'>{partnerNameError}</div>
                    </div>
                  </div>

                  {/* phone number */}
                  <div
                    className='has-validation text-start justify-content-start ms-auto'
                    ref={phoneNumberInputRef}
                    tabIndex='-1'
                  >
                    <label htmlFor='phone' className='form-label'>
                      Phone Number
                    </label>
                    <PhoneInput
                      className={`form-control rounded ${
                        phoneNumberError ? 'is-invalid' : ''
                      } ${phoneNumber ? 'is-valid' : ''}`}
                      id='phone'
                      placeholder='E.g +2347034054567'
                      onChange={e => {
                        handlePhoneNumberChange(e)
                      }}
                      inputProps={{
                        required: true
                      }}
                    />
                    <div className='invalid-feedback'>{phoneNumberError}</div>
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
                        className={`form-control rounded ${
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

                  {/* servicesOffered */}
                  <div className='col-12 text-start justify-content-start ms-auto'>
                    <label htmlFor='servicesOffered' className='form-label'>
                      Services Offered
                    </label>
                    <div className='input-group has-validation'>
                      <span className='input-group-text'>
                        <i class='bi bi-tags-fill'></i>
                      </span>
                      <input
                        type='text'
                        className={`form-control rounded ${
                          servicesOfferedError ? 'is-invalid' : ''
                        } ${
                          isTouched && servicesOffered.length > 0
                            ? 'is-valid'
                            : ''
                        }`}
                        id='servicesOffered'
                        placeholder='Add services offered, seperate them by commas'
                        required
                        onChange={e => {
                          handleServicesOfferedChange(e)
                        }}
                        ref={servicesOfferedInputRef}
                      />
                      <div className='invalid-feedback'>{servicesOfferedError}</div>
                    </div>
                    <div className='mt-2'>
                      {servicesOffered.map((tag, index) => (
                        <span key={index} className='badge bg-success me-1'>
                          {tag}
                        </span>
                      ))}
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
                        placeholder='Partner Address'
                        required
                        onChange={e => {
                          handleAddressChange(e)
                        }}
                        defaultValue={address}
                        ref={addressInputRef}
                      />
                      <div className='invalid-feedback'>{addressError}</div>
                    </div>
                  </div>

                  {/* country */}
                  <div className='col-12 has-validation text-start justify-content-start ms-auto mb-3'>
                    <label htmlFor='country' className='form-label'>
                      Country
                    </label>
                    <span style={{ marginLeft: '10px' }}>
                      <i class='bi bi-globe-asia-australia'></i>
                    </span>
                    <select
                      className={`form-select ${
                        countryError ? 'is-invalid' : ''
                      } ${country ? 'is-valid' : ''}`}
                      id='country'
                      required
                      onChange={handleCountryChange}
                      ref={countryInputRef}
                    >
                      <option selected disabled value=''>
                        Select Country
                      </option>
                      {allCountries.map(country => (
                        <option key={country.isoCode} value={country.isoCode}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                    <div className='invalid-feedback'>{countryError}</div>
                  </div>

                  {loading && <Loader />}
                  <button
                    className='w-70 btn btn-success btn-lg shadow mt-3'
                    onClick={e => handleSubmit(e)}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddPartner
