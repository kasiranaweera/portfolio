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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          role="dialog"
          aria-modal="true"
        >
          <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-3 bg-background/90 hover:bg-background rounded-full z-10 transition-all duration-300 hover:scale-110 group"
              aria-label="Close modal"
            >
              <X className="w-6 h-6 text-foreground group-hover:text-primary" />
            </button>
          <div
            className="relative max-w-[90vw] max-h-[90vh] bg-card rounded-xl overflow-hidden shadow-2xl border border-border/30 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-center w-full h-full bg-gradient-to-b from-background/50 to-background/20">
              <img
                src={selectedImage}
                alt="Project preview"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
