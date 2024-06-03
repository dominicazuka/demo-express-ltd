import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PhoneInput from 'react-phone-number-input'
import { useMediaQuery } from 'react-responsive'

const Ship = () => {
  // window scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const isMobile = useMediaQuery({ maxWidth: 767 }) // Define the breakpoint for mobile devices

  //   const [formSubmitted, setFormSubmitted] = useState(false)

  // State to store the currently selected icon
  const [selectedIcon, setSelectedIcon] = useState('bi bi-question-circle')

  // State to store the weight input value
  const [weight, setWeight] = useState('0')

  // Function to handle button clicks and update the selected icon
  const handleButtonClick = iconClass => {
    setSelectedIcon(iconClass)
  }

  // Function to handle weight input changes
  const handleWeightChange = event => {
    setWeight(event.target.value)
  }

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
              Ship a Package
            </h1>
            <p
              className='text-white'
              style={{
                marginBottom: '60px'
              }}
            >
              Simplify your shipping process with Demo Express LTD. Whether
              you're sending a small parcel or a large shipment, our easy-to-use
              platform ensures a smooth and efficient experience.
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
      <div className='container'>
        <div className='py-5 text-center'>
          <img
            className='d-block mx-auto mb-4'
            src='https://via.placeholder.com/40x32'
            alt=''
            width='72'
            height='57'
          />
          <h2>Demo Express LTD Ship Manager</h2>
          <p className='lead'>
            Below is an example form built entirely with Bootstrap’s form
            controls. Each required form group has a validation state that can
            be triggered by attempting to submit the form without completing it.
          </p>
        </div>

        {/* shipping section start */}
        <div class='mt-3 mb-3 accordion' id='accordionPanelsStayOpenExample'>
          {/* address info start */}
          <div class='accordion-item'>
            <h2 class='accordion-header' id='panelsStayOpen-headingOne'>
              <button
                class='accordion-button'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#panelsStayOpen-collapseOne'
                aria-expanded='true'
                aria-controls='panelsStayOpen-collapseOne'
              >
                Address Information #1
              </button>
            </h2>
            <div
              id='panelsStayOpen-collapseOne'
              class='accordion-collapse collapse show'
              aria-labelledby='panelsStayOpen-headingOne'
            >
              <div class='accordion-body'>
                <main>
                  <div className='p-2 shadow rounded'>
                    <form className='row needs-validation' noValidate>
                      {/* From info */}
                      <div className='mt-3 col-md-6 col-lg-6'>
                        <h4 className='mb-3'>From</h4>

                        <div className='row g-3'>
                          {/* name */}
                          <div className='col-12 text-start justify-content-start ms-auto'>
                            <label htmlFor='senderName' className='form-label'>
                              Your Name
                            </label>
                            <div className='input-group has-validation'>
                              <span className='input-group-text'>
                                <i class='bi bi-person-bounding-box'></i>
                              </span>
                              <input
                                type='text'
                                className='form-control'
                                id='senderName'
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
                            <label
                              htmlFor='senderCompany'
                              className='form-label'
                            >
                              Company
                            </label>
                            <div className='input-group has-validation'>
                              <span className='input-group-text'>
                                <i class='bi bi-building'></i>
                              </span>
                              <input
                                type='text'
                                className='form-control'
                                id='senderCompany'
                                placeholder='(optional)'
                              />
                            </div>
                          </div>

                          {/* address */}
                          <div className='col-12 text-start justify-content-start ms-auto'>
                            <label
                              htmlFor='senderAddress'
                              className='form-label'
                            >
                              Address
                            </label>
                            <div className='input-group has-validation'>
                              <span className='input-group-text'>
                                <i class='bi bi-send'></i>
                              </span>
                              <input
                                type='text'
                                className='form-control'
                                id='senderAddress'
                                placeholder='Sender Address'
                                required
                              />
                              <div className='invalid-feedback'>
                                Valid sender address is required.
                              </div>
                            </div>
                          </div>

                          {/* postal code - optional */}
                          <div className='col-12 text-start justify-content-start ms-auto'>
                            <label
                              htmlFor='senderPostalCode'
                              className='form-label'
                            >
                              Postal Code
                            </label>
                            <div className='input-group has-validation'>
                              <span className='input-group-text'>
                                <i class='bi bi-upc'></i>
                              </span>
                              <input
                                type='text'
                                className='form-control'
                                id='senderPostalCode'
                                placeholder='(optional)'
                              />
                            </div>
                          </div>

                          {/* country, state, city */}
                          <div className='col-md-4 has-validation text-start justify-content-start ms-auto'>
                            <label
                              htmlFor='senderCountry'
                              className='form-label'
                            >
                              Country
                            </label>
                            <span style={{ marginLeft: '10px' }}>
                              <i class='bi bi-globe-asia-australia'></i>
                            </span>
                            <select
                              className='form-select'
                              id='senderCountry'
                              required
                            >
                              <option value=''>Choose...</option>
                              <option>United States</option>
                            </select>
                            <div className='invalid-feedback'>
                              Please select a valid country.
                            </div>
                          </div>
                          <div className='col-md-4 has-validation text-start justify-content-start ms-auto'>
                            <label htmlFor='senderState' className='form-label'>
                              State
                            </label>
                            <span style={{ marginLeft: '10px' }}>
                              <i class='bi bi-map'></i>
                            </span>
                            <select
                              className='form-select'
                              id='senderState'
                              required
                            >
                              <option value=''>Choose...</option>
                              <option>Califonia</option>
                            </select>
                            <div className='invalid-feedback'>
                              Please select a valid state.
                            </div>
                          </div>
                          <div className='col-md-4 has-validation text-start justify-content-start ms-auto'>
                            <label htmlFor='senderCity' className='form-label'>
                              City
                            </label>
                            <span style={{ marginLeft: '10px' }}>
                              <i class='bi bi-radar'></i>
                            </span>
                            <select
                              className='form-select'
                              id='senderCity'
                              required
                            >
                              <option value=''>Choose...</option>
                              <option>City 1</option>
                            </select>
                            <div className='invalid-feedback'>
                              Please select a valid city.
                            </div>
                          </div>

                          {/* phone number */}
                          <div className='has-validation text-start justify-content-start ms-auto'>
                            <label htmlFor='senderPhone' className='form-label'>
                              Phone Number
                            </label>
                            <PhoneInput
                              className='form-control rounded'
                              id='senderPhone'
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
                            <label htmlFor='senderEmail' className='form-label'>
                              Email Address
                            </label>
                            <div className='input-group has-validation'>
                              <span className='input-group-text'>
                                <i class='bi bi-envelope-at'></i>
                              </span>
                              <input
                                type='email'
                                className='form-control'
                                id='senderEmail'
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
                            <label htmlFor='senderTaxNo' className='form-label'>
                              VAT/Tax ID
                            </label>
                            <div className='input-group'>
                              <span className='input-group-text'>
                                <i class='bi bi-cash-stack'></i>
                              </span>
                              <input
                                type='text'
                                className='form-control'
                                id='senderTaxNo'
                                placeholder='Used in Customs Declaration section (optional)'
                              />
                            </div>
                          </div>
                        </div>

                        <hr className='my-4' />
                      </div>
                      {/* From info end */}

                      {/* To info start*/}
                      <div className='mt-3 col-md-6 col-lg-6'>
                        <h4 className='mb-3'>To</h4>

                        <div className='row g-3'>
                          {/* name */}
                          <div className='col-12 text-start justify-content-start ms-auto'>
                            <label
                              htmlFor='receiverName'
                              className='form-label'
                            >
                              Receiver Name
                            </label>
                            <div className='input-group has-validation'>
                              <span className='input-group-text'>
                                <i class='bi bi-person-bounding-box'></i>
                              </span>
                              <input
                                type='text'
                                className='form-control'
                                id='receiverName'
                                placeholder='Receiver Name'
                                required
                              />
                              <div className='invalid-feedback'>
                                Valid full name is required.
                              </div>
                            </div>
                          </div>

                          {/* company - optional */}
                          <div className='col-12 text-start justify-content-start ms-auto'>
                            <label
                              htmlFor='receiverCompany'
                              className='form-label'
                            >
                              Receiver Company
                            </label>
                            <div className='input-group has-validation'>
                              <span className='input-group-text'>
                                <i class='bi bi-building'></i>
                              </span>
                              <input
                                type='text'
                                className='form-control'
                                id='receiverCompany'
                                placeholder='(optional)'
                              />
                            </div>
                          </div>

                          {/* address */}
                          <div className='col-12 text-start justify-content-start ms-auto'>
                            <label
                              htmlFor='receiverAddress'
                              className='form-label'
                            >
                              Receiver Address
                            </label>
                            <div className='input-group has-validation'>
                              <span className='input-group-text'>
                                <i class='bi bi-send'></i>
                              </span>
                              <input
                                type='text'
                                className='form-control'
                                id='receiverAddress'
                                placeholder='Receiver Address'
                                required
                              />
                              <div className='invalid-feedback'>
                                Valid receiver address is required.
                              </div>
                            </div>
                          </div>

                          {/* postal code - optional */}
                          <div className='col-12 text-start justify-content-start ms-auto'>
                            <label
                              htmlFor='receiverPostalCode'
                              className='form-label'
                            >
                              Reciever Postal Code
                            </label>
                            <div className='input-group has-validation'>
                              <span className='input-group-text'>
                                <i class='bi bi-upc'></i>
                              </span>
                              <input
                                type='text'
                                className='form-control'
                                id='receiverPostalCode'
                                placeholder='(optional)'
                              />
                            </div>
                          </div>

                          {/* country, state, city start */}
                          <div className='col-md-4 has-validation text-start justify-content-start ms-auto'>
                            <label
                              htmlFor='receiverCountry'
                              className='form-label'
                            >
                              Receiver Country
                            </label>
                            <span style={{ marginLeft: '10px' }}>
                              <i class='bi bi-globe-asia-australia'></i>
                            </span>
                            <select
                              className='form-select'
                              id='receiverCountry'
                              required
                            >
                              <option value=''>Choose...</option>
                              <option>United States</option>
                            </select>
                            <div className='invalid-feedback'>
                              Please select a valid receiver country.
                            </div>
                          </div>
                          <div className='col-md-4 has-validation text-start justify-content-start ms-auto'>
                            <label
                              htmlFor='receiverState'
                              className='form-label'
                            >
                              Receiver State
                            </label>
                            <span style={{ marginLeft: '10px' }}>
                              <i class='bi bi-map'></i>
                            </span>
                            <select
                              className='form-select'
                              id='receiverState'
                              required
                            >
                              <option value=''>Choose...</option>
                              <option>California</option>
                            </select>
                            <div className='invalid-feedback'>
                              Please select a valid receiver state.
                            </div>
                          </div>
                          <div className='col-md-4 has-validation text-start justify-content-start ms-auto'>
                            <label
                              htmlFor='receiverCity'
                              className='form-label'
                            >
                              Receiver City
                            </label>
                            <span style={{ marginLeft: '10px' }}>
                              <i class='bi bi-radar'></i>
                            </span>
                            <select
                              className='form-select'
                              id='receiverCity'
                              required
                            >
                              <option value=''>Choose...</option>
                              <option>City 1</option>
                            </select>
                            <div className='invalid-feedback'>
                              Please select a valid receiver city.
                            </div>
                          </div>
                          {/* country, state, city end */}

                          {/* phone number */}
                          <div className='has-validation text-start justify-content-start ms-auto'>
                            <label
                              htmlFor='receiverPhone'
                              className='form-label'
                            >
                              Receiver Phone Number
                            </label>
                            <PhoneInput
                              className='form-control rounded'
                              id='receiverPhone'
                              placeholder='E.g +2347034054567'
                              onChange={e => {
                                handlePhoneNumberInput(e)
                              }}
                              required
                            />
                            <div className='invalid-feedback'>
                              Valid receiver phone number is required.
                            </div>
                          </div>

                          {/* email */}
                          <div className='col-12 text-start justify-content-start ms-auto'>
                            <label
                              htmlFor='receiverEmail'
                              className='form-label'
                            >
                              Receiver Email Address
                            </label>
                            <div className='input-group has-validation'>
                              <span className='input-group-text'>
                                <i class='bi bi-envelope-at'></i>
                              </span>
                              <input
                                type='email'
                                className='form-control'
                                id='receiverEmail'
                                placeholder='Email would be used for shipment notifications'
                                required
                              />
                              <div className='invalid-feedback'>
                                Valid receiver email address is required.
                              </div>
                            </div>
                          </div>

                          {/* VAT/Tax ID */}
                          <div className='col-12 text-start justify-content-start ms-auto'>
                            <label
                              htmlFor='receiverTaxNo'
                              className='form-label'
                            >
                              Receiver VAT/Tax ID
                            </label>
                            <div className='input-group'>
                              <span className='input-group-text'>
                                <i class='bi bi-cash-stack'></i>
                              </span>
                              <input
                                type='text'
                                className='form-control'
                                id='receiverTaxNo'
                                placeholder='Used in Customs Declaration section (optional)'
                              />
                            </div>
                          </div>

                          {/* notes */}
                          <div className='col-12 text-start justify-content-start ms-auto'>
                            <label
                              htmlFor='receiverNote'
                              className='form-label'
                            >
                              Notes about this contact
                            </label>
                            <div className='input-group'>
                              <span className='input-group-text'>
                                <i class='bi bi-journal-check'></i>
                              </span>
                              <textarea
                                className='form-control'
                                id='receiverNote'
                                placeholder='Important things we need to take note of... (optional)'
                                rows='5'
                              />
                            </div>
                          </div>
                        </div>

                        <hr className='my-4' />

                        <button
                          className='w-100 btn btn-success btn-lg shadow'
                          type='submit'
                        >
                          Next
                        </button>
                      </div>
                      {/* To info end*/}
                    </form>
                  </div>
                </main>
              </div>
            </div>
          </div>
          {/* address info end */}

          {/* shipment info start */}
          <div class='mt-3 accordion-item'>
            <h2 class='accordion-header' id='panelsStayOpen-headingTwo'>
              <button
                class='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#panelsStayOpen-collapseTwo'
                aria-expanded='false'
                aria-controls='panelsStayOpen-collapseTwo'
              >
                Shipment Details #2
              </button>
            </h2>
            <div
              id='panelsStayOpen-collapseTwo'
              class='accordion-collapse collapse'
              aria-labelledby='panelsStayOpen-headingTwo'
            >
              <div class='accordion-body'>
                <div className='container mb-4'>
                  <div className='card p-3 shadow'>
                    {/* weight start */}
                    <p className='h5 '>Weight</p>
                    <div className='align-items-start text-start justify-content-start'>
                      <label htmlFor='weight-0' className='form-label'>
                        Weight (kg)
                      </label>
                      <input
                        aria-describedby='success_weight-0'
                        id='weight-0'
                        name='weight-0'
                        required
                        type='text'
                        placeholder='Weight (kg)'
                        autoComplete='off'
                        className='form-control'
                        onChange={handleWeightChange}
                      />
                      <div role='alert'></div>
                    </div>
                    {/* weight end */}

                    <div className='feature-icon text-center d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-2 mb-5 rounded-3 p-3 shadow'>
                      <i className={selectedIcon}></i>
                    </div>
                    {/* weight end */}

                    {/* Dimension start */}
                    <fieldset>
                      <legend className='h5'>Dimensions</legend>
                      <div className='d-flex align-items-center mb-3'>
                        <label
                          htmlFor='length'
                          className='form-label'
                          style={{ marginRight: '10px' }}
                        >
                          Length (cm)
                        </label>
                        <input
                          aria-describedby='success_length-0'
                          id='length'
                          name='length'
                          required
                          type='text'
                          placeholder='Length (cm)'
                          autoComplete='off'
                          className='form-control'
                        />
                        <span className='mx-2'>X</span>

                        <label htmlFor='width' className='form-label me-2'>
                          Width (cm)
                        </label>
                        <input
                          aria-describedby='success_width-0'
                          id='width'
                          name='width'
                          required
                          type='text'
                          placeholder='Width (cm)'
                          autoComplete='off'
                          className='form-control me-2'
                        />
                        <span className='mx-2'>X</span>
                        <label htmlFor='height-0' className='form-label me-2'>
                          Height (cm)
                        </label>
                        <input
                          aria-describedby='success_height-0'
                          id='height'
                          name='height'
                          required
                          type='text'
                          placeholder='Height (cm)'
                          autoComplete='off'
                          className='form-control'
                        />
                      </div>
                    </fieldset>
                    {/* Dimension End */}

                    {/* options start */}
                    <fieldset>
                      <legend className='visually-hidden'>
                        Common Shipping Sizes
                      </legend>
                      <p className='mt-4 h5'>Not sure about the sizes?</p>
                      <div className='text-center align-items-center justify-content-center d-flex flex-wrap'>
                        <div className='card me-2 mb-2'>
                          <button
                            className='btn btn-outline-success shadow'
                            data-testid='preset-card-button'
                            onClick={() => handleButtonClick('bi bi-envelope')}
                          >
                            <div className='feature-icon text-center d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-2 mb-3 rounded-3 p-2 shadow'>
                              <i class='bi bi-envelope'></i>
                            </div>

                            <div>
                              <span className='fw-bold'>A4 Envelope</span>
                              <span className='d-block'>32 x 24 x 1 cm</span>
                            </div>
                          </button>
                        </div>
                        <div className='card me-2 mb-2'>
                          <button
                            className='btn btn-outline-success shadow'
                            data-testid='preset-card-button'
                            onClick={() => handleButtonClick('bi bi-book')}
                          >
                            <div className='feature-icon text-center d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-2 mb-3 rounded-3 p-2 shadow'>
                              <i class='bi bi-book'></i>
                            </div>
                            <div>
                              <span className='fw-bold'>One or two books</span>
                              <span className='d-block'>23 x 14 x 4 cm</span>
                            </div>
                          </button>
                        </div>
                        <div className='card me-2 mb-2'>
                          <button
                            className='btn btn-outline-success shadow'
                            data-testid='preset-card-button'
                            onClick={() => handleButtonClick('bi bi-backpack3')}
                          >
                            <div className='feature-icon text-center d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-2 mb-3 rounded-3 p-2 shadow'>
                              <i class='bi bi-backpack3'></i>
                            </div>
                            <div>
                              <span className='fw-bold'>Shoe box</span>
                              <span className='d-block'>35 x 20 x 15 cm</span>
                            </div>
                          </button>
                        </div>
                        <div className='card me-2 mb-2'>
                          <button
                            className='btn btn-outline-success shadow'
                            data-testid='preset-card-button'
                            onClick={() =>
                              handleButtonClick('bi bi-minecart-loaded')
                            }
                          >
                            <div className='feature-icon text-center d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-2 mb-3 rounded-3 p-2 shadow'>
                              <i class='bi bi-minecart-loaded'></i>
                            </div>
                            <div>
                              <span className='fw-bold'>Moving box</span>
                              <span className='d-block'>75 x 35 x 35 cm</span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </fieldset>
                    {/* options end */}

                    {/* total weight start */}
                    <p className='mt-3 h5 align-items-start text-start justify-content-start'>
                      Total Shipment Weight: {weight} kg
                    </p>
                    {/* total weight end */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* shipment info end */}

          {/* delivery options start */}
          <div class='mt-3 accordion-item'>
            <h2 class='accordion-header' id='panelsStayOpen-headingThree'>
              <button
                class='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#panelsStayOpen-collapseThree'
                aria-expanded='false'
                aria-controls='panelsStayOpen-collapseThree'
              >
                Delivery Options #3
              </button>
            </h2>
            <div
              id='panelsStayOpen-collapseThree'
              class='accordion-collapse collapse'
              aria-labelledby='panelsStayOpen-headingThree'
            >
              <div class='accordion-body'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='card my-4 shadow'>
                      <div className='card-body'>
                        <div className='align-items-center mb-3'>
                          <div className='me-3'>
                            <div className='feature-icon text-center d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-2 mb-3 rounded-3 p-2 shadow'>
                              <i class='bi bi-airplane-engines'></i>
                            </div>
                          </div>
                          <div>
                            <p className='mb-1'>Estimated delivery</p>
                            <h5 className='mb-1'>Fri, 31 May</h5>
                            <span>latest by end of day</span>
                            <p className='mt-2'>
                              Book by 29/05/2024 by 03:00 pm for a pick-up today
                            </p>
                          </div>
                        </div>

                        <div className='mb-3'>
                          <p className='mb-1'>Includes VAT</p>
                          <h4>$ 20,000 </h4>
                        </div>

                        <button
                          className='btn btn-success w-100 mb-3 shadow'
                          type='button'
                        >
                          Continue to Booking
                        </button>
                      </div>

                      <div className='accordion' id='accordionExample'>
                        <div className='accordion-item'>
                          <h2 className='accordion-header' id='headingOne'>
                            <button
                              className='accordion-button'
                              type='button'
                              data-bs-toggle='collapse'
                              data-bs-target='#collapseOne'
                              aria-expanded='true'
                              aria-controls='collapseOne'
                            >
                              Included in this Offer
                            </button>
                          </h2>
                          <div
                            id='collapseOne'
                            className='accordion-collapse collapse show'
                            aria-labelledby='headingOne'
                            data-bs-parent='#accordionExample'
                          >
                            <div className='accordion-body'>
                              <ul>
                                <li>
                                  Reliable door-to-door Express parcel &
                                  document Delivery of your Time Sensitive
                                  Shipment
                                </li>
                                <li>Track & trace</li>
                                <li>
                                  Electronic Proof of Delivery in Real Time
                                </li>
                                <li>
                                  Courier pickup scheduling in the next step
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className='accordion-item'>
                          <h2 className='accordion-header' id='headingTwo'>
                            <button
                              className='accordion-button collapsed'
                              type='button'
                              data-bs-toggle='collapse'
                              data-bs-target='#collapseTwo'
                              aria-expanded='false'
                              aria-controls='collapseTwo'
                            >
                              Optional Add-ons
                            </button>
                          </h2>
                          <div
                            id='collapseTwo'
                            className='accordion-collapse collapse'
                            aria-labelledby='headingTwo'
                            data-bs-parent='#accordionExample'
                          >
                            <div className='accordion-body'>
                              <h6>Insurance</h6>
                              <p style={{ textAlign: 'justify' }}>
                                Financial protection of your shipment value
                                against all risks of physical shipment loss or
                                damage, from any external causes (additional
                                charges apply)
                              </p>
                              <h6>GoGreen Plus</h6>
                              <p style={{ textAlign: 'justify' }}>
                                <strong>
                                  Reduce your CO2 emissions by 30%.
                                </strong>{' '}
                                Harness our sustainable aviation fuel and engage
                                in impactful climate action. Choose GoGreen Plus
                                without compromising speed, as your deliveries
                                remain as timely as ever!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='card-footer text-muted text-end justify-content-end ms-auto'>
                        <span class='badge text-bg-success rounded-pill'>
                          Validity of quote: Until end of the year
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6 mx-auto'>
                    <div className='checkout-image d-flex justify-content-center'>
                      <img
                        src='https://media1.thehungryjpeg.com/thumbs2/ori_3745172_w8q654njoy3e5xgqvcl686uq9te0xviaeabbw6pg_green-cargo-container-vector-freight-shipping-container-concept-logistics-transportation-mock-up-front-and-back-sides-isolated-on-white-background-illustration.jpg'
                        alt='checkout'
                        className='d-block w-100 rounded shadow'
                        width='500'
                        height='500'
                        style={{
                          maxHeight: '500px',
                          objectFit: 'cover',
                          marginTop: '70px'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* delivery options end */}
        </div>

        {/* shipping section end */}
      </div>
    </>
  )
}

export default Ship
