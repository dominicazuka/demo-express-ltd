import React from 'react';
import { Link } from 'react-router-dom';

const UnauthorizedPage = () => {

  return (
    <div>   
      <section class='py-3 py-md-5 min-vh-100 d-flex justify-content-center align-items-center'>
  <div class='container'>
    <div class='row'>
      <div class='col-12'>
        <div class='text-center'>
          <h2 class='d-flex justify-content-center align-items-center gap-2 mb-4'>
            <span class='display-1 fw-bold'>4</span>
            <i class='bi bi-exclamation-circle-fill text-danger display-4'></i>
            <span class='display-1 fw-bold bsb-flip-h'>1</span>
          </h2>
          <h3 class='h2 mb-2'>Oops! Authorization not granted.</h3>
          <p class='mb-5'>You are not authorized to access the page you are looking, please contact Admin.</p>
          <Link to="/" className="btn bsb-btn-5xl btn-dark rounded-pill px-5 fs-6 m-0">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default UnauthorizedPage;
