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

  // Handle keyboard escape key
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <>
      {children({ openModal, closeModal, selectedImage })}

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md animate-fade-in"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
        >
          <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-3 bg-background/90 hover:bg-background rounded-full z-50 transition-all duration-300 hover:scale-110 group"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-foreground group-hover:text-primary" />
            </button>
          <div
            className="relative w-full max-w-6xl max-h-[85vh] rounded-xl overflow-auto shadow-2xl animate-scale-in flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-center w-full h-full p-6">
              <img
                src={selectedImage}
                alt="Project preview"
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
