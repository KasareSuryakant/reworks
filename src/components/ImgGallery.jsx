import React, { useState } from 'react';
import GalleryList from './GalleryList';
import MediaModal from './MediaModal';
import gallery from '../gallery.json';
import './Gallery.css';

export default function ImgGallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageSource, setImageSource] = useState();
  const [imageDescription, setImageDescription] = useState();

  return (
    <section className="gallery">
      <div className="gallery-title">
        <h1>Gallery</h1>
        <p>
          Make every moment flying operation become unforgettable.
        </p>
      </div>
      <div className="gallery-list">
        {
          gallery.map((item) => (
            <div key={item.image}>
              <GalleryList
                image={item.image}
                description={item.description}
                setIsModalOpen={setIsModalOpen}
                setImageSource={setImageSource}
                setImageDescription={setImageDescription}
              />
              <MediaModal
                src={imageSource}
                imageDescription={imageDescription}
                isOpen={isModalOpen}
                closeModal={() => setIsModalOpen(false)}
              />
            </div>
          ))
        }
      </div>
    </section>
  );
}
