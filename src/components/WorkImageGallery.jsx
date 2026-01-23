'use client';

import { useState } from "react";
import { X } from "lucide-react";

export function WorkImageGallery({ children }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      {children({ openModal, closeModal })}

      {selectedImage && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <div className="relative w-11/12 h-11/12 px-4 justify-center align-middle flex">
            <img
              src={selectedImage.src}
              alt="Preview"
              className="rounded-xl shadow-lg w-full max-h-[80vh] object-contain"
            />
          </div>
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 bg-black/60 text-white rounded-full p-3 hover:bg-black transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  );
}
