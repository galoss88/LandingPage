import React from "react";
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

  const { visibleImages, nextSlide, prevSlide } = useImageSlider(images, 3);

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
          width: '100%', // Ancho al 100% del contenedor padre
          maxWidth: '1200px', // Ancho máximo de 1200px
          margin: '0 auto', // Centrar el contenedor
          backgroundColor: "red",
          flexWrap: "wrap", // Permite que las tarjetas se envuelvan en pantallas pequeñas
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
              flexBasis: "16rem",
              maxWidth: "300px", // Ajusta el ancho máximo de las tarjetas
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

      <IconButton
        onClick={prevSlide}
        style={{
          display: visibleImages.length > 1 ? "block" : "none", // Ocultar flechas si solo hay una imagen visible
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <ArrowBackIcon />
      </IconButton>
      <IconButton
        onClick={nextSlide}
        style={{
          display: visibleImages.length > 1 ? "block" : "none", // Ocultar flechas si solo hay una imagen visible
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <ArrowForwardIcon />
      </IconButton>
    </Container>
  );
};

export default Recomendations;