'use client';

import { X } from "lucide-react";
import { useState } from "react";

export function ProjectImageModal({ children }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {children({ openModal, closeModal, selectedImage })}

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl max-h-[80vh] bg-card rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 bg-background/80 hover:bg-background rounded-full z-10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
            <img
              src={selectedImage}
              alt="Project preview"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
