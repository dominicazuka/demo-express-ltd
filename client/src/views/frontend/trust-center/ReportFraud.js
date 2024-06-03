import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ReportFraud = () => {
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
              Report Fraudulent Activities
            </h1>
            <p
              className='text-white'
              style={{
                marginBottom: '60px'
              }}
            >
              Help us maintain a secure and trustworthy environment by reporting
              any suspicious or fraudulent activities. Your vigilance is crucial
              in safeguarding our community and ensuring the integrity of our
              services.
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
                  Report Fraud
                </a>
              </li>
            </ol>
          </nav>
          {/* breadcrumb end */}
        </div>
      </div>
      {/* Breadcrumb  end*/}

      <div className='container'>
        <div className='row'>
          {/* <!-- title --> */}
          <div className='col-lg-12'>
            <div className='my-5'>
              <h3 className='text-start justify-content-start ms-auto'>
                How to Recognize Fraud
              </h3>
              <hr />
            </div>
          </div>
          {/* text */}
          <div className='col-lg-12'>
             <p style={{ textAlign: 'justify' }}>
              Demo Express LTD does not request, via unsolicited call, mail,
              text or email, payment or personal information in return for goods
              in transit or in Demo Express LTD custody. If you receive any of
              these or similar communications, do not reply or cooperate with
              the sender. Demo Express LTD is not associated, affiliated with or
              authorized to act on behalf of any national/local law enforcement
              authorities. If any individual, on the pretext of being a Demo
              Express LTD customer care team member is directing/ connecting you
              with any of national/local law enforcement authorities in respect
              of any shipment containing illegal items in your name, do not
              share any personal information. If your interaction with such
              requests resulted in financial loss, you should contact your bank
              immediately. Consider contacting the local law enforcement
              authorities within the vicinity.
            </p>
          </div>

          {/* <!-- title --> */}
          <div className='col-lg-12'>
            <div className='my-5'>
              <h3 className='text-start justify-content-start ms-auto'>
                Common Warning Signs of Mail, Text or Online Scams
              </h3>
              <hr />
            </div>
          </div>
          {/* text */}
          <div className='col-lg-6'>
            <i
              className='bi bi-exclamation-triangle'
              style={{ fontSize: '120px', color: '#006400' }}
            ></i>
          </div>
          {/* text */}
          <div className='col-lg-6 text-align-left'>
            <ul style={{listStylePosition: 'inside'}}>
              <li>
                <span className='fxg-font-size-16'>
                  Unexpected requests for money in return for delivery of a
                  package, often with a sense of urgency.
                </span>
              </li>
              <li>
                <span className='fxg-font-size-16'>
                  Requests for personal and/or financial information.
                </span>
              </li>
              <li>
                <span className='fxg-font-size-16'>
                  Links to misspelled or slightly altered website addresses
                  (fedx.com, fed-ex.com, etc.)
                </span>
              </li>
              <li>
                <span className='fxg-font-size-16'>
                  Spelling and grammatical errors or excessive use of
                  capitalization and exclamation points.
                </span>
              </li>
              <li>
                <span className='fxg-font-size-16'>
                  Claims that you have won a large sum of money in a lottery or
                  settlement.
                </span>
              </li>
              <li>
                <span className='fxg-font-size-16'>
                  Certificate errors or lack of Secure Sockets Layer (SSL) for
                  sensitive activities.
                </span>
              </li>
            </ul>
          </div>

          {/* <!-- title --> */}
          <div className='col-lg-12'>
            <div className='my-5'>
              <h3 className='text-start justify-content-start ms-auto'>
                Types of Fraud
              </h3>
              <hr />
            </div>
          </div>
          {/* <!-- accordions --> */}
          <div className='col-lg-12'>
            <div className='accordion' id='accordionExample'>
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseOne'
                    aria-expanded='true'
                    aria-controls='collapseOne'
                  >
                    Credit Card Fraud
                  </button>
                </h2>
                <div
                  id='collapseOne'
                  className='accordion-collapse collapse show'
                  data-bs-parent='#accordionExample'
                  aria-labelledby='collapseOne'
                >
                  <div className='accordion-body'>
                    <p style={{ textAlign: 'justify' }}>
                      Credit card fraud is a form of identity theft. It is
                      committed when someone uses your card over the internet
                      without your permission. Even though the law protects you
                      against such activities, here are some common warning
                      signs of credit card fraud that can help you protect
                      yourself:
                    </p>
                    <ul style={{listStylePosition: 'inside'}}>
                      <li>
                        <span className='fxg-font-size-16'>
                          Wrong charges on your bank statements.
                        </span>
                      </li>
                      <li>
                        <span className='fxg-font-size-16'>
                          Mistakes on your credit report.
                        </span>
                      </li>
                      <li>
                        <span className='fxg-font-size-16'>
                          A temporary hold placed by your bank on your card or
                          account.
                          <br />{' '}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseTwo'
                    aria-expanded='false'
                    aria-controls='collapseTwo'
                  >
                    Fraudulent Emails
                  </button>
                </h2>
                <div
                  id='collapseTwo'
                  className='accordion-collapse collapse'
                //   data-bs-parent='#accordionExample'
                  aria-labelledby='collapseTwo'
                >
                  <div className='accordion-body'>
                    Fraudulent emails are the most common avenue of online
                    scams. Such emails attempt to trick you by pretending to
                    come from a reputable source. They try to get you to share
                    sensitive personal account information or send payment.
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseThree'
                    aria-expanded='false'
                    aria-controls='collapseThree'
                  >
                    Instant Messaging (IM) Attack
                  </button>
                </h2>
                <div
                  id='collapseThree'
                  className='accordion-collapse collapse'
                //   data-bs-parent='#accordionExample'
                aria-labelledby='collapseThree'
                >
                  <div className='accordion-body'>
                    Similar to email attacks, links are delivered via instant
                    messaging versus email. They work much like email attacks,
                    where malware is launched when you click on a hyperlink that
                    then links through to a malicious website. The malware can
                    be spread through your IM chat sessions.
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseFour'
                    aria-expanded='false'
                    aria-controls='collapseFour'
                  >
                    Phishing
                  </button>
                </h2>
                <div
                  id='collapseFour'
                  className='accordion-collapse collapse'
                //   data-bs-parent='#accordionExample'
                aria-labelledby='collapseFour'
                >
                  <div className='accordion-body'>
                    Phishing is an email fraud method where the perpetrator
                    sends you a legitimate-looking email in an attempt to gather
                    your personal and financial information. Typically, the
                    messages appear to come from well-known and trustworthy web
                    sites.
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseFive'
                    aria-expanded='false'
                    aria-controls='collapseFive'
                  >
                    Search Engine Phishing
                  </button>
                </h2>
                <div
                  id='collapseFive'
                  className='accordion-collapse collapse'
                //   data-bs-parent='#accordionExample'
                aria-labelledby='collapseFive'
                >
                  <div className='accordion-body'>
                    Some phishing scams involve search engines where you are
                    directed to product sites that may offer low-cost products
                    or services. If you enter your credit card information to
                    purchase a product, your information is collected by the
                    phishing site. There are many fake bank websites offering
                    credit cards or loans at a low rate, but they are actually
                    phishing sites.
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseSix'
                    aria-expanded='false'
                    aria-controls='collapseSix'
                  >
                    Smishing
                  </button>
                </h2>
                <div
                  id='collapseSix'
                  className='accordion-collapse collapse'
                //   data-bs-parent='#accordionExample'
                aria-labelledby='collapseSix'
                >
                  <div className='accordion-body'>
                    Smishing is similar to email and IM attacks. Links are
                    delivered to your mobile device via text messaging. In this
                    case, malware is launched when you click on a hyperlink that
                    then links you to a malicious website.
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseSeven'
                    aria-expanded='false'
                    aria-controls='collapseSeven'
                  >
                    Social Engineering
                  </button>
                </h2>
                <div
                  id='collapseSeven'
                  className='accordion-collapse collapse'
                //   data-bs-parent='#accordionExample'
                aria-labelledby='collapseSeven'
                >
                  <div className='accordion-body'>
                    This term describes a non-technical kind of intrusion that
                    relies heavily on human interaction, and often may involve
                    tricking you into breaking normal security procedures or
                    divulging confidential information. The perpetrator may try
                    to appeal to your vanity, authority level and/or greed.
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseEight'
                    aria-expanded='false'
                    aria-controls='collapseEight'
                  >
                    Spearphishing
                  </button>
                </h2>
                <div
                  id='collapseEight'
                  className='accordion-collapse collapse'
                //   data-bs-parent='#accordionExample'
                aria-labelledby='collapseEight'
                >
                  <div className='accordion-body'>
                    Your company or organization may be targeted in a
                    spearfishing email attack. The spoofing email may request
                    unauthorized access to confidential data.
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseNine'
                    aria-expanded='false'
                    aria-controls='collapseNine'
                  >
                    Vishing
                  </button>
                </h2>
                <div
                  id='collapseNine'
                  className='accordion-collapse collapse'
                //   data-bs-parent='#accordionExample'
                aria-labelledby='collapseNine'
                >
                  <div className='accordion-body'>
                    The telephone version of phishing is vishing. In phone
                    phishing, you may receive a message asking you to call a
                    number. The purpose is to get your personal information,
                    which could be used to access your account or open new
                    credit cards in your name.
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* <!-- disclaimer --> */}
          <div className='col-lg-12'>
            <div className='my-5'>
              <h4 className='text-muted text-start justify-content-start ms-auto'>
              Disclaimer: Please note that Demo Express LTD is not responsible for any damages, charges or costs incurred by you as a result of fraudulent activity under the pretext of the Demo Express LTD name, service marks or logos.
              </h4>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReportFraud
