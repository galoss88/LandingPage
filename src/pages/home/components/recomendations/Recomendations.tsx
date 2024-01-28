import { Box, Container, Typography } from "@mui/material";
import useImageSlider from "../../../../hooks/useImageSliderRecomendations";
import { useRecomendations } from "../../../../state/recomendations";

const Recomendations = () => {
  const { recomendationsLunch, breakfast, desserts, drinks } =
    useRecomendations();

  const { SliderImages: SliderImagesLunch } =
    useImageSlider(recomendationsLunch);
  const { SliderImages: SliderImagesBreakfastAndDinner } =
    useImageSlider(breakfast);
  const { SliderImages: SliderImagesDesserts } = useImageSlider(desserts);
  const { SliderImages: SliderImagesDrinks } = useImageSlider(drinks);

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
