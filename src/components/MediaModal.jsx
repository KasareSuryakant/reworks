import React from 'react';

export default function MediaModal(props) {
  const { src, imageDescription, isOpen, closeModal } = props;

  if (isOpen) {
    return (
      <section className="modal" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content-image">
            <img src={src} alt="Gallery" />
            <p>{imageDescription}</p>
          </div>
        </div>
      </section>
    );
  }

  return null;
}
