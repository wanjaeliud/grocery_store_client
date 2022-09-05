import React from 'react';
import Product from '../product/product';

function Home() {
  return (
      <div className="banner">
        <div className="card bg-dark text-white border-0">
          <img src="/images/banner.png" className="card-img" alt="Page banner"/>
          <div
              className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-4 fw-bolder mb-0">FRESH PRODUCTS
                FROM YOUR FARM</h5>
              <p className="card-text lead text-black fw-bold display-6">We
                connects Farmers to the Market <br/> without
                the Middle Man</p>
            </div>
          </div>
        </div>
        <Product/>
      </div>
  );
}

export default Home;