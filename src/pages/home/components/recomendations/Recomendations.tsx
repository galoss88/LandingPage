import { Box, Container, Typography } from "@mui/material";
import useImageSlider from "../../../../hooks/useImageSliderRecomendations";

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

  const { SliderImages: SliderImagesLunch } = useImageSlider(images);
  const { SliderImages: SliderImagesBreakfastAndDinner } =
    useImageSlider(images);
  const { SliderImages: SliderImagesDesserts } = useImageSlider(images);
  const { SliderImages: SliderImagesDrinks } = useImageSlider(images);

  return (
    <Container style={{ position: "relative", textAlign: "center" }}>
      <Typography
        sx={{
          color: "#000",
          fontFamily: "Jost",
          fontSize: "31.25px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
          marginBottom: "8rem",
        }}
        variant="h4"
        gutterBottom
      >
        Tus recomendaciones
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8rem" }}>
        <SliderImagesLunch title="Almuerzos" />
        <SliderImagesBreakfastAndDinner title="Desayunos y Cenas" />
        <SliderImagesDesserts title="Postres" />
        <SliderImagesDrinks title="Bebidas" />
      </Box>
    </Container>
  );
};

export default Recomendations;
