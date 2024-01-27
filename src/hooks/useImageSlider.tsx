import React, { useEffect, useState } from "react";
import {
  Typography,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface Image {
  title: string;
  imageUrl: string;
  price: string;
}

interface ImageSliderProps {
  visibleImages: Image[];
  nextSlide: () => void;
  prevSlide: () => void;
  SliderImages: () => React.ReactNode; // Corregir la definición de ComponenteSlider
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

  const SliderImages = () => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          flexDirection: isSmallScreen ? "column" : "row",
          flexWrap: "wrap",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          backgroundColor: "red",
          position:"relative"
        }}
      >
        {visibleImages.map((image, index) => (
          <Card
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              flexGrow: 1,
              flexShrink: 0,
              flexBasis: isSmallScreen ? "100%" : "16rem",
              maxWidth: isSmallScreen ? "100%" : "300px",
              margin: "1rem",
            }}
          >
            <CardMedia
              component="img"
              height="140"
              alt={image.title}
              image={image.imageUrl}
            />
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {image.title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Precio: {image.price}
              </Typography>
            </CardContent>
          </Card>
        ))}
        {(isSmallScreen || visibleImages.length > 1) && (
          <>
            <IconButton
              onClick={prevSlide}
              style={{
                position: "absolute",
                left: 0,
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
    visibleImages,
    nextSlide,
    prevSlide,
     SliderImages,
  };
};

export default useImageSlider;
