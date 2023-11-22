import { useState, useEffect } from "react";
import axios from "axios";
import GalleryList from "../GalleryList/GalleryList";

function App() {
  const [photo, setPhoto] = useState([]);

  const getList = () => {
    axios
      .get("/gallery")
      .then((response) => {
        setPhoto(response.data);
      })
      .catch((err) => {
        alert("error getting list");
        console.log(err);
      });
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div data-testid="app">
      <header>
        <h1>React Gallery</h1>
      </header>

      <p>The gallery goes here!</p>

      <GalleryList photo={photo} getList={getList} />
    </div>
  );
}

export default App;
