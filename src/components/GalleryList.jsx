import React from 'react';

export default function GalleryList(props) {
  const { image, description, setIsModalOpen, setImageSource, setImageDescription } = props;

  const imgClickHandler = () => {
    setIsModalOpen(true);
    setImageSource(image);
    setImageDescription(description);
  };

  return (
    <div className="gallery-list-item" onClick={imgClickHandler}>
      <div className="gallery-list-item-image-container">
        <img src={image} alt={description} />
        <div className="gallery-list-item-image-overlay">
          <svg xmlns="http://www.w3.org/2000/svg" className="gallery-list-item-image-overlay-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>
      </div>
      <p className="gallery-list-item-description">{description}</p>
    </div>
  );
}
