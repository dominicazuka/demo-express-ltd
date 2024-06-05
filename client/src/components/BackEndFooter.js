import React from 'react';

const BackEndFooter = () => {
  return(
  <>
    <footer className='footer mt-5 mb-3'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-6'>
            <script>document.write(new Date().getFullYear())</script> © Demo
            Express LTD.
          </div>
          <div className='col-sm-6'>
            <div className='text-sm-end d-none d-sm-block'>
              Crafted with <i className='bi bi-heart text-danger'></i> by Dominic
              Azuka
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
  )
}

export default BackEndFooter;
