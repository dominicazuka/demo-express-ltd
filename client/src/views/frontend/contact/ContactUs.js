import React, { useEffect } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Link } from 'react-router-dom'

const ContactUs = () => {
  // window scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
              // Add 'was-validated' className to show validation messages
              form.classList.add('was-validated')
              // Highlight the required fields with the 'is-invalid' className
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
              Contact Us
            </h1>
            <p
              className='text-white'
              style={{
                marginBottom: '60px'
              }}
            >
              Reach out to us through our contact form, email, or phone, and
              we’ll get back to you as soon as possible. Your satisfaction is
              our priority, and we look forward to connecting with you.
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
                  Contact Us
                </a>
              </li>
            </ol>
          </nav>
          {/* breadcrumb end */}
        </div>
      </div>
      {/* Breadcrumb  end*/}

      {/* columns start */}
      <div className='container px-4 py-5' id='featured-3'>
        <h2 className='pb-2 border-bottom'>Contact Us</h2>
        <div className='row g-4 py-5 row-cols-1 row-cols-lg-3'>
          <div className='feature col'>
            <div className='feature-icon d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-2 mb-3 rounded-3 p-2 shadow'>
              <i className='bi bi-envelope-at'></i>
            </div>
            <h3 className='fs-2 text-body-emphasis'>Contact Us</h3>
            <p style={{ textAlign: 'justify' }}>
              Our team is online: Mon – Fri: 08:00am – 5:00pm Saturday: 08:00–
              12:00 noon Sunday & Public Holidays : Closed
            </p>
            <Link
              to='/'
              className='icon-link'
              style={{ color: 'green', textDecorationColor: 'green' }}
            >
              CHAT NOW
              <i className='bi bi-chevron-double-right'></i>
            </Link>
          </div>
          <div className='feature col'>
            <div className='feature-icon d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-2 mb-3 rounded-3 p-2 shadow'>
              <i className='bi bi-envelope-at'></i>
            </div>
            <h3 className='fs-2 text-body-emphasis'>Write to us</h3>
             <p style={{ textAlign: 'justify' }}>
              Reach the right person the first time, our contact forms will help
              you.
            </p>
            <a
              href='#contactForm'
              className='icon-link'
              style={{ color: 'green', textDecorationColor: 'green' }}
            >
              GO TO FORM
              <i className='bi bi-chevron-double-right'></i>
            </a>
          </div>
          <div className='feature col'>
            <div className='feature-icon d-inline-flex align-items-center justify-content-center text-bg-success bg-gradient fs-2 mb-3 rounded-3 p-2 shadow'>
              <i className='bi bi-telephone-inbound-fill'></i>
            </div>
            <h3 className='fs-2 text-body-emphasis'>Call Us</h3>
            <p>Call us with enquiries</p>
            <a
              href='#contactNumbers'
              className='icon-link'
              style={{ color: 'green', textDecorationColor: 'green' }}
            >
              SEE PHONE NUMBERS
              <i className='bi bi-chevron-double-right'></i>
            </a>
          </div>
        </div>
      </div>
      {/* columns end */}

      {/* contact form */}
      <div className='container'>
        {/* <!-- Page title --> */}
        <div className='my-5'>
          <h3 className='text-start justify-content-start ms-auto'>
            Contact form
          </h3>
          <p className='text-start justify-content-start ms-auto'>
            To help us help you, take a few moments to fill out the details of
            your query and we’ll make sure to get back to you with personalized
            feedback.
          </p>
          <hr />
        </div>
        <div className='row'>
          <form
            className='row needs-validation'
            noValidate
            style={{ padding: '20px' }}
            id='contactForm'
          >
            <div className=' col-md-12 col-lg-12'>
              <div className='row g-3'>
                {/* topic */}
                <div className='col-12 has-validation text-start justify-content-start ms-auto'>
                  <label htmlFor='topic' className='form-label'>
                    Which topic do you need help with?
                  </label>
                  <span style={{ marginLeft: '10px' }}>
                    <i className='bi bi-card-checklist'></i>
                  </span>
                  <select className='form-select' id='topic' required>
                    <option selected disabled value=''>
                      Select Topic
                    </option>
                    <option value='tracking-shipment'>
                      Tracking a shipment
                    </option>
                    <option value='customs-clearance'>Customs clearance</option>
                    <option value='pickups-returns'>Pickups and returns</option>
                    <option value='invoice-inquiries'>
                      Invoice inquiries and payments
                    </option>
                    <option value='rates-transit-times'>
                      Rates and transit times
                    </option>
                    <option value='account-inquiries'>Account inquiries</option>
                    <option value='packaging-supplies'>
                      Packaging supplies
                    </option>
                    <option value='claims-refunds'>Claims and refunds</option>
                    <option value='demo-express-ltd-services'>
                      Demo Express LTD services
                    </option>
                    <option value='software-solutions'>
                      Software solutions
                    </option>
                    <option value='general-inquiry'>General inquiry</option>
                    <option value='general-feedback'>General feedback</option>
                  </select>
                  <div className='invalid-feedback'>
                    Please select a valid topic.
                  </div>
                </div>

                {/* userIntention */}
                <div className='col-12 has-validation text-start justify-content-start ms-auto'>
                  <label htmlFor='userIntention' className='form-label'>
                    What would you like to do?
                  </label>
                  <span style={{ marginLeft: '10px' }}>
                    <i className='bi bi-activity'></i>
                  </span>
                  <div className='my-3'>
                    <div className='form-check'>
                      <input
                        id='generalFeedback'
                        name='generalFeedback'
                        type='radio'
                        className='form-check-input'
                        required
                      />
                      <label className='form-check-label' for='generalFeedback'>
                        Give general feedback
                      </label>
                    </div>
                  </div>
                  <div className='invalid-feedback'>
                    Please select a valid intention.
                  </div>
                </div>

                {/* feedbackType */}
                <div className='col-12 has-validation text-start justify-content-start ms-auto'>
                  <label htmlFor='feedbackType' className='form-label'>
                    Tell us a bit more:
                  </label>
                  <span style={{ marginLeft: '10px' }}>
                    <i className='bi bi-megaphone'></i>
                  </span>
                  <select className='form-select' id='feedbackType' required>
                    <option selected disabled value=''>
                      Select Feedback Type
                    </option>
                    <option value='website-feedback'>
                      I want to give feedback on your website
                    </option>
                    <option value='service-feedback'>
                      I want to give feedback on your services
                    </option>
                    <option value='employee-compliment'>
                      I want to offer compliments for your employee
                    </option>
                  </select>
                  <div className='invalid-feedback'>
                    Please select a valid topic.
                  </div>
                </div>

                {/* userContactingAs */}
                <div className='col-12 has-validation text-start justify-content-start ms-auto'>
                  <label htmlFor='userContactingAs' className='form-label'>
                    I am contacting you as the
                  </label>
                  <span style={{ marginLeft: '10px' }}>
                    <i className='bi bi-person-lines-fill'></i>
                  </span>
                  <select
                    id='userContactingAs'
                    name='userContactingAs'
                    className='form-select'
                    required
                  >
                    <option value='' disabled selected>
                      Select your role
                    </option>
                    <option value='sender'>Sender</option>
                    <option value='receiver'>Receiver</option>
                    <option value='someone-else'>Someone else</option>
                  </select>
                  <div className='invalid-feedback'>
                    Please select your role.
                  </div>
                </div>

                {/* name */}
                <div className='col-12 text-start justify-content-start ms-auto'>
                  <label htmlFor='name' className='form-label'>
                    Your Name
                  </label>
                  <div className='input-group has-validation'>
                    <span className='input-group-text'>
                      <i className='bi bi-person-bounding-box'></i>
                    </span>
                    <input
                      type='text'
                      className='form-control'
                      id='name'
                      placeholder='Full Name'
                      required
                    />
                    <div className='invalid-feedback'>
                      Valid full name is required.
                    </div>
                  </div>
                </div>

                {/* email */}
                <div className='col-12 text-start justify-content-start ms-auto'>
                  <label htmlFor='email' className='form-label'>
                    Email Address
                  </label>
                  <div className='input-group has-validation'>
                    <span className='input-group-text'>
                      <i className='bi bi-envelope-at'></i>
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
                      handlePhoneNumberInput(e)
                    }}
                    required
                  />
                  <div className='invalid-feedback'>
                    Valid phone number is required.
                  </div>
                </div>

                {/* tracking ID - optional */}
                <div className='col-12 text-start justify-content-start ms-auto'>
                  <label htmlFor='trackingId' className='form-label'>
                    Tracking ID
                  </label>
                  <div className='input-group has-validation'>
                    <span className='input-group-text'>
                      <i className='bi bi-truck'></i>
                    </span>
                    <input
                      type='text'
                      className='form-control'
                      id='trackingId'
                      placeholder='Enter your tracking ID (optional)'
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
                      <i className='bi bi-send'></i>
                    </span>
                    <input
                      type='text'
                      className='form-control'
                      id='address'
                      placeholder='Address'
                      required
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
                      <i className='bi bi-upc'></i>
                    </span>
                    <input
                      type='text'
                      className='form-control'
                      id='postalCode'
                      placeholder='(optional)'
                    />
                  </div>
                </div>

                {/* country, state, city */}
                <div className='col-md-4 has-validation text-start justify-content-start ms-auto'>
                  <label htmlFor='country' className='form-label'>
                    Country
                  </label>
                  <span style={{ marginLeft: '10px' }}>
                    <i className='bi bi-globe-asia-australia'></i>
                  </span>
                  <select className='form-select' id='country' required>
                    <option value=''>Choose...</option>
                    <option>United States</option>
                  </select>
                  <div className='invalid-feedback'>
                    Please select a valid country.
                  </div>
                </div>

                <div className='col-md-4 has-validation text-start justify-content-start ms-auto'>
                  <label htmlFor='state' className='form-label'>
                    State
                  </label>
                  <span style={{ marginLeft: '10px' }}>
                    <i className='bi bi-map'></i>
                  </span>
                  <select className='form-select' id='state' required>
                    <option value=''>Choose...</option>
                    <option>Califonia</option>
                  </select>
                  <div className='invalid-feedback'>
                    Please select a valid state.
                  </div>
                </div>

                <div className='col-md-4 has-validation text-start justify-content-start ms-auto'>
                  <label htmlFor='city' className='form-label'>
                    City
                  </label>
                  <span style={{ marginLeft: '10px' }}>
                    <i className='bi bi-radar'></i>
                  </span>
                  <select className='form-select' id='city' required>
                    <option value=''>Choose...</option>
                    <option>City 1</option>
                  </select>
                  <div className='invalid-feedback'>
                    Please select a valid city.
                  </div>
                </div>

                {/* message */}
                <div className='col-12 has-validation text-start justify-content-start ms-auto'>
                  <label htmlFor='message' className='form-label'>
                    Message
                  </label>
                  <div className='input-group'>
                    <span className='input-group-text'>
                      <i className='bi bi-journal-check'></i>
                    </span>
                    <textarea
                      className='form-control'
                      id='message'
                      placeholder='Your message'
                      rows='5'
                      required
                    />
                    <div className='invalid-feedback'>
                      Please enter your message.
                    </div>
                  </div>
                </div>
              </div>

              <hr className='my-4' />

              <button
                className='w-70 btn btn-success btn-lg shadow'
                type='submit'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* contact number */}
      <div className='d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center' id='contactNumbers'>
        <div className='list-group list-group-checkable d-grid gap-2 border-0'>
          <input
            className='list-group-item-check pe-none'
            type='radio'
            name='listGroupCheckableRadios'
            id='listGroupCheckableRadios1'
            value=''
            checked
          />
          <label
            className='list-group-item rounded-3 py-3 shadow'
            for='listGroupCheckableRadios1'
          >
            <i className='bi bi-phone-vibrate' style={{ marginRight: '10px' }}></i>
            Our phone numbers
            <span className='d-block small opacity-30'>
                7080601198 | 70806011784
            </span>
          </label>
          <input className="list-group-item-check pe-none" type="radio" name="listGroupCheckableRadios" id="listGroupCheckableRadios2" value=""></input>
        </div>
      </div>
      
    </>
  )
}

export default ContactUs
