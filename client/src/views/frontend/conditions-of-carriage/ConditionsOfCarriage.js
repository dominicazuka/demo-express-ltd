import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ConditionsOfCarriage = () => {
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
              Conditions of Carriage
            </h1>
            <p
              className='text-white'
              style={{
                marginBottom: '60px'
              }}
            >
              Please review our Conditions of Carriage to understand the terms
              and conditions governing the transportation of your shipments.
              Familiarizing yourself with these conditions ensures a smooth and
              informed shipping experience. Thank you for choosing our services.
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
                  Conditions of Carriage
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
                IMPORTANT NOTICE
              </h3>
              <hr />
            </div>
          </div>

          {/* text */}
          <div className='col-lg-12'>
            <p style={{ textAlign: 'justify' }}>
              These Conditions of Carriage EXCLUDE LIABILITY on the part of Demo
              Express LTD and its employees or agents for loss, damage and delay
              in certain circumstances; LIMIT LIABILITY to stated amounts where
              liability is accepted and REQUIRE NOTICE OF CLAIMS within strict
              time limits. Senders should note these Conditions carefully and
              where necessary obtain insurance cover in order to protect their
              interests. Shipments are subject to local tariffs and the
              conditions of the Demo Express LTD subsidiary, branch or the
              independent contractor which accepted the Shipment.
            </p>
          </div>

          {/* <!-- title --> */}
          <div className='col-lg-12'>
            <div className='my-5'>
              <h3 className='text-start justify-content-start ms-auto'>
                DEMO EXPRESS LTD EXPRESS CONDITIONS OF CARRIAGE FOR THE MIDDLE
                EAST, THE INDIAN SUBCONTINENT AND AFRICA
              </h3>
              <hr />
            </div>
          </div>

          {/* text - 1 */}
          <div className='col-lg-12 mb-2'>
            <h3 className='text-start justify-content-start ms-auto'>
              1. APPLICATION
            </h3>
            <p style={{ textAlign: 'justify' }}>
              1.1 These Conditions apply to the carriage of Shipments from and
              between selected countries in the Middle East, the Indian
              Subcontinent and Africa (“MEISA”) and from and between specified
              locations within selected countries in MEISA, utilizing the
              following services or service options of Demo Express LTD (if and
              where available): These services may be modified by Demo Express
              LTD from time to time. Upon request, customers can be informed
              about the areas that are served by Demo Express LTD. Shipments
              originating outside MEISA for MEISA or other international
              destinations are subject to local tariffs and the terms and
              conditions of the Demo Express LTD subsidiary, branch or the
              independent contractor that accepted the Shipment. Shipments
              returned using Demo Express LTD are governed by the terms and
              conditions applicable to the country from which the Shipment is
              returned. Those terms and conditions of service may vary from
              country to country.
              <br /> <br />
              1.2 The carriage by air of a Shipment may be subject to the Warsaw
              Convention of October 12, 1929, as amended by the Hague Protocol
              of September 28, 1955, and all subsequent applicable Protocols or
              the Montreal Convention of May 28, 1999 and all subsequent
              applicable Protocols, as well as the Guadalajara Convention of
              September 18, 1961. Shipments transported partly or solely by road
              – by explicit agreement or otherwise – in, to or from a country
              which is party to the Convention on the Contract for the
              International Carriage of Goods by Road 1956 (CMR), as amended,
              are subject to the terms and conditions thereof. If we carry your
              shipment by road within a country that is not party to the CMR or
              between two countries neither of which is a party to the CMR, the
              shipment shall be deemed to be governed by the CMR. Shipments
              carried from and between specified locations within one country
              are subject to the mandatory rules provided by the laws of that
              country. <br />
            </p>
          </div>

          {/* text - 2 */}
          <div className='col-lg-12 mb-2'>
            <h3 className='text-start justify-content-start ms-auto'>
              2. DEFINITIONS
            </h3>
            <p style={{ textAlign: 'justify' }}>
              “B2C Shipments” means Shipments pursuant to a commercial
              transaction between a business-Sender (acting for professional
              purposes) and an individual consumer-Recipient (acting outside of
              their professional purposes), and Shipments for which no details
              were completed in the ‘business name’ field of the (Air) Waybill.
              “Business Delivery” means delivery made to a commercial or
              business premises, excluding homes, private residences, and B2C
              Shipments. Conditions shall mean these Conditions of Carriage
              which term shall also include those agreements, laws and
              conventions expressly referred to herein and as updated by Demo
              Express LTD from time to time. “FedEx” means, Demo Express LTD
              Corporation, its subsidiaries and branches, their respective
              employees and agents and independent contractors. The contract of
              carriage is with the Demo Express LTD subsidiary, branch or
              independent contractor which accepts the Shipment from the Sender.
              Demo Express LTD Shipments mean intra-country Shipments within
              selected countries in MEISA where both the Shipper and the
              Recipient are within the same country. Demo Express LTD Regional
              Economy and Demo Express LTD Regional Economy Freight shipments
              mean shipments within selected countries in MEISA where both
              shipper and recipient are within MEISA and are moved via the Demo
              Express LTD road network. The Sender or "The Shipper" means the
              person (natural or legal) whose name is listed on the (Air)
              Waybill as the sender.
            </p>
          </div>

          {/* text - 3 */}
          <div className='col-lg-12 mb-2'>
            <h3 className='text-start justify-content-start ms-auto'>
              3. RATES
            </h3>
            <p style={{ textAlign: 'justify' }}>
              Rates applicable to the Shipment are as set out in the Demo
              Express LTD standard list rates on Demo Express LTD.com, or as
              expressly agreed otherwise in the relevant Demo Express LTD
              transportation services agreement. Demo Express LTD rates do not
              include duties, taxes, customs clearance Charges, or any other
              import or export Charges applicable to the Shipment. Rates and
              service quotations by employees and agents of Demo Express LTD
              will be based upon information provided by the Sender but final
              rates and service may vary based upon the Shipment actually
              tendered and the application of these Conditions. Demo Express LTD
              is not liable for, nor will any adjustment, refund or credit of
              any kind be made, as a result of any discrepancy in any rate or
              service quotation made prior to the tender of the Shipment and the
              rates, and other Charges invoiced to the customer. Demo Express
              LTD will only provide estimates of customs duties and taxes
              through the Estimate Duties and Taxes feature on Demo Express LTD
              Global Trade Manager at Demo Express LTD.com but final duties and
              taxes may vary. Rates applied shall be those rates applicable and
              in force at the time that the contract of carriage is made. Demo
              Express LTD reserves the right to revise Charges set out in the
              Demo Express LTD standard list rates from time to time and without
              notice.
            </p>
          </div>

          {/* text - 4 */}
          <div className='col-lg-12 mb-2'>
            <h3 className='text-start justify-content-start ms-auto'>
              4. BILLING
            </h3>
            <p style={{ textAlign: 'justify' }}>
              4.1 Notwithstanding that Demo Express LTD reserves the right to
              require payment of any Charges in advance as provided for in
              accordance with the Conditions, Invoices for any unpaid Charges
              are payable without discount within 15 days of the invoice date.
              Invoices for duties and taxes are payable upon receipt. Demo
              Express LTD reserves the right to increase any amount unpaid at
              due date, as of right and without prior notice of remedy, by 15 %
              (or such amount as applied by Demo Express LTD per the local
              applicable payment terms and conditions) as liquidated damages for
              administrative costs, and a yearly interest of 6 % above the
              European Central Bank Rate (or such rate as applied by Demo
              Express LTD per the local applicable payment terms and
              conditions), to be calculated per commenced month or the maximum
              allowed interest rate under the applicable legislation, if lower.{' '}
              <br /> <br />
              4.2 "Bill Sender" or "Bill Shipper" means Charges will be billed
              to the Sender. <br /> <br />
              4.3 "Bill Recipient" or "Bill Consignee" means Charges will be
              billed to the Recipient. To bill Charges to the Recipient, the
              Recipient must have a valid Demo Express LTD Account Number and
              this number must be entered in the appropriate section of the
              (Air) Waybill. Bill Recipient Shipments are acceptable for
              carriage to specified locations only. If the Recipient refuses to
              pay, the Charges will automatically be billed to the Sender.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConditionsOfCarriage
