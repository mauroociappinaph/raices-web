import React, { useState, useRef, useEffect } from 'react';

interface CarruselProps {}

const images: string[] = [
  '../assets',
  '/images/stock/photo-1565098772267-60af42b81ef2.jpg',
  '/images/stock/photo-1572635148818-ef6fd45eb394.jpg',
  '/images/stock/photo-1494253109108-2e30c049369b.jpg',
  '/images/stock/photo-1550258987-190a2d41a8ba.jpg',
  '/images/stock/photo-1559181567-c3190ca9959b.jpg',
  '/images/stock/photo-1601004890684-d8cbf643f5f2.jpg',
];

const Carrusel: React.FC<CarruselProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [preloadImages, setPreloadImages] = useState<string[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    const nextNextIndex = (currentIndex + 2) % images.length;
    setPreloadImages([images[nextIndex], images[nextNextIndex]]);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative overflow-hidden">
      <div className="flex space-x-4" ref={carouselRef}>
        {[currentIndex - 1, currentIndex, currentIndex + 1].map((index) => (
          <div key={index} className="w-full">
            <img
              src={images[(index + images.length) % images.length]}
              alt={`Burger ${index}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      {/* Controles de Navegación */}
      <button onClick={handlePrev} className="absolute left-0 top-1/2 transform -translate-y-1/2">
        &#10094;
      </button>
      <button onClick={handleNext} className="absolute right-0 top-1/2 transform -translate-y-1/2">
        &#10095;
      </button>

      {/* Preload de Imágenes */}
      {preloadImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Preload ${index}`}
          className="hidden"
          loading="lazy"
          width="1"
          height="1"
        />
      ))}
    </div>
  );
};

export default Carrusel;
