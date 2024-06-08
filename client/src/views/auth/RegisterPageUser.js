import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useMediaQuery } from 'react-responsive'
import Loader from '../../components/Loader'
import { Country, State, City } from 'country-state-city'
import Axios from '../../config'
import swal from 'sweetalert' 
import { getErrorMessage, validateEmail, validatePassword } from '../../utils';
import TokenService from '../../libs/token';


const RegisterPageUser = () => {
  // window scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const navigate = useNavigate(); //import useNavigate from react-router-dom

  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [address, setAddress] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [country, setCountry] = useState('')
  const [countryCode, setCountryCode] = useState('')
  const [state, setState] = useState('')
  const [states, setStates] = useState([])
  const [city, setCity] = useState('')
  const [cities, setCities] = useState([])
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [vatTaxId, setVatTaxId] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [newsletter, setNewsletter] = useState('')
  const [privacyPolicy, setPrivacyPolicy] = useState(false)
  const [loading, setLoading] = useState(false)

  //error state variables and useRef for required inputs
  const [nameError, setNameError] = useState('')
  const nameInputRef = useRef(null)
  const [addressError, setAddressError] = useState('')
  const addressInputRef = useRef(null)
  const [countryError, setCountryError] = useState('')
  const countryInputRef = useRef(null)
  const [stateError, setStateError] = useState('')
  const stateInputRef = useRef(null)
  const [cityError, setCityError] = useState('')
  const cityInputRef = useRef(null)
  const [phoneError, setPhoneError] = useState('')
  const phoneInputRef = useRef(null)
  const [emailError, setEmailError] = useState('')
  const emailInputRef = useRef(null)
  const [passwordError, setPasswordError] = useState('')
  const passwordInputRef = useRef(null)
  const [confirmPasswordError, setConfirmPasswordError] = useState('')
  const confirmPasswordInputRef = useRef(null)
  const [privacyPolicyError, setPrivacyPolicyError] = useState('')
  const privacyPolicyInputRef = useRef(null)

  const allCountries = Country.getAllCountries() //fetch all countries

  const handleCountryChange = e => {
    const countryIsoCode = e.target.value
    setCountryCode(countryIsoCode)
    const filterCountry = allCountries.find(c => c.isoCode === countryIsoCode)
    setCountry(filterCountry.name)
    console.log('country:', country)
    const availableStates = State.getAllStates()
    let filterStates = availableStates.filter(
      s => s.countryCode === countryIsoCode
    )
    setStates(filterStates)
    setCities([]) //clear cities when country changes
    setState('') //reset selected state
    setCity('') //reset selected city
    setCountryError('')
  }

  const handleStateChange = e => {
    const stateIsoCode = e.target.value
    const allStates = State.getAllStates()
    let filterState = allStates.find(
      s => s.isoCode === stateIsoCode && s.countryCode === countryCode
    )
    setState(filterState.name)
    console.log('filter state:', filterState)
    console.log('state:', state)
    const availableCities = City.getCitiesOfState(countryCode, stateIsoCode)
    setCities(availableCities)
    setCity('') //reset selected city
    setStateError('')
  }

  const handleCityChange = e => {
    setCity(e.target.value)
    console.log('city:', city)
    setCityError('')
  }

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

  const handleEmailChange = e => {
    setEmail(e.target.value)
    setEmailError('')
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
    setPasswordError('')
  }

  const handleConfirmPasswordChange = e => {
    setConfirmPassword(e.target.value)
    setConfirmPasswordError('')
  }

  const handlePrivacyPolicyChange = e => {
    setPrivacyPolicy(e.target.checked)
    setPrivacyPolicyError('')
  }

  const register = async e => {
    e.preventDefault() // Prevent default form submission
    setLoading(true);
    try {
      let isError = false
      if (name.trim() === '') {
        setNameError('Please enter full name');
        nameInputRef.current.focus() // Focus on the input element with the validation error
        return isError = true
      }

      if (address.trim() === '') {
        setAddressError('Please enter address')
        addressInputRef.current.focus() // Focus on the input element with the validation error
        return isError = true
      }

      if (country.trim() === '' || country.trim() === 'none') {
        setCountryError('Please select a country')
        countryInputRef.current.focus() // Focus on the input element with the validation error
        return isError = true
      }

      if (state.trim() === '' || state.trim() === 'none') {
        setStateError('Please select a state')
        stateInputRef.current.focus() // Focus on the input element with the validation error
        return isError = true
      }

      if (city.trim() === '' || city.trim() === 'none') {
        setCityError('Please select a city')
        cityInputRef.current.focus() // Focus on the input element with the validation error
        return isError = true
      }

      if (phone.trim() === '') {
        setPhoneError('Please enter phone number')
        phoneInputRef.current.focus() // Focus on the input element with the validation error
        return isError = true
      }

      if (email.trim() === '') {
        setEmailError('Please enter email address')
        emailInputRef.current.focus() // Focus on the input element with the validation error
        return isError = true
      }

      if (!validateEmail(email.trim())) {
        setEmailError('Please input a valid email address')
        emailInputRef.current.focus() // Focus on the input
        return isError = true
      }

      if (!validatePassword(password)) {
        setPasswordError(
          'Please input a strong password that matches the below requirements'
        )
        passwordInputRef.current.focus() // Focus on the input
        return isError = true
      }

      if (!validatePassword(confirmPassword)) {
        setConfirmPasswordError(
          'Please input a strong password that matches the below requirements'
        )
        confirmPasswordInputRef.current.focus() // Focus on the input
        return isError = true
      }

      if (password !== confirmPassword) {
        setPasswordError('Passwords do not match')
        setConfirmPasswordError('Passwords do not match')
        passwordInputRef.current.focus() // Focus on the input
        return isError = true
      }

      if (!privacyPolicy) {
        setPrivacyPolicyError('You must accept the privacy policy')
        privacyPolicyInputRef.current.focus() // Focus on the checkbox
        return isError = true
      }
      if (password === confirmPassword) {
        const newsletterSubscription = document.getElementById('newsletterCheck').checked
        const user = {
          name,
          company,
          address,
          postalCode,
          countryCode,
          country,
          state,
          city,
          phone,
          email,
          vatTaxId,
          password,
          newsletter: newsletterSubscription ? true : false, //conditional tenary check
          role: 'User'
        }
        const { data, error } = await Axios.post('/users/register', user);
        console.log('data', data)
        if (data) {
          TokenService.setUser(data.user); // Store user data in local storage
          swal(
            error ? 'Oops' : 'Great',
            'Registration Successful',
            !error ? 'success' : 'error'
          )
          navigate(`/user/verify-email?email=${encodeURIComponent(user.email)}`); // Redirect to the verify email page
        }
        setLoading(false);
      }
    } catch (error) {
      swal('Oops', getErrorMessage(error), 'error')
      setLoading(false)
    }
  }

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
                      className={`form-control ${
                        nameError ? 'is-invalid' : ''
                      } ${name ? 'is-valid' : ''}`}
                      id='name'
                      placeholder='Full Name'
                      required
                      onChange={e => {
                        handleNameChange(e)
                      }}
                      defaultValue={name}
                      ref={nameInputRef}
                    />
                    <div className='invalid-feedback'>{nameError}</div>
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
                      className={`form-control ${company ? 'is-valid' : ''}`}
                      id='company'
                      placeholder='(optional)'
                      onChange={handleCompanyChange}
                      defaultValue={company}
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
                      className={`form-control ${
                        addressError ? 'is-invalid' : ''
                      } ${address ? 'is-valid' : ''}`}
                      id='address'
                      placeholder='Address'
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
                      className={`form-control ${postalCode ? 'is-valid' : ''}`}
                      id='postalCode'
                      placeholder='(optional)'
                      onChange={handlePostalCodeChange}
                      defaultValue={postalCode}
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

                <div className='col-md-4 has-validation text-start justify-content-start ms-auto'>
                  <label htmlFor='state' className='form-label'>
                    State
                  </label>
                  <span style={{ marginLeft: '10px' }}>
                    <i class='bi bi-map'></i>
                  </span>
                  <select
                    className={`form-select ${stateError ? 'is-invalid' : ''} ${
                      state ? 'is-valid' : ''
                    }`}
                    id='state'
                    required
                    onChange={handleStateChange}
                    disabled={!country}
                    ref={stateInputRef}
                  >
                    <option selected disabled value=''>
                      Select State
                    </option>
                    {states.map(state => (
                      <option key={state.name} value={state.isoCode}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                  <div className='invalid-feedback'>{stateError}</div>
                </div>

                <div className='col-md-4 has-validation text-start justify-content-start ms-auto'>
                  <label htmlFor='city' className='form-label'>
                    City
                  </label>
                  <span style={{ marginLeft: '10px' }}>
                    <i class='bi bi-radar'></i>
                  </span>
                  <select
                    className={`form-select ${cityError ? 'is-invalid' : ''} ${
                      city ? 'is-valid' : ''
                    }`}
                    id='city'
                    required
                    onChange={handleCityChange}
                    disabled={!state}
                    ref={cityInputRef}
                  >
                    <option selected disabled value=''>
                      Select City
                    </option>
                    {cities.map(city => (
                      <option key={city.name}>{city.name}</option>
                    ))}
                  </select>
                  <div className='invalid-feedback'>{cityError}</div>
                </div>

                {/* phone number */}
                <div
                  className='has-validation text-start justify-content-start ms-auto'
                  ref={phoneInputRef}
                  tabIndex='-1'
                >
                  <label htmlFor='phone' className='form-label'>
                    Phone Number
                  </label>
                  <PhoneInput
                    className={`form-control rounded ${
                      phoneError ? 'is-invalid' : ''
                    } ${phone ? 'is-valid' : ''}`}
                    id='phone'
                    placeholder='E.g +2347034054567'
                    onChange={e => {
                      handlePhoneChange(e)
                    }}
                    inputProps={{
                      required: true
                    }}
                  />
                  <div className='invalid-feedback'>{phoneError}</div>
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
                      placeholder='Email would be used for shipment notifications'
                      required
                      onChange={e => {
                        handleEmailChange(e)
                      }}
                      ref={emailInputRef}
                    />
                    <div className='invalid-feedback'>{emailError}</div>
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
                      className={`form-control ${vatTaxId ? 'is-valid' : ''}`}
                      id='taxNo'
                      placeholder='Used in Customs Declaration section (optional)'
                      onChange={handleVatTaxIdChange}
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
                      className={`form-control w-70 ${
                        passwordError ? 'is-invalid' : ''
                      } ${password ? 'is-valid' : ''}`}
                      id='newPassword'
                      placeholder='Enter your new password'
                      required
                      onChange={handlePasswordChange}
                      ref={passwordInputRef}
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
                    <div className='invalid-feedback'>{passwordError}</div>
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
                      className={`form-control rounded ${
                        passwordError ? 'is-invalid' : ''
                      } ${confirmPassword ? 'is-valid' : ''}`}
                      id='confirmNewPassword'
                      placeholder='Confirm your new password'
                      required
                      onChange={handleConfirmPasswordChange}
                      ref={confirmPasswordInputRef}
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
                      {confirmPasswordError}
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
                      color: (passwordError || confirmPasswordError) ? 'red' : ((password === confirmPassword && password) ? 'green' : 'black')
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
                  id='newsletterCheck'
                  onChange={e => setNewsletter(e.target.checked)}
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
                  className={`form-check-input ${
                    privacyPolicyError ? 'is-invalid' : ''
                  } ${privacyPolicy ? 'is-valid' : ''}`}
                  type='checkbox'
                  name='privacyPolicy'
                  id='privacyPolicyCheck'
                  required
                  ref={privacyPolicyInputRef}
                  onChange={e => {
                    handlePrivacyPolicyChange(e)
                  }}
                />
                <label class='form-check-label' for='privacyPolicyCheck'>
                  I have read the Privacy Policy{' '}
                  <sup className='text-danger'> *</sup>
                </label>
                <div className='invalid-feedback'>{privacyPolicyError}</div>
              </div>
              {/* privacy policy end */}
              {loading && <Loader />}
              <button
                className='w-70 btn btn-success btn-lg shadow mt-2'
                onClick={e => register(e)}
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
              <i
                class='bi-truck'
                style={{
                  fontSize: '50px',
                  color: '#006400',
                  backgroundColor: 'white'
                }}
              ></i>
            </div>
            <div>
              <h3 class='fs-2 text-body-emphasis'>Fast Delivery</h3>
              <p style={{ textAlign: 'justify' }}>
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
              <i
                class='bi bi-map'
                style={{
                  fontSize: '50px',
                  color: '#006400',
                  backgroundColor: 'white'
                }}
              ></i>
            </div>
            <div>
              <h3 class='fs-2 text-body-emphasis'>Real-Time Tracking</h3>
              <p style={{ textAlign: 'justify' }}>
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
              <i
                class='bi bi-tools'
                style={{
                  fontSize: '50px',
                  color: '#006400',
                  backgroundColor: 'white'
                }}
              ></i>
            </div>
            <div>
              <h3 class='fs-2 text-body-emphasis'>Secure Payments</h3>
              <p style={{ textAlign: 'justify' }}>
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
