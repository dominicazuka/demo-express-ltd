import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

const Locations = () => {
  // window scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Define media queries to check for different screen sizes
  const isTwoColumns = useMediaQuery({
    minWidth: '48rem',
    maxWidth: '61.9375rem'
  })
  const isThreeColumns = useMediaQuery({
    minWidth: '62rem',
    maxWidth: '74.9375rem'
  })
  const isFourColumns = useMediaQuery({ minWidth: '75rem' })

  // Determine the number of columns based on the current screen size
  let columnCount
  if (isFourColumns) {
    columnCount = 4 // 4 columns for screens 75rem and wider
  } else if (isThreeColumns) {
    columnCount = 3 // 3 columns for screens between 62rem and 74.9375rem
  } else if (isTwoColumns) {
    columnCount = 2 // 2 columns for screens between 48rem and 61.9375rem
  } else {
    columnCount = 1 // Default to 1 column if no media query matches
  }

  // List of African countries
  const africanCountries = [
    'Algeria',
    'Angola',
    'Benin',
    'Botswana',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cameroon',
    'Central African Republic',
    'Chad',
    'Comoros',
    'Democratic Republic of the Congo',
    'Djibouti',
    'Egypt',
    'Equatorial Guinea',
    'Eritrea',
    'Eswatini',
    'Ethiopia',
    'Gabon',
    'Gambia',
    'Ghana',
    'Guinea',
    'Guinea-Bissau',
    'Ivory Coast',
    'Kenya',
    'Lesotho',
    'Liberia',
    'Libya',
    'Madagascar',
    'Malawi',
    'Mali',
    'Mauritania',
    'Mauritius',
    'Morocco',
    'Mozambique',
    'Namibia',
    'Niger',
    'Nigeria',
    'Rwanda',
    'Sao Tome and Principe',
    'Senegal',
    'Seychelles',
    'Sierra Leone',
    'Somalia',
    'South Africa',
    'South Sudan',
    'Sudan',
    'Tanzania',
    'Togo',
    'Tunisia',
    'Uganda',
    'Zambia',
    'Zimbabwe'
  ]
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
              Our Locations
            </h1>
            <p
              className='text-white'
              style={{
                marginBottom: '60px'
              }}
            >
              Discover our various locations across the globe. Find the nearest
              office, store, or service center to you. Each location is equipped
              to provide you with the highest level of service and support.
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
                  Locations
                </a>
              </li>
            </ol>
          </nav>
          {/* breadcrumb end */}
        </div>
      </div>
      {/* Breadcrumb  end*/}

      {/* search bar start */}
      <div className='container-fluid mt-5'>
        <div className='row'>
          <div className='col-xl-12 pa-0 col-lg-12'>
            <div class='mt-2 faq-search-wrap bg-green-dark-3 rounded shadow'>
              <div class='container'>
                <h1 class='display-5 text-white mb-20'>
                  Discover all locations.
                </h1>

                <div class='input-group'>
                  <input
                    class='form-control form-control-lg filled-input bg-white'
                    placeholder='FIND LOCATIONS NEAR...'
                    type='search'
                  />
                  <button
                    className='btn btn-outline-secondary btn-warning'
                    type='button'
                  >
                    <i className='bi bi-search'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* search bar end */}

      <div className='container'>
        <div className='row'>
          {/* all locations page title */}
          <div className='col-lg-12'>
            {/* <!-- Page title --> */}
            <div className='my-5'>
              <h3 className='text-start justify-content-start ms-auto'>
                All Locations
              </h3>
              <hr />
            </div>
          </div>

          {/* continents */}
          <div className='col-lg-12 d-flex justify-content-center'>
            <div class='d-flex flex-wrap'>
              <ul
                class='list-unstyled'
                style={{ columnCount, marginLeft: '20px', marginRight: '20px' }}
              >
                <li class='mb-2'>
                  <Link
                    to='/location-within-country'
                    href='#Africa'
                    style={{
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      color: 'darkGreen'
                    }}
                  >
                    Africa
                  </Link>
                </li>
                <li class='mb-2'>
                  <a
                    href='#Asian & Indian Sub Continent'
                    style={{
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      color: 'darkGreen'
                    }}
                  >
                    Asian & Indian Sub Continent
                  </a>
                </li>
                <li class='mb-2'>
                  <a
                    href='#Caribbean'
                    style={{
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      color: 'darkGreen'
                    }}
                  >
                    Caribbean
                  </a>
                </li>
                <li class='mb-2'>
                  <a
                    href='#Central & South America'
                    style={{
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      color: 'darkGreen'
                    }}
                  >
                    Central & South America
                  </a>
                </li>
                <li class='mb-2'>
                  <a
                    href='#Europe'
                    style={{
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      color: 'darkGreen'
                    }}
                  >
                    Europe
                  </a>
                </li>
                <li class='mb-2'>
                  <a
                    href='#Middle East'
                    style={{
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      color: 'darkGreen'
                    }}
                  >
                    Middle East
                  </a>
                </li>
                <li class='mb-2'>
                  <a
                    href='#North America'
                    style={{
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      color: 'darkGreen'
                    }}
                  >
                    North America
                  </a>
                </li>
                <li class='mb-2'>
                  <a
                    href='#Ocean & Pacific'
                    style={{
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      color: 'darkGreen'
                    }}
                  >
                    Ocean & Pacific
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* africa page title */}
          <div className='col-lg-12'>
            {/* <!-- Page title --> */}
            <div className='my-5'>
              <h3 className='text-start justify-content-start ms-auto'>
                Africa
              </h3>
              <hr />
            </div>
          </div>

          {/* all countries - africa */}
          <div className='col-lg-12 d-flex justify-content-center'>
            <div class='d-flex flex-wrap'>
              <ul class='list-unstyled' id='Africa' style={{ columnCount }}>
                {africanCountries.map((country, index) => (
                  <li key={index} className='mb-2'>
                    <a
                      href={`#${country}`}
                      style={{
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        color: 'darkGreen'
                      }}
                    >
                      {country}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Locations
