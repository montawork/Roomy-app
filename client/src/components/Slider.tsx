import React from 'react';

const Slider = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              style={{ objectFit: 'fill' }}
              className="d-block w-100"
              src="https://i.pinimg.com/originals/ff/d8/ec/ffd8ec1b52077a620112a4f5870fb9a7.jpg"
              alt="First slide"
              width="100%"
              height="400px"
            />
          </div>
          <div className="carousel-item">
            <img
              style={{ objectFit: 'cover' }}
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1659205814498-8c1478b9a430?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJvb21tYXRlc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="Second slide"
              width="100%"
              height="400px"
            />
          </div>
          <div className="carousel-item">
            <img
              style={{ objectFit: 'cover' }}
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1630332458196-67f7ac7dbda9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Third slide"
              width="100%"
              height="400px"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default Slider;
