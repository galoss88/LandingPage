import { Container } from "@mui/material";
import useCreateServices from "../../../../hooks/useCreateServices";

const images = [
  { url: "/public/Ellipse 1.svg", title: "Piscina" },
  { url: "/public/Ellipse 1 (1).svg", title: "Spa" },
  { url: "/public/Ellipse 1 (2).svg", title: "Sauna" },
  { url: "/public/Ellipse 1 (3).svg", title: "Discoteca" },
  { url: "/public/Ellipse 1 (4).svg", title: "Desayunos" },
  { url: "/public/Ellipse 1 (5).svg", title: "Gimnasios" },
  { url: "/public/Ellipse 1 (6).svg", title: "Animaciones" },
  { url: "/public/Ellipse 1 (7).svg", title: "Transporte" },
  // ... más imágenes
];

const Services = () => {
  const { ImageGrid } = useCreateServices({ images });

  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", width: "100%" }}
    >
      <ImageGrid />
    </Container>
  );
};

export default Services;
