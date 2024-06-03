import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const LocationWithinCountry = () => {
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
              Our Locations - Africa
            </h1>
            <p
              className='text-white'
              style={{
                marginBottom: '60px'
              }}
            >
              We offer reliable shipping and courier services to meet your
              needs.
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
                  Locations - Africa
                </a>
              </li>
            </ol>
          </nav>
          {/* breadcrumb end */}
        </div>
      </div>
      {/* Breadcrumb  end*/}

      <div className='mt-5 container'>
        <div className='row'>
          <div className='col-lg-12'>
            <card className='card shadow p-1'>
              <iframe
                className='card-img-top'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2038.8869354068509!2d15.21545545625287!3d59.26803797168206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465c14e4a4c8e193%3A0xf18609c2d9ee261f!2sLa%20Santa%20Maria%20Tattoos%20%26%20Art!5e0!3m2!1ssv!2sse!4v1568297791174!5m2!1ssv!2sse'
                frameborder='0'
                style={{ border: '0' }}
                title='google-location'
                allowFullScreen
              ></iframe>
              <div className='card-body'>
                <table>
                  <tr>
                    <td>
                      <i className='fas fa-map-marker-alt'></i>
                    </td>
                    <td>
                      <address>
                        La Santa Maria Tattoo & Art <br />
                        Rudbecksgatan 38
                        <br />
                        702 23 Örebro
                      </address>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className='far fa-envelope' style={{marginRight: '10px'}}></i>
                    </td>
                    <td>hannaelina123@gmail.com</td>
                  </tr>
                  <tr>
                    <td>
                      <i className='fas fa-phone'></i>
                    </td>
                    <td>+46 (0) 722 220 524</td>
                  </tr>
                  <tr>
                    <td>
                      <i className='fas fa-clock'></i>
                    </td>
                    <td>Closed. Opens at 08:00</td>
                  </tr>
                </table>
              </div>
            </card>
          </div>
        </div>
      </div>
    </>
  )
}

export default LocationWithinCountry
