import React, { useEffect, useState } from "react";
import CardImages from "../pages/home/components/recomendations/components/CardImages";
interface Image {
  title: string;
  imageUrl: string;
  price: string;
}

interface ImageSliderProps {
  visibleImages: Image[];
  nextSlide: () => void;
  prevSlide: () => void;
  SliderImages: ({ title }: { title?: string }) => React.ReactNode; // Corregir la definición de ComponenteSlider
}
const useImageSlider = (images: Image[]): ImageSliderProps => {
  const [startIndex, setStartIndex] = useState<number>(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);
  const visibleCount = isSmallScreen ? 1 : 3;
  const visibleImages = images.slice(startIndex, startIndex + visibleCount);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 600);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextSlide = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + 1, images.length - visibleCount)
    );
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const SliderImages = ({ title = "Titulo slider" }: { title?: string }) => {
    return (
      <CardImages
        title={title}
        isSmallScreen={isSmallScreen}
        visibleImages={visibleImages}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
    );
  };

  return {
    visibleImages,
    nextSlide,
    prevSlide,
    SliderImages,
  };
};

export default useImageSlider;
