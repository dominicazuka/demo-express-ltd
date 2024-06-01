import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const TrackMyOrder = () => {
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
              Track your order
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
                  Track Order
                </a>
              </li>
            </ol>
          </nav>
          {/* breadcrumb end */}
        </div>
      </div>
      {/* Breadcrumb  end*/}

    {/* register form start */}
    <main className='container mt-5'>
    <div className='p-2 shadow rounded'>
      <form
        className='row needs-validation'
        noValidate
        style={{ padding: '20px' }}
      >
        <div className='mt-3 col-md-12 col-lg-12'>
          <img class='img-fluid' src='https://i.imgur.com/Rzjor3M.png' />
          <h4 className='mb-3 mt-3'>Track Your Order</h4>
          <div className='row g-3'>
            {/* order id */}
            <div className='col-12 text-start justify-content-start ms-auto'>
              <label htmlFor='orderId' className='form-label'>
                Order ID
              </label>
              <div className='input-group has-validation'>
                <span className='input-group-text'>
                <i class="bi bi-card-checklist"></i>
                </span>
                <input
                  type='text'
                  className='form-control'
                  id='orderId'
                  placeholder='Enter order ID sent to your email'
                  required
                />
                <div className='invalid-feedback'>
                  Order ID is required.
                </div>
              </div>
            </div>
          </div>

          <hr className='my-4' />
          <button
            className='w-70 btn btn-success btn-lg shadow'
            type='submit'
          >
            Track
          </button>
        </div>
      </form>
    </div>
  </main>
  {/* register form ends */}
  </>
  )
}

export default TrackMyOrder
