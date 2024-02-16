import React from "react";

const Button = ({ setUpdateUI }) => {
  const handleChange = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", e.target.files[0]);
    fetch("/api/save", {
      method: 'POST',
      body: formData,
    })
    .then(response => {
      if (!response.ok) {console.log('Network response was not ok');}
      return response.json();
    })
    .then(data => {
      setUpdateUI("SAVE"+data._id);
    })
    .catch(error => console.log(error));
  };

  return (
    <label className="btn btn-light" htmlFor="file_picker">
      + Add Photo
      <input
        hidden
        type="file"
        name="file_picker"
        id="file_picker"
        onChange={(e) => handleChange(e)}
      />
    </label>
  );
};

export default Button;
