import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PhoneInput from 'react-phone-number-input'
import { useMediaQuery } from 'react-responsive'

const MyAccount = () => {
  // window scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
              My Orders
            </h1>
            <p
              className='text-white'
              style={{
                marginBottom: '60px'
              }}
            >
             Here you can view and manage all your orders with ease. Track your order status, view order history, and stay updated with the latest information on your orders. 
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
                  My Orders
                </a>
              </li>
            </ol>
          </nav>
          {/* breadcrumb end */}
        </div>
      </div>
      {/* Breadcrumb  end*/}

      {/* my orders start */}
      <div className='MyOrders'>
        <div className='row'>
          {/* title */}
          <div className='col-lg-12 col-md-12 col-12 mt-5'>
            <div className='mb-3 text-start justify-content-start ms-auto'>
              <h3 className='mb-0 '>Orders</h3>
            </div>
          </div>
          {/* title end */}

          {/* analytics start */}
          <div class='row'>
            <div class='col-lg-3 col-md-6 col-12 mb-5'>
              <div class='card card-lift shadow'>
                <div class='card-body'>
                  <div class='d-flex align-items-center justify-content-between mb-5'>
                    <div class='icon-shape icon-md bg-warning-soft text-warning rounded-3'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        class='feather feather-users icon-xs'
                      >
                        <path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'></path>
                        <circle cx='9' cy='7' r='4'></circle>
                        <path d='M23 21v-2a4 4 0 0 0-3-3.87'></path>
                        <path d='M16 3.13a4 4 0 0 1 0 7.75'></path>
                      </svg>
                    </div>
                    <div>
                      <span class='text-success'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          class='feather feather-arrow-up-right icon-xs'
                        >
                          <line x1='7' y1='17' x2='17' y2='7'></line>
                          <polyline points='7 7 17 7 17 17'></polyline>
                        </svg>
                        +9.18 %
                      </span>
                    </div>
                  </div>
                  <div>
                    <span class='fw-semi-bold'>Clients</span>
                    <h3 class='mb-0 mt-1 fw-bold '>
                      <span class='counter-value' data-target='3156'>
                        3,156
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-lg-3 col-md-6 col-12 mb-5'>
              <div class='card card-lift shadow'>
                <div class='card-body'>
                  <div class='d-flex align-items-center justify-content-between mb-5'>
                    <div class='icon-shape icon-md bg-info-soft text-info rounded-3'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        class='feather feather-file-text icon-xs'
                      >
                        <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'></path>
                        <polyline points='14 2 14 8 20 8'></polyline>
                        <line x1='16' y1='13' x2='8' y2='13'></line>
                        <line x1='16' y1='17' x2='8' y2='17'></line>
                        <polyline points='10 9 9 9 8 9'></polyline>
                      </svg>
                    </div>
                    <div>
                      <span class='text-danger'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          class='feather feather-arrow-down-right icon-xs'
                        >
                          <line x1='7' y1='7' x2='17' y2='17'></line>
                          <polyline points='17 7 17 17 7 17'></polyline>
                        </svg>
                        -3.18 %
                      </span>
                    </div>
                  </div>
                  <div>
                    <span class='fw-semi-bold'>Invoices</span>
                    <h3 class='mb-0 mt-1 fw-bold '>
                      <span class='counter-value' data-target='167'>
                        167
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-lg-3 col-md-6 col-12 mb-5'>
              <div class='card card-lift shadow'>
                <div class='card-body'>
                  <div class='d-flex align-items-center justify-content-between mb-5'>
                    <div class='icon-shape icon-md bg-danger-soft text-danger rounded-3'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        class='feather feather-heart icon-xs'
                      >
                        <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'></path>
                      </svg>
                    </div>
                    <div>
                      <span class='text-success'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          class='feather feather-arrow-up-right icon-xs'
                        >
                          <line x1='7' y1='17' x2='17' y2='7'></line>
                          <polyline points='7 7 17 7 17 17'></polyline>
                        </svg>
                        +183
                      </span>
                    </div>
                  </div>
                  <div>
                    <span class='fw-semi-bold'>Sent Invoiced</span>
                    <h3 class='mb-0 mt-1 fw-bold '>
                      $
                      <span class='counter-value' data-target='41.56'>
                        41.56
                      </span>
                      k
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div class='col-lg-3 col-md-6 col-12 mb-5'>
              <div class='card card-lift shadow'>
                <div class='card-body'>
                  <div class='d-flex align-items-center justify-content-between mb-5'>
                    <div class='icon-shape icon-md bg-primary-soft text-primary rounded-3'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        class='feather feather-activity icon-xs'
                      >
                        <polyline points='22 12 18 12 15 21 9 3 6 12 2 12'></polyline>
                      </svg>
                    </div>
                    <div>
                      <span class='text-success'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          stroke-width='2'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          class='feather feather-arrow-up-right icon-xs'
                        >
                          <line x1='7' y1='17' x2='17' y2='7'></line>
                          <polyline points='7 7 17 7 17 17'></polyline>
                        </svg>
                        +6.18 %
                      </span>
                    </div>
                  </div>
                  <div>
                    <span class='fw-semi-bold'>Paid</span>
                    <h3 class='mb-0 mt-1 fw-bold '>
                      $
                      <span class='counter-value' data-target='33.16'>
                        33.16
                      </span>
                      k
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* analytics end */}

          {/* all orders start */}
          <div className='col-12'>
            <div className='card mb-4 shadow'>
              <div className='card-header'>
                <div className='row'>
                  <div className=' col-lg-3 col-md-6'>
                    <input
                      type='search'
                      className='form-control '
                      placeholder='Search Files...'
                    />
                  </div>
                  <div className='col-lg-4 col-md-6 d-flex align-items-center mt-3 mt-md-0'>
                    <label className='form-label me-2 mb-0'>Status</label>
                    <select
                      className='form-select'
                      aria-label='Default select example'
                    >
                      <option selected=''>Shipped</option>
                      <option value='1'>In Progress</option>
                      <option value='2'>Delivered</option>
                    </select>
                  </div>

                  <div className='col-lg-5 text-lg-end mt-3 mt-lg-0'>
                    <a href='#!' className='btn btn-success me-2'>
                      + Add New Order
                    </a>
                    <a href='#!' className='btn btn-light'>
                      Export
                    </a>
                  </div>
                </div>
              </div>
              <div className='card-body'>
                <div className='table-responsive table-card'>
                  <table
                    id='basic-datatable'
                    className='table table-striped data-table1 text-nowrap mb-0 table-centered table-hover'
                  >
                    <thead className='table-light'>
                      <tr>
                        <th className=' pe-0  '>
                          <div className='form-check'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value=''
                              id='checkAll'
                            />
                            <label
                              className='form-check-label'
                              for='checkAll'
                            ></label>
                          </div>
                        </th>
                        <th className='ps-1'>Order ID</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Payment Status</th>
                        <th>Total</th>
                        <th>Order Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className=' pe-0'>
                          <div className='form-check'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value=''
                              id='contactCheckbox2'
                            />
                            <label
                              className='form-check-label'
                              for='contactCheckbox2'
                            ></label>
                          </div>
                        </td>
                        <td className='ps-1'>
                          <Link to='/order-details' style={{ color: 'green' }}>
                            #DU00017
                          </Link>
                        </td>
                        <td>Harold Gonzalez </td>
                        <td>3 Oct, 2023 10:02 PM</td>
                        <td>
                          <span className='badge bg-success'>Paid</span>
                        </td>
                        <td>$120.00</td>
                        <td>
                          <span className='badge badge-info-soft'>Shipped</span>
                        </td>
                        <td>
                          <div className='dropdown'>
                            <a
                              className='btn btn-icon btn-sm btn-ghost rounded-circle'
                              href='#!'
                              role='button'
                              data-bs-toggle='dropdown'
                              aria-expanded='false'
                            >
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                stroke-width='2'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                className='feather feather-more-vertical icon-xs'
                              >
                                <circle cx='12' cy='12' r='1'></circle>
                                <circle cx='12' cy='5' r='1'></circle>
                                <circle cx='12' cy='19' r='1'></circle>
                              </svg>
                            </a>

                            <ul className='dropdown-menu' style={{}}>
                              <li>
                                <a
                                  className='dropdown-item d-flex align-items-center'
                                  href='#!'
                                >
                                  Action
                                </a>
                              </li>
                              <li>
                                <a
                                  className='dropdown-item d-flex align-items-center'
                                  href='#!'
                                >
                                  Another action
                                </a>
                              </li>
                              <li>
                                <a
                                  className='dropdown-item d-flex align-items-center'
                                  href='#!'
                                >
                                  Something else here
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className=' pe-0'>
                          <div className='form-check'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value=''
                              id='contactCheckbox3'
                            />
                            <label
                              className='form-check-label'
                              for='contactCheckbox3'
                            ></label>
                          </div>
                        </td>
                        <td className='ps-1'>
                          <a href='#!' style={{ color: 'green' }}>
                            #DU00016
                          </a>
                        </td>
                        <td>Anthony Anderson </td>
                        <td>19 August, 2023 6:22 PM</td>
                        <td>
                          <span className='badge bg-success'>Paid</span>
                        </td>
                        <td>$220.00</td>
                        <td>
                          <span className='badge badge-warning-soft text-warning'>
                            In Progress
                          </span>
                        </td>
                        <td>
                          <div className='dropdown'>
                            <a
                              className='btn btn-icon btn-sm btn-ghost rounded-circle'
                              href='#!'
                              role='button'
                              data-bs-toggle='dropdown'
                              aria-expanded='false'
                            >
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                stroke-width='2'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                className='feather feather-more-vertical icon-xs'
                              >
                                <circle cx='12' cy='12' r='1'></circle>
                                <circle cx='12' cy='5' r='1'></circle>
                                <circle cx='12' cy='19' r='1'></circle>
                              </svg>
                            </a>

                            <ul className='dropdown-menu'>
                              <li>
                                <a
                                  className='dropdown-item d-flex align-items-center'
                                  href='#!'
                                >
                                  Action
                                </a>
                              </li>
                              <li>
                                <a
                                  className='dropdown-item d-flex align-items-center'
                                  href='#!'
                                >
                                  Another action
                                </a>
                              </li>
                              <li>
                                <a
                                  className='dropdown-item d-flex align-items-center'
                                  href='#!'
                                >
                                  Something else here
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className=' pe-0'>
                          <div className='form-check'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value=''
                              id='contactCheckbox4'
                            />
                            <label
                              className='form-check-label'
                              for='contactCheckbox4'
                            ></label>
                          </div>
                        </td>
                        <td className='ps-1'>
                          <a href='#!' style={{ color: 'green' }}>
                            #DU00015
                          </a>
                        </td>
                        <td>Gary Faulkner</td>
                        <td>8 August, 2023 8:13 AM</td>
                        <td>
                          <span className='badge bg-success'>Paid</span>
                        </td>
                        <td>$113.42</td>
                        <td>
                          <span className='badge badge-info-soft'>
                            In Shipped
                          </span>
                        </td>
                        <td>
                          <div className='dropdown'>
                            <a
                              className='btn btn-icon btn-sm btn-ghost rounded-circle'
                              href='#!'
                              role='button'
                              data-bs-toggle='dropdown'
                              aria-expanded='false'
                            >
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                stroke-width='2'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                className='feather feather-more-vertical icon-xs'
                              >
                                <circle cx='12' cy='12' r='1'></circle>
                                <circle cx='12' cy='5' r='1'></circle>
                                <circle cx='12' cy='19' r='1'></circle>
                              </svg>
                            </a>

                            <ul className='dropdown-menu'>
                              <li>
                                <a
                                  className='dropdown-item d-flex align-items-center'
                                  href='#!'
                                >
                                  Action
                                </a>
                              </li>
                              <li>
                                <a
                                  className='dropdown-item d-flex align-items-center'
                                  href='#!'
                                >
                                  Another action
                                </a>
                              </li>
                              <li>
                                <a
                                  className='dropdown-item d-flex align-items-center'
                                  href='#!'
                                >
                                  Something else here
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className=' pe-0'>
                          <div className='form-check'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value=''
                              id='contactCheckbox5'
                            />
                            <label
                              className='form-check-label'
                              for='contactCheckbox5'
                            ></label>
                          </div>
                        </td>
                        <td className='ps-1'>
                          <a href='#!' style={{ color: 'green' }}>
                            #DU00014
                          </a>
                        </td>
                        <td>Steve Nelson</td>
                        <td>26 July, 2023 10:19 AM</td>
                        <td>
                          <span className='badge bg-success'>Paid</span>
                        </td>
                        <td>$425.31</td>
                        <td>
                          <span className='badge badge-success-soft text-success'>
                            Delivered
                          </span>
                        </td>
                        <td>
                          <div className='dropdown'>
                            <a
                              className='btn btn-icon btn-sm btn-ghost rounded-circle'
                              href='#!'
                              role='button'
                              data-bs-toggle='dropdown'
                              aria-expanded='false'
                            >
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                stroke-width='2'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                className='feather feather-more-vertical icon-xs'
                              >
                                <circle cx='12' cy='12' r='1'></circle>
                                <circle cx='12' cy='5' r='1'></circle>
                                <circle cx='12' cy='19' r='1'></circle>
                              </svg>
                            </a>

                            <ul className='dropdown-menu'>
                              <li>
                                <a
                                  className='dropdown-item d-flex align-items-center'
                                  href='#!'
                                >
                                  Action
                                </a>
                              </li>
                              <li>
                                <a
                                  className='dropdown-item d-flex align-items-center'
                                  href='#!'
                                >
                                  Another action
                                </a>
                              </li>
                              <li>
                                <a
                                  className='dropdown-item d-flex align-items-center'
                                  href='#!'
                                >
                                  Something else here
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className=' pe-0'>
                          <div className='form-check'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value=''
                              id='contactCheckbox6'
                            />
                            <label
                              className='form-check-label'
                              for='contactCheckbox6'
                            ></label>
                          </div>
                        </td>
                        <td className='ps-1'>
                          <a href='#!' style={{ color: 'green' }}>
                            #DU00013
                          </a>
                        </td>
                        <td>Kimberly Sullivan</td>
                        <td>18 July, 2023 9:52 PM</td>
                        <td>
                          <span className='badge bg-secondary'>Refunded</span>
                        </td>
                        <td>$113.00</td>
                        <td>
                          <span className='badge badge-success-soft text-success'>
                            Delivered
                          </span>
                        </td>
                        <td>
                          <div className='dropdown'>
                            <a
                              className='btn btn-icon btn-sm btn-ghost rounded-circle'
                              href='#!'
                              role='button'
                              data-bs-toggle='dropdown'
                              aria-expanded='false'
                            >
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                stroke-width='2'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                className='feather feather-more-vertical icon-xs'
                              >
                                <circle cx='12' cy='12' r='1'></circle>
                                <circle cx='12' cy='5' r='1'></circle>
                                <circle cx='12' cy='19' r='1'></circle>
                              </svg>
                            </a>

                            <ul className='dropdown-menu'>
                              <li>
                                <a
                                  className='dropdown-item d-flex align-items-center'
                                  href='#!'
                                >
                                  Action
                                </a>
                              </li>
                              <li>
                                <a
                                  className='dropdown-item d-flex align-items-center'
                                  href='#!'
                                >
                                  Another action
                                </a>
                              </li>
                              <li>
                                <a
                                  className='dropdown-item d-flex align-items-center'
                                  href='#!'
                                >
                                  Something else here
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className=' pe-0'>
                          <div className='form-check'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value=''
                              id='contactCheckbox7'
                            />
                            <label
                              className='form-check-label'
                              for='contactCheckbox7'
                            ></label>
                          </div>
                        </td>
                        <td className='ps-1'>
                          <a href='#!' style={{ color: 'green' }}>
                            #DU00012
                          </a>
                        </td>
                        <td>Susan Pugh</td>
                        <td>2 July, 2023 8:00 AM</td>
                        <td>
                          <span className='badge bg-success'>Paid</span>
                        </td>
                        <td>$831.99</td>
                        <td>
                          <span className='badge badge-success-soft text-success'>
                            Delivered
                          </span>
                        </td>
                        <td>
                          <div className='dropdown'>
                            <a
                              className='btn btn-icon btn-sm btn-ghost rounded-circle'
                              href='#!'
                              role='button'
                              data-bs-toggle='dropdown'
                              aria-expanded='false'
                            >
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                stroke-width='2'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                className='feather feather-more-vertical icon-xs'
                              >
                                <circle cx='12' cy='12' r='1'></circle>
                                <circle cx='12' cy='5' r='1'></circle>
                                <circle cx='12' cy='19' r='1'></circle>
                              </svg>
                            </a>

                            <ul className='dropdown-menu'>
                              <li>
                                <a
                                  className='dropdown-item d-flex align-items-center'
                                  href='#!'
                                >
                                  Action
                                </a>
                              </li>
                              <li>
                                <a
                                  className='dropdown-item d-flex align-items-center'
                                  href='#!'
                                >
                                  Another action
                                </a>
                              </li>
                              <li>
                                <a
                                  className='dropdown-item d-flex align-items-center'
                                  href='#!'
                                >
                                  Something else here
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className=' pe-0'>
                          <div className='form-check'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value=''
                              id='contactCheckbox8'
                            />
                            <label
                              className='form-check-label'
                              for='contactCheckbox8'
                            ></label>
                          </div>
                        </td>
                        <td className='ps-1'>
                          <a href='#!' style={{ color: 'green' }}>
                            #DU00011
                          </a>
                        </td>
                        <td>Elliott Potts</td>
                        <td>23 June, 2023 8:14 PM</td>
                        <td>
                          <span className='badge bg-danger'>Cancel</span>
                        </td>
                        <td>$113.00</td>
                        <td>
                          <span className='badge badge-success-soft text-success'>
                            Delivered
                          </span>
                        </td>
                        <td>
                          <div className='dropdown'>
                            <a
                              className='btn btn-icon btn-sm btn-ghost rounded-circle'
                              href='#!'
                              role='button'
                              data-bs-toggle='dropdown'
                              aria-expanded='false'
                            >
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                stroke-width='2'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                className='feather feather-more-vertical icon-xs'
                              >
                                <circle cx='12' cy='12' r='1'></circle>
                                <circle cx='12' cy='5' r='1'></circle>
                                <circle cx='12' cy='19' r='1'></circle>
                              </svg>
                            </a>

                            <ul className='dropdown-menu'>
                              <li>
                                <a
                                  className='dropdown-item d-flex align-items-center'
                                  href='#!'
                                >
                                  Action
                                </a>
                              </li>
                              <li>
                                <a
                                  className='dropdown-item d-flex align-items-center'
                                  href='#!'
                                >
                                  Another action
                                </a>
                              </li>
                              <li>
                                <a
                                  className='dropdown-item d-flex align-items-center'
                                  href='#!'
                                >
                                  Something else here
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className=' pe-0'>
                          <div className='form-check'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value=''
                              id='contactCheckbox9'
                            />
                            <label
                              className='form-check-label'
                              for='contactCheckbox9'
                            ></label>
                          </div>
                        </td>
                        <td className='ps-1'>
                          <a href='#!' style={{ color: 'green' }}>
                            #DU00010
                          </a>
                        </td>
                        <td>Richard Beaudry</td>
                        <td>13 June, 2023 4:12 PM</td>
                        <td>
                          <span className='badge bg-success'>Paid</span>
                        </td>
                        <td>$582.99</td>
                        <td>
                          <span className='badge badge-success-soft text-success'>
                            Delivered
                          </span>
                        </td>
                        <td>
                          <div className='dropdown'>
                            <a
                              className='btn btn-icon btn-sm btn-ghost rounded-circle'
                              href='#!'
                              role='button'
                              data-bs-toggle='dropdown'
                              aria-expanded='false'
                            >
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                stroke-width='2'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                className='feather feather-more-vertical icon-xs'
                              >
                                <circle cx='12' cy='12' r='1'></circle>
                                <circle cx='12' cy='5' r='1'></circle>
                                <circle cx='12' cy='19' r='1'></circle>
                              </svg>
                            </a>

                            <ul className='dropdown-menu'>
                              <li>
                                <a
                                  className='dropdown-item d-flex align-items-center'
                                  href='#!'
                                >
                                  Action
                                </a>
                              </li>
                              <li>
                                <a
                                  className='dropdown-item d-flex align-items-center'
                                  href='#!'
                                >
                                  Another action
                                </a>
                              </li>
                              <li>
                                <a
                                  className='dropdown-item d-flex align-items-center'
                                  href='#!'
                                >
                                  Something else here
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className=' pe-0'>
                          <div className='form-check'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value=''
                              id='contactCheckbox10'
                            />
                            <label
                              className='form-check-label'
                              for='contactCheckbox10'
                            ></label>
                          </div>
                        </td>
                        <td className='ps-1'>
                          <a href='#!' style={{ color: 'green' }}>
                            #DU00009
                          </a>
                        </td>
                        <td>Henry Saxton</td>
                        <td>5 May, 2023 12:02 PM</td>
                        <td>
                          <span className='badge bg-success'>Paid</span>
                        </td>
                        <td>$00.00</td>
                        <td>
                          <span className='badge badge-success-soft text-success'>
                            Delivered
                          </span>
                        </td>
                        <td>
                          <div className='dropdown'>
                            <a
                              className='btn btn-icon btn-sm btn-ghost rounded-circle'
                              href='#!'
                              role='button'
                              data-bs-toggle='dropdown'
                              aria-expanded='false'
                            >
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                stroke-width='2'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                className='feather feather-more-vertical icon-xs'
                              >
                                <circle cx='12' cy='12' r='1'></circle>
                                <circle cx='12' cy='5' r='1'></circle>
                                <circle cx='12' cy='19' r='1'></circle>
                              </svg>
                            </a>

                            <ul className='dropdown-menu'>
                              <li>
                                <a
                                  className='dropdown-item d-flex align-items-center'
                                  href='#!'
                                >
                                  Action
                                </a>
                              </li>
                              <li>
                                <a
                                  className='dropdown-item d-flex align-items-center'
                                  href='#!'
                                >
                                  Another action
                                </a>
                              </li>
                              <li>
                                <a
                                  className='dropdown-item d-flex align-items-center'
                                  href='#!'
                                >
                                  Something else here
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className=' pe-0'>
                          <div className='form-check'>
                            <input
                              className='form-check-input'
                              type='checkbox'
                              value=''
                              id='contactCheckbox11'
                            />
                            <label
                              className='form-check-label'
                              for='contactCheckbox11'
                            ></label>
                          </div>
                        </td>
                        <td className='ps-1'>
                          <a href='#!' style={{ color: 'green' }}>
                            #DU00008
                          </a>
                        </td>
                        <td>Juanita Diener</td>
                        <td>4 April, 2023 5:02 PM</td>
                        <td>
                          <span className='badge bg-success'>Paid</span>
                        </td>
                        <td>$25.23</td>
                        <td>
                          <span className='badge badge-success-soft text-success'>
                            Delivered
                          </span>
                        </td>
                        <td>
                          <div className='dropdown'>
                            <a
                              className='btn btn-icon btn-sm btn-ghost rounded-circle'
                              href='#!'
                              role='button'
                              data-bs-toggle='dropdown'
                              aria-expanded='false'
                            >
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width='24'
                                height='24'
                                viewBox='0 0 24 24'
                                fill='none'
                                stroke='currentColor'
                                stroke-width='2'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                className='feather feather-more-vertical icon-xs'
                              >
                                <circle cx='12' cy='12' r='1'></circle>
                                <circle cx='12' cy='5' r='1'></circle>
                                <circle cx='12' cy='19' r='1'></circle>
                              </svg>
                            </a>

                            <ul className='dropdown-menu'>
                              <li>
                                <a
                                  className='dropdown-item d-flex align-items-center'
                                  href='#!'
                                >
                                  Action
                                </a>
                              </li>
                              <li>
                                <a
                                  className='dropdown-item d-flex align-items-center'
                                  href='#!'
                                >
                                  Another action
                                </a>
                              </li>
                              <li>
                                <a
                                  className='dropdown-item d-flex align-items-center'
                                  href='#!'
                                >
                                  Something else here
                                </a>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='card-footer d-md-flex justify-content-between align-items-center'>
                <span>Showing 1 to 8 of 12 entries</span>
                <nav className='mt-2 mt-md-0'>
                  <ul className='pagination mb-0'>
                    <li className='page-item'>
                      <a className='page-link' href='#!'>
                        Previous
                      </a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link active' href='#!'>
                        1
                      </a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link' href='#!'>
                        2
                      </a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link' href='#!'>
                        3
                      </a>
                    </li>
                    <li className='page-item'>
                      <a className='page-link' href='#!'>
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          {/* all orders end */}
        </div>
      </div>
      {/* my orders end */}
    </>
  )
}

export default MyAccount
