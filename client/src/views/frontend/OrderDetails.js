import React, { useEffect } from 'react'
import $ from 'jquery'
import { Link } from 'react-router-dom'

const OrderDetails = () => {
  // window scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  //   initialize datatable
  const useDataTables = selector => {
    useEffect(() => {
      $(selector).DataTable()
    }, [selector])
  }
  useDataTables('#basic-datatable')
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
              Order Details
            </h1>
            <p
              className='text-white'
              style={{
                marginBottom: '60px'
              }}
            >
              View the complete details of your order on the Order Details Page.
              From itemized lists and shipping information to payment status and
              delivery tracking, get all the necessary information about your
              purchase in one place.
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
                  Order Details
                </a>
              </li>
            </ol>
          </nav>
          {/* breadcrumb end */}
        </div>
      </div>
      {/* Breadcrumb  end*/}

      <div
        class='container-fluid'
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '30px',
          paddingRight: '30px'
        }}
      >
        {/* title start */}
        <div class='row'>
          <div class='col-12'>
            <div class='mt-5 text-start justify-content-start ms-auto page-title-box page-title-left'>
              <h4 class='page-title'>Order Details</h4>
            </div>
          </div>
        </div>
        {/* title end */}

        {/* order status steps start*/}
        <div class='row text-center ms-auto justify-content-center'>
          <div class='col-lg-7 col-md-10 col-sm-11 mb-3'>
            <div class='horizontal-steps mt-4 mb-4 pb-5' id='tooltip-container'>
              <div class='horizontal-steps-content'>
                <div class='step-item'>
                  <span
                    data-bs-container='#tooltip-container'
                    data-bs-toggle='tooltip'
                    data-bs-placement='bottom'
                    data-bs-original-title='20/08/2018 07:24 PM'
                  >
                    Order Placed
                  </span>
                </div>
                <div class='step-item current'>
                  <span
                    data-bs-container='#tooltip-container'
                    data-bs-toggle='tooltip'
                    data-bs-placement='bottom'
                    data-bs-original-title='21/08/2018 11:32 AM'
                  >
                    Packed
                  </span>
                </div>
                <div class='step-item'>
                  <span>Shipped</span>
                </div>
                <div class='step-item'>
                  <span>Delivered</span>
                </div>
              </div>

              <div class='process-line' style={{ width: '33%' }}></div>
            </div>
          </div>
        </div>
        {/* order status steps end*/}

        {/* order details start*/}
        <div class='row mb-3'>
          {/* items list */}
          <div class='col-lg-8 mt-5'>
            <div class='card shadow'>
              <div class='card-body'>
                <h4 class='header-title mb-3'>Items from Order #12537</h4>
                <div class='table-responsive'>
                  <table
                    id='basic-datatable'
                    class='table table-bordered table-striped data-table1'
                    style={{ minWidth: '100%' }}
                  >
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Ext.</th>
                        <th>City</th>
                        <th data-type='date' data-format='YYYY/MM/DD'>
                          Start Date
                        </th>
                        <th>Completion</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Unity Pugh</td>
                        <td>9958</td>
                        <td>Curicó</td>
                        <td>2005/02/11</td>
                        <td>37%</td>
                      </tr>
                      <tr>
                        <td>Theodore Duran</td>
                        <td>8971</td>
                        <td>Dhanbad</td>
                        <td>1999/04/07</td>
                        <td>97%</td>
                      </tr>
                      <tr>
                        <td>Kylie Bishop</td>
                        <td>3147</td>
                        <td>Norman</td>
                        <td>2005/09/08</td>
                        <td>63%</td>
                      </tr>
                      <tr>
                        <td>Willow Gilliam</td>
                        <td>3497</td>
                        <td>Amqui</td>
                        <td>2009/29/11</td>
                        <td>30%</td>
                      </tr>
                      <tr>
                        <td>Blossom Dickerson</td>
                        <td>5018</td>
                        <td>Kempten</td>
                        <td>2006/11/09</td>
                        <td>17%</td>
                      </tr>
                      <tr>
                        <td>Elliott Snyder</td>
                        <td>3925</td>
                        <td>Enines</td>
                        <td>2006/03/08</td>
                        <td>57%</td>
                      </tr>
                      <tr>
                        <td>Castor Pugh</td>
                        <td>9488</td>
                        <td>Neath</td>
                        <td>2014/23/12</td>
                        <td>93%</td>
                      </tr>
                      <tr>
                        <td>Pearl Carlson</td>
                        <td>6231</td>
                        <td>Cobourg</td>
                        <td>2014/31/08</td>
                        <td>100%</td>
                      </tr>
                      <tr>
                        <td>Deirdre Bridges</td>
                        <td>1579</td>
                        <td>Eberswalde-Finow</td>
                        <td>2014/26/08</td>
                        <td>44%</td>
                      </tr>
                      <tr>
                        <td>Daniel Baldwin</td>
                        <td>6095</td>
                        <td>Moircy</td>
                        <td>2000/11/01</td>
                        <td>33%</td>
                      </tr>
                      <tr>
                        <td>Phelan Kane</td>
                        <td>9519</td>
                        <td>Germersheim</td>
                        <td>1999/16/04</td>
                        <td>77%</td>
                      </tr>
                      <tr>
                        <td>Quentin Salas</td>
                        <td>1339</td>
                        <td>Los Andes</td>
                        <td>2011/26/01</td>
                        <td>49%</td>
                      </tr>
                      <tr>
                        <td>Armand Suarez</td>
                        <td>6583</td>
                        <td>Funtua</td>
                        <td>1999/06/11</td>
                        <td>9%</td>
                      </tr>
                      <tr>
                        <td>Gretchen Rogers</td>
                        <td>5393</td>
                        <td>Moxhe</td>
                        <td>1998/26/10</td>
                        <td>24%</td>
                      </tr>
                      <tr>
                        <td>Harding Thompson</td>
                        <td>2824</td>
                        <td>Abeokuta</td>
                        <td>2008/06/08</td>
                        <td>10%</td>
                      </tr>
                      <tr>
                        <td>Mira Rocha</td>
                        <td>4393</td>
                        <td>Port Harcourt</td>
                        <td>2002/04/10</td>
                        <td>14%</td>
                      </tr>
                      <tr>
                        <td>Drew Phillips</td>
                        <td>2931</td>
                        <td>Goes</td>
                        <td>2011/18/10</td>
                        <td>58%</td>
                      </tr>
                      <tr>
                        <td>Emerald Warner</td>
                        <td>6205</td>
                        <td>Chiavari</td>
                        <td>2002/08/04</td>
                        <td>58%</td>
                      </tr>
                      <tr>
                        <td>Colin Burch</td>
                        <td>7457</td>
                        <td>Anamur</td>
                        <td>2004/02/01</td>
                        <td>34%</td>
                      </tr>
                      <tr>
                        <td>Russell Haynes</td>
                        <td>8916</td>
                        <td>Frascati</td>
                        <td>2015/28/04</td>
                        <td>18%</td>
                      </tr>
                      <tr>
                        <td>Brennan Brooks</td>
                        <td>9011</td>
                        <td>Olmué</td>
                        <td>2000/18/04</td>
                        <td>2%</td>
                      </tr>
                      <tr>
                        <td>Kane Anthony</td>
                        <td>8075</td>
                        <td>LaSalle</td>
                        <td>2006/21/05</td>
                        <td>93%</td>
                      </tr>
                      <tr>
                        <td>Scarlett Hurst</td>
                        <td>1019</td>
                        <td>Brampton</td>
                        <td>2015/07/01</td>
                        <td>94%</td>
                      </tr>
                      <tr>
                        <td>James Scott</td>
                        <td>3008</td>
                        <td>Meux</td>
                        <td>2007/30/05</td>
                        <td>55%</td>
                      </tr>
                      <tr>
                        <td>Desiree Ferguson</td>
                        <td>9054</td>
                        <td>Gojra</td>
                        <td>2009/15/02</td>
                        <td>81%</td>
                      </tr>
                      <tr>
                        <td>Elaine Bishop</td>
                        <td>9160</td>
                        <td>Petrópolis</td>
                        <td>2008/23/12</td>
                        <td>48%</td>
                      </tr>
                      <tr>
                        <td>Hilda Nelson</td>
                        <td>6307</td>
                        <td>Posina</td>
                        <td>2004/23/05</td>
                        <td>76%</td>
                      </tr>
                      <tr>
                        <td>Evangeline Beasley</td>
                        <td>3820</td>
                        <td>Caplan</td>
                        <td>2009/12/03</td>
                        <td>62%</td>
                      </tr>
                      <tr>
                        <td>Wyatt Riley</td>
                        <td>5694</td>
                        <td>Cavaion Veronese</td>
                        <td>2012/19/02</td>
                        <td>67%</td>
                      </tr>
                      <tr>
                        <td>Wyatt Mccarthy</td>
                        <td>3547</td>
                        <td>Patan</td>
                        <td>2014/23/06</td>
                        <td>9%</td>
                      </tr>
                      <tr>
                        <td>Cairo Rice</td>
                        <td>6273</td>
                        <td>Ostra Vetere</td>
                        <td>2016/27/02</td>
                        <td>13%</td>
                      </tr>
                      <tr>
                        <td>Sylvia Peters</td>
                        <td>6829</td>
                        <td>Arrah</td>
                        <td>2015/03/02</td>
                        <td>13%</td>
                      </tr>
                      <tr>
                        <td>Kasper Craig</td>
                        <td>5515</td>
                        <td>Firenze</td>
                        <td>2015/26/04</td>
                        <td>56%</td>
                      </tr>
                      <tr>
                        <td>Leigh Ruiz</td>
                        <td>5112</td>
                        <td>Lac Ste. Anne</td>
                        <td>2001/09/02</td>
                        <td>28%</td>
                      </tr>

                      <tr>
                        <td>Derek Kerr</td>
                        <td>1724</td>
                        <td>Gualdo Cattaneo</td>
                        <td>2014/21/01</td>
                        <td>89%</td>
                      </tr>
                      <tr>
                        <td>Shad Hudson</td>
                        <td>5944</td>
                        <td>Salamanca</td>
                        <td>2014/10/12</td>
                        <td>98%</td>
                      </tr>
                      <tr>
                        <td>Daryl Ayers</td>
                        <td>8276</td>
                        <td>Barchi</td>
                        <td>2012/12/11</td>
                        <td>88%</td>
                      </tr>
                      <tr>
                        <td>Caleb Livingston</td>
                        <td>3094</td>
                        <td>Fatehpur</td>
                        <td>2014/13/02</td>
                        <td>8%</td>
                      </tr>
                      <tr>
                        <td>Sydney Meyer</td>
                        <td>4576</td>
                        <td>Neubrandenburg</td>
                        <td>2015/06/02</td>
                        <td>22%</td>
                      </tr>
                      <tr>
                        <td>Lani Lawrence</td>
                        <td>8501</td>
                        <td>Turnhout</td>
                        <td>2008/07/05</td>
                        <td>16%</td>
                      </tr>
                      <tr>
                        <td>Allegra Shepherd</td>
                        <td>2576</td>
                        <td>Meeuwen-Gruitrode</td>
                        <td>2004/19/04</td>
                        <td>41%</td>
                      </tr>
                      <tr>
                        <td>Fallon Reyes</td>
                        <td>3178</td>
                        <td>Monceau-sur-Sambre</td>
                        <td>2005/15/02</td>
                        <td>16%</td>
                      </tr>
                      <tr>
                        <td>Karen Whitley</td>
                        <td>4357</td>
                        <td>Sluis</td>
                        <td>2003/02/05</td>
                        <td>23%</td>
                      </tr>
                      <tr>
                        <td>Stewart Stephenson</td>
                        <td>5350</td>
                        <td>Villa Faraldi</td>
                        <td>2003/05/07</td>
                        <td>65%</td>
                      </tr>
                      <tr>
                        <td>Ursula Reynolds</td>
                        <td>7544</td>
                        <td>Southampton</td>
                        <td>1999/16/12</td>
                        <td>61%</td>
                      </tr>
                      <tr>
                        <td>Adrienne Winters</td>
                        <td>4425</td>
                        <td>Laguna Blanca</td>
                        <td>2014/15/09</td>
                        <td>24%</td>
                      </tr>
                      <tr>
                        <td>Francesca Brock</td>
                        <td>1337</td>
                        <td>Oban</td>
                        <td>2000/12/06</td>
                        <td>90%</td>
                      </tr>
                      <tr>
                        <td>Ursa Davenport</td>
                        <td>7629</td>
                        <td>New Plymouth</td>
                        <td>2013/27/06</td>
                        <td>37%</td>
                      </tr>
                      <tr>
                        <td>Mark Brock</td>
                        <td>3310</td>
                        <td>Veenendaal</td>
                        <td>2006/08/09</td>
                        <td>41%</td>
                      </tr>
                      <tr>
                        <td>Dale Rush</td>
                        <td>5050</td>
                        <td>Chicoutimi</td>
                        <td>2000/27/03</td>
                        <td>2%</td>
                      </tr>
                      <tr>
                        <td>Shellie Murphy</td>
                        <td>3845</td>
                        <td>Marlborough</td>
                        <td>2013/13/11</td>
                        <td>72%</td>
                      </tr>
                      <tr>
                        <td>Porter Nicholson</td>
                        <td>4539</td>
                        <td>Bismil</td>
                        <td>2012/22/10</td>
                        <td>23%</td>
                      </tr>
                      <tr>
                        <td>Oliver Huber</td>
                        <td>1265</td>
                        <td>Hannche</td>
                        <td>2002/11/01</td>
                        <td>94%</td>
                      </tr>
                      <tr>
                        <td>Calista Maynard</td>
                        <td>3315</td>
                        <td>Pozzuolo del Friuli</td>
                        <td>2006/23/03</td>
                        <td>5%</td>
                      </tr>
                      <tr>
                        <td>Lois Vargas</td>
                        <td>6825</td>
                        <td>Cumberland</td>
                        <td>1999/25/04</td>
                        <td>50%</td>
                      </tr>
                      <tr>
                        <td>Hermione Dickson</td>
                        <td>2785</td>
                        <td>Woodstock</td>
                        <td>2001/22/03</td>
                        <td>2%</td>
                      </tr>
                      <tr>
                        <td>Dalton Jennings</td>
                        <td>5416</td>
                        <td>Dudzele</td>
                        <td>2015/09/02</td>
                        <td>74%</td>
                      </tr>

                      <tr>
                        <td>Kelly Cameron</td>
                        <td>4836</td>
                        <td>Fontaine-Valmont</td>
                        <td>1999/02/07</td>
                        <td>24%</td>
                      </tr>
                      <tr>
                        <td>Kyra Moses</td>
                        <td>3796</td>
                        <td>Quenast</td>
                        <td>1998/07/07</td>
                        <td>68%</td>
                      </tr>
                      <tr>
                        <td>Grace Bishop</td>
                        <td>8340</td>
                        <td>Rodez</td>
                        <td>2012/02/10</td>
                        <td>4%</td>
                      </tr>
                      <tr>
                        <td>Haviva Hernandez</td>
                        <td>8136</td>
                        <td>Suwałki</td>
                        <td>2000/30/01</td>
                        <td>16%</td>
                      </tr>
                      <tr>
                        <td>Alisa Horn</td>
                        <td>9853</td>
                        <td>Ucluelet</td>
                        <td>2007/01/11</td>
                        <td>39%</td>
                      </tr>
                      <tr>
                        <td>Zelenia Roman</td>
                        <td>7516</td>
                        <td>Redwater</td>
                        <td>2012/03/03</td>
                        <td>31%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* order summary */}
          <div class='col-lg-4 mt-5'>
            <div class='card shadow'>
              <div class='card-body'>
                <h4 class='header-title mb-3'>Order Summary</h4>

                <div class='table-responsive'>
                  <table class='table mb-0'>
                    <thead class='table-light'>
                      <tr>
                        <th>Description</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Grand Total :</td>
                        <td>$1641</td>
                      </tr>
                      <tr>
                        <td>Shipping Charge :</td>
                        <td>$23</td>
                      </tr>
                      <tr>
                        <td>Estimated Tax : </td>
                        <td>$19.22</td>
                      </tr>
                      <tr>
                        <th>Total :</th>
                        <th>$1683.22</th>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* order details end*/}

        <div class='row'>
          {/* shipping info */}
          <div class='col-lg-4 mt-5 mb-3'>
            <div class='card shadow'>
              <div class='card-body'>
                <h4 class='header-title mb-3'>Shipping Information</h4>

                <h5>Stanley Jones</h5>

                <address class='mb-0 font-14 address-lg'>
                  795 Folsom Ave, Suite 600
                  <br />
                  San Francisco, CA 94107
                  <br />
                  <abbr title='Phone'>P:</abbr> (123) 456-7890 <br />
                  <abbr title='Mobile'>M:</abbr> (+01) 12345 67890
                </address>
              </div>
            </div>
          </div>

          {/* billing info */}
          <div class='col-lg-4 mt-5 mb-3'>
            <div class='card shadow'>
              <div class='card-body'>
                <h4 class='header-title mb-3'>Billing Information</h4>

                <ul class='list-unstyled mb-0'>
                  <li>
                    <p class='mb-2'>
                      <span class='fw-bold me-2'>Payment Type:</span> Credit
                      Card
                    </p>
                    <p class='mb-2'>
                      <span class='fw-bold me-2'>Provider:</span> Visa ending in
                      2851
                    </p>
                    <p class='mb-2'>
                      <span class='fw-bold me-2'>Valid Date:</span> 02/2020
                    </p>
                    <p class='mb-0'>
                      <span class='fw-bold me-2'>CVV:</span> xxx
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* delivery info */}
          <div class='col-lg-4 mt-5 mb-3'>
            <div class='card shadow'>
              <div class='card-body'>
                <h4 class='header-title mb-3'>Delivery Info</h4>

                <div class='text-center'>
                  <i class='mdi mdi-truck-fast h2 text-muted'></i>
                  <h5>
                    <b>UPS Delivery</b>
                  </h5>
                  <p class='mb-1'>
                    <b>Order ID :</b> xxxx235
                  </p>
                  <p class='mb-0'>
                    <b>Payment Mode :</b> COD
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderDetails
