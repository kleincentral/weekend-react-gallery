import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ photo }) {
  return (
    <div data-testid="galleryList">
      {photo.map((item) => {
        return (
          <GalleryItem
            key={item.id}
            id={item.id}
            url={item.url}
            title={item.title}
            description={item.description}
            likes={item.likes}
          />
        );
      })}
    </div>
  );
}

export default GalleryList;
