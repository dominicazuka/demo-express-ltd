import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PhoneInput from 'react-phone-number-input'

const Ship = () => {
  //   const [formSubmitted, setFormSubmitted] = useState(false)

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
    <div className='container'>
      {/* Breadcrumb */}
      <nav
        aria-label='breadcrumb'
        className='mt-3'
        // style={{ marginTop: '-90px' }}
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
              Ship
            </a>
          </li>
        </ol>
      </nav>
      {/* breadcrumb end */}

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
          controls. Each required form group has a validation state that can be
          triggered by attempting to submit the form without completing it.
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
                          <label htmlFor='senderCompany' className='form-label'>
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
                          <label htmlFor='senderAddress' className='form-label'>
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
                          <label htmlFor='senderCountry' className='form-label'>
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
                              <i class="bi bi-envelope-at"></i>
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
                              <i class="bi bi-envelope-at"></i>
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
                          <label htmlFor='receiverName' className='form-label'>
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
                          <label htmlFor='receiverCompany' className='form-label'>
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
                          <label htmlFor='receiverAddress' className='form-label'>
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

                        {/* country, state, city */}
                        <div className='col-md-4 has-validation text-start justify-content-start ms-auto'>
                          <label htmlFor='receiverCountry' className='form-label'>
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
                          <label htmlFor='receiverState' className='form-label'>
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
                          <label htmlFor='receiverCity' className='form-label'>
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

                        {/* phone number */}
                        <div className='has-validation text-start justify-content-start ms-auto'>
                          <label htmlFor='receiverPhone' className='form-label'>
                            Reciever Phone Number
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
                          <label htmlFor='receiverEmail' className='form-label'>
                           Receiver Email Address
                          </label>
                          <div className='input-group has-validation'>
                            <span className='input-group-text'>
                              <i class="bi bi-envelope-at"></i>
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
                          <label htmlFor='receiverTaxNo' className='form-label'>
                            Receiver VAT/Tax ID
                          </label>
                          <div className='input-group'>
                            <span className='input-group-text'>
                              <i class="bi bi-envelope-at"></i>
                            </span>
                            <input
                              type='text'
                              className='form-control'
                              id='receiverTaxNo'
                              placeholder='Used in Customs Declaration section (optional)'
                            />
                          </div>
                        </div>
                      </div>

                      <hr className='my-4' />

                      <button
                        className='w-100 btn btn-primary btn-lg'
                        type='submit'
                      >
                        Continue to checkout
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

        <div class='accordion-item'>
          <h2 class='accordion-header' id='panelsStayOpen-headingTwo'>
            <button
              class='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#panelsStayOpen-collapseTwo'
              aria-expanded='false'
              aria-controls='panelsStayOpen-collapseTwo'
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id='panelsStayOpen-collapseTwo'
            class='accordion-collapse collapse'
            aria-labelledby='panelsStayOpen-headingTwo'
          >
            <div class='accordion-body'>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class='accordion-item'>
          <h2 class='accordion-header' id='panelsStayOpen-headingThree'>
            <button
              class='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#panelsStayOpen-collapseThree'
              aria-expanded='false'
              aria-controls='panelsStayOpen-collapseThree'
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id='panelsStayOpen-collapseThree'
            class='accordion-collapse collapse'
            aria-labelledby='panelsStayOpen-headingThree'
          >
            <div class='accordion-body'>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>

      {/* shipping section end */}
    </div>
  )
}

export default Ship
