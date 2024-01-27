import ArrowBackIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CardRooms } from "../pages/home/components/rooms/components";

interface Room {
  title: string;
  imageUrl: string;
  description: string;
  price: string;
}

interface ImageSliderProps {
  visibleImages: Room[];
  nextSlide: () => void;
  prevSlide: () => void;
  SliderImages: ({ title }: { title?: string }) => React.ReactNode;
}

const useImageSlider = (rooms: Room[]): ImageSliderProps => {
  const [startIndex, setStartIndex] = useState<number>(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);
  const visibleCount = isSmallScreen ? 1 : 3;
  const visibleRooms = rooms.slice(startIndex, startIndex + visibleCount);

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
      Math.min(prevIndex + 1, rooms.length - visibleCount)
    );
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const SliderImages = () => {
    return (
      <Box>
        {/* Puedes agregar lógica adicional aquí para el título si es necesario */}
        {visibleRooms.map((room, index) => (
          <CardRooms room={room} key={index} />
        ))}
        {(isSmallScreen || visibleRooms.length > 1) && (
          <>
            <IconButton
              onClick={prevSlide}
              style={{
                position: "absolute",
                left: "0",
                top: "50%",
                transform: "translateY(-50%)",
                display: "block",
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <IconButton
              onClick={nextSlide}
              style={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                display: "block",
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </>
        )}
      </Box>
    );
  };

  return {
    visibleImages: visibleRooms,
    nextSlide,
    prevSlide,
    SliderImages,
  };
};

export default useImageSlider;
