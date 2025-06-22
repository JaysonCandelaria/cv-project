import React, { useState } from 'react';
import '../PhotoGallery.css';
import image from '../assets/image.png'; 
interface ImageItem {
  src: string;
  alt: string;
}

const images: ImageItem[] = [
  { src: image, alt: 'Kasagana ka' },
  { src: image, alt: 'Project 2' },
  { src: image, alt: 'Project 3' },
  { src: image, alt: 'Project 4' },
];

const Project: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (src: string) => setSelectedImage(src);
  const closeModal = () => setSelectedImage(null);

  return (
    <div>
      <h2>My Projects</h2>

      <div className="photo-gallery">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            onClick={() => openModal(img.src)}
            className="gallery-img"
          />
        ))}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage} alt="Preview" />
        </div>
      )}
    </div>
  );
};

export default Project;
