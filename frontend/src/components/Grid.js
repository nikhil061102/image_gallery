import React from "react";

const Grid = ({setUpdateUI,photos}) => {

  const handleDelete = (photoId) => {
    const ans = window.confirm(`Delete photo with ID: ${photoId}`);
    if (!ans) { return; }
  
    fetch(`/api/delete/${photoId}`, { method: 'DELETE' })
      .then(response => {
        if (!response.ok) {
          console.log('Network response was not ok');
        }
        return response.json(); 
      })
      .then(data => {
        setUpdateUI("DELETE"+data.photoId);
        window.alert(`Photo with ID: ${data.photoId} has been deleted`);
      })
      .catch(error => console.log(error));
  };
  
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Our Gallery</h1>
      {photos.length === 0 ? (
        <h3>No images uploaded</h3>
      ) : (<div className="row">
        {photos.map(({ photo, _id }) => (
          <div key={_id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="grid__item" style={{ position: 'relative' }}>
              <div style={{ width: '300px', height: '300px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={`http://localhost:5000/uploads/${photo}`}
                  alt="grid_image"
                  className="img-fluid rounded"
                  style={{ width: '100%', height: 'auto' }} // Ensure the image fits inside the container
                />
                <button
                  className="btn btn-danger"
                  style={{ position: 'absolute', bottom: '5px', left: '5px' }} // Positioning the button
                  onClick={() => handleDelete(_id)}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>)}
    </div>
  );
};

export default Grid;
