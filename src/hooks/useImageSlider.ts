import { useState } from "react";

interface Image {
  title: string;
  imageUrl: string;
  price: string;
}

interface ImageSliderProps {
  visibleImages: Image[];
  nextSlide: () => void;
  prevSlide: () => void;
}

const useImageSlider = (images: Image[], visibleCount: number): ImageSliderProps => {
  const [startIndex, setStartIndex] = useState<number>(0);

  const visibleImages = images.slice(startIndex, startIndex + visibleCount);

  const nextSlide = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 1, images.length - visibleCount));
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return {
    visibleImages,
    nextSlide,
    prevSlide,
  };
};

export default useImageSlider;
