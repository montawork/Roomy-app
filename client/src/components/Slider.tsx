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
              className="d-block w-100"
              src="https://i.pinimg.com/originals/ff/d8/ec/ffd8ec1b52077a620112a4f5870fb9a7.jpg"
              alt="First slide"
              width="100%"
              height="400px"

            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="data:image/png;base64,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"
              alt="Second slide"
              width="100%"
              height="400px"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
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
