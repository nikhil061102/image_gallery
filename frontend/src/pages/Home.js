import { useEffect, useState } from "react";
import Grid from "../components/Grid";
import Navbar from "../components/Navbar";

function Home() {
  const [photos, setPhotos] = useState([]);
  const [updateUI, setUpdateUI] = useState("");

  useEffect(() => {
    fetch("/api/get", { method: 'GET' })
      .then(response => {
        if (!response.ok) {console.log('Network response was not ok');}
        return response.json();
      })
      .then(data => {
        console.log(data)
        setPhotos(data);
      })
      .catch(error => console.log(error));
  }, [updateUI]);

  return (
    <>
      <Navbar setUpdateUI={setUpdateUI}/>
      <Grid photos={photos} setUpdateUI={setUpdateUI}/>
    </>
  );
}

export default Home;