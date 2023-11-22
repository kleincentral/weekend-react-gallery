function GalleryItem({ id, url, title, description, likes }) {
  return (
    <div data-testid="galleryItem">
      <img src={url} height={150} width={150} />
      <li>
        {title}:{description}:{likes}
      </li>
    </div>
  );
}

export default GalleryItem;
