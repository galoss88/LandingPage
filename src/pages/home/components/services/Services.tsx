import { Container, Typography } from "@mui/material";
import useCreateServices from "../../../../hooks/useCreateServices";
import { stylesSubtitules } from "../styles/subtitles";

const images = [
  { url: "/Ellipse 1.svg", title: "Piscina" },
  { url: "/Ellipse 1 (1).svg", title: "Spa" },
  { url: "/Ellipse 1 (2).svg", title: "Sauna" },
  { url: "/Ellipse 1 (3).svg", title: "Discoteca" },
  { url: "/Ellipse 1 (4).svg", title: "Desayunos" },
  { url: "/Ellipse 1 (5).svg", title: "Gimnasios" },
  { url: "/Ellipse 1 (6).svg", title: "Animaciones" },
  { url: "/Ellipse 1 (7).svg", title: "Transporte" },
  // ... más imágenes
];

const Services = () => {
  const { ImageGrid } = useCreateServices({ images });

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <Typography sx={stylesSubtitules}>Servicios</Typography>

      <ImageGrid />
    </Container>
  );
};

export default Services;
