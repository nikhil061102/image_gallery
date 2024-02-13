import React from "react";

const Grid = ({ photos }) => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Our Gallery</h1>
      <div className="row">
        {photos.map(({ photo, _id }) => (
          <div key={_id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="grid__item">
              <img
                src={`http://localhost:5000/uploads/${photo}`}
                alt="grid_image"
                className="img-fluid rounded"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
