import { useState } from "react";
import axios from "axios";

function GalleryItem({ id, url, title, description, likes, getList }) {
  const [showDesc, setShowDesc] = useState(false);

  const toggleShowDesc = () => {
    setShowDesc(!showDesc);
  };

  const addLike = () => {
    console.log("hi", id);
    axios
      .put(`/gallery/like/${id}`)
      .then((response) => {
        getList();
      })
      .catch((err) => {
        alert("error updating like");
        console.log(err);
      });
  };

  const shownContent = () => {
    if (showDesc) {
      return (
        <div
          data-testid="description"
          style={{ height: 150, width: 150, textAlign: "center" }}
        >
          {description}
        </div>
      );
    } else {
      return <img src={url} height={150} width={150} />;
    }
  };

  return (
    <div data-testid="galleryItem">
      <h4>{title}</h4>
      <div data-testid="toggle" onClick={toggleShowDesc}>
        {shownContent()}
      </div>
      <div>
        {likes} likes{" "}
        <button data-testid="like" onClick={addLike}>
          Add like
        </button>
      </div>
    </div>
  );
}

export default GalleryItem;
