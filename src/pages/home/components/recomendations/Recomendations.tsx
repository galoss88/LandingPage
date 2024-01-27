import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import useImageSlider from "../../../../hooks/useImageSlider";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Recomendations = () => {
  const images = [
    {
      title: "Imagen 1",
      imageUrl:
        "https://www.publicdomainpictures.net/pictures/370000/nahled/hotel-resort-at-night-1602594966o23.jpg",
      price: "$10.00",
    },
    {
      title: "Imagen 2",
      imageUrl:
        "https://www.publicdomainpictures.net/pictures/370000/nahled/hotel-resort-at-night-1602594966o23.jpg",
      price: "$15.00",
    },
    {
      title: "Imagen 3",
      imageUrl:
        "https://www.publicdomainpictures.net/pictures/370000/nahled/hotel-resort-at-night-1602594966o23.jpg",
      price: "$20.00",
    },
    {
      title: "Imagen 4",
      imageUrl:
        "https://www.publicdomainpictures.net/pictures/370000/nahled/hotel-resort-at-night-1602594966o23.jpg",
      price: "$25.00",
    },
    {
      title: "Imagen 5",
      imageUrl:
        "https://www.publicdomainpictures.net/pictures/370000/nahled/hotel-resort-at-night-1602594966o23.jpg",
      price: "$30.00",
    },
    {
      title: "Imagen 6",
      imageUrl:
        "https://www.publicdomainpictures.net/pictures/370000/nahled/hotel-resort-at-night-1602594966o23.jpg",
      price: "$35.00",
    },
  ];
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.innerWidth <= 600
  );

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 600);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { visibleImages, nextSlide, prevSlide } = useImageSlider(
    images,
    isSmallScreen ? 1 : 3
  );

  return (
    <Container style={{ position: "relative", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Tus Recomendaciones
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem", // Ajusta el espacio entre las tarjetas
          flexDirection: isSmallScreen ? "column" : "row", // Cambia a columna en pantallas pequeñas
          flexWrap: "wrap", // Permite que las tarjetas se envuelvan en pantallas pequeñas
          width: "100%", // Ancho al 100% del contenedor padre
          maxWidth: "1200px", // Ancho máximo de 1200px
          margin: "0 auto", // Centrar el contenedor
          backgroundColor: "red",
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
              flexBasis: isSmallScreen ? "100%" : "16rem", // Ajusta el ancho en pantallas pequeñas
              maxWidth: isSmallScreen ? "100%" : "300px", // Ajusta el ancho máximo en pantallas pequeñas
              margin: "1rem", // Ajusta el margen entre las tarjetas
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
      </Box>

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
    </Container>
  );
};

export default Recomendations;