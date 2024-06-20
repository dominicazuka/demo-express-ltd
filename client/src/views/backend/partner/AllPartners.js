import React, { useEffect, useState } from 'react'
import BackEndSideBar from '../../../components/BackEndSideBar'
import $ from 'jquery'
import { Link } from 'react-router-dom'
import Axios from '../../../config'
import Swal from 'sweetalert2'
import Loader from '../../../components/Loader'

const AllPartners = () => {
  // window scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [partners, setPartners] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        setLoading(true)
        const response = await Axios.get('/partners/all-partners') // Adjust the URL as necessary
        setPartners(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching partners:', error)
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error fetching partners, please try again or refresh page',
          confirmButtonColor: '#006400'
        })
      }
    }

    fetchPartners()
  }, [])

  useEffect(() => {
    // Initialize DataTable after partners data is set
    if (partners.length > 0) {
      $('#basic-datatable').DataTable()
    }
  }, [partners])

  return (
    <div className='container-fluid'>
      <div className='row'>
        <BackEndSideBar />
        <div className='col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-3'>
          <div className='card shadow'>
            <div className='card-header'>
              <div className='row'>
                <div className='col-lg-12 text-lg-end align-items-end mt-3 mt-lg-0'>
                  <Link to='/add/partner' className='btn btn-success'>
                    + Add New Partner
                  </Link>
                  <a href='#!' className='btn btn-light'>
                    Export
                  </a>
                </div>
              </div>
            </div>
            <div className='card-body'>
              <h4 className='card-title'>Partners Details</h4>
              <div className='table-responsive small'>
                <table
                  id='basic-datatable'
                  className='table table-bordered table-striped table-centered table-hover'
                  style={{ minWidth: '100%' }}
                >
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>Name</th>
                      <th>Phone Number</th>
                      <th>Email</th>
                      <th>Services Offered</th>
                      <th>Address</th>
                      <th>Country</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading && (
                      <tr>
                        <td colSpan='8' style={{ textAlign: 'center' }}>
                          <div
                            className='d-flex justify-content-center align-items-center'
                            style={{ height: '100px' }}
                          >
                            <Loader />
                          </div>
                        </td>
                      </tr>
                    )}
                    {partners.map((partner, index) => (
                      <tr key={partner._id}>
                        <td>{index + 1}</td>
                        <td>{partner.partnerName}</td>
                        <td>{partner.phoneNumber}</td>
                        <td>{partner.email}</td>
                        <td>{partner.servicesOffered.join(', ')}</td>
                        <td>{partner.address}</td>
                        <td>{partner.country}</td>
                        <td>
                          <Link
                            to={`/edit/partner?id=${encodeURIComponent(partner._id)}`}
                            className='btn btn-blue rounded-pill waves-effect waves-light'
                            title='Edit'
                          >
                            <i className='fa-regular fa-pen-to-square'></i>
                          </Link>
                          <a
                            href={`delete/partner/${partner._id}`}
                            className='btn btn-danger rounded-pill waves-effect waves-light'
                            id='delete'
                            title='Delete'
                          >
                            <i className='fa-solid fa-trash'></i>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AllPartners
