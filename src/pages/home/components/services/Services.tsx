import React from "react";
import useCreateServices from "../../../../hooks/useCreateServices";
import { Container } from "@mui/material";

const images = [
  { url: "/src/assets/Ellipse 1.svg", title: "Title 1" },
  { url: "/src/assets/Ellipse 1 (1).svg", title: "Title 2" },
  { url: "/src/assets/Ellipse 1 (2).svg", title: "Title 2" },
  { url: "/src/assets/Ellipse 1 (3).svg", title: "Title 2" },
  { url: "/src/assets/Ellipse 1 (4).svg", title: "Title 2" },
  { url: "/src/assets/Ellipse 1 (5).svg", title: "Title 2" },
  { url: "/src/assets/Ellipse 1 (6).svg", title: "Title 2" },
  { url: "/src/assets/Ellipse 1 (7).svg", title: "Title 2" },
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
