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
const styleArrowRooms = {
  fontSize: { xs: "2rem", xl: "2.4rem" },
};
const useCreateSliderRooms = (rooms: Room[]): ImageSliderProps => {
  const [startIndex, setStartIndex] = useState<number>(0);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 600);
  const visibleCount = isSmallScreen ? 1 : 1;
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
      <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
        {/* Puedes agregar lógica adicional aquí para el título si es necesario */}
        {visibleRooms.map((room, index) => (
          <CardRooms room={room} key={index} />
        ))}
        {(isSmallScreen || visibleRooms.length) && (
          <>
            <IconButton
              onClick={prevSlide}
              sx={{
                position: "absolute",
                left: { xs: "4.4%", xl: "-4%" },
                bottom: { xs: "10%" },
                top: { md: "50%", lg: "50%", sm: "50%", xl: "50%" },

                transform: "translateY(-50%)",
                display: "block",
                color: "#fff",

                fontSize: { xs: "2rem", xl: "2.4rem" },
              }}
            >
              <ArrowBackIcon sx={styleArrowRooms} />
            </IconButton>
            <IconButton
              onClick={nextSlide}
              sx={{
                position: "absolute",
                right: {
                  xs: "4.4%",
                  sm: "4.4%",
                  md: "4.4%",
                  lg: "0%",
                  xl: "-4%",
                },
                bottom: { xs: "10%" },
                color: "#fff",
                top: { md: "50%", lg: "50%", sm: "50%", xl: "50%" },
                transform: "translateY(-50%)",
                display: "block",
              }}
            >
              <ArrowForwardIcon sx={styleArrowRooms} />
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

export default useCreateSliderRooms;
