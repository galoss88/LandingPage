import { Container, Typography } from "@mui/material";
import useImageSlider from "../../../../hooks/useImageSlider";

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

  const { SliderImages } = useImageSlider(images);

  return (
    <Container style={{ position: "relative", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Tus Recomendaciones
      </Typography>
      <SliderImages />
    </Container>
  );
};

export default Recomendations;
