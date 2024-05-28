import React from 'react'

const Breadcrumb = () => {
  return (
    <div className='container'>
      <nav aria-label='breadcrumb'>
        <ol className='breadcrumb breadcrumb-chevron p-2 bg-body-tertiary rounded-3'>
          <li className='breadcrumb-item'>
            <a className='link-body-emphasis' href='#'>
              <i className='bi bi-house-door-fill'></i>
              <span className='visually-hidden'>Home</span>
            </a>
          </li>
          <li className='breadcrumb-item'>
            <a
              className='link-body-emphasis fw-semibold text-decoration-none'
              href='#'
            >
              Library
            </a>
          </li>
          <li className='breadcrumb-item active' aria-current='page'>
            Data
          </li>
        </ol>
      </nav>
    </div>
  )
}

export default Breadcrumb
