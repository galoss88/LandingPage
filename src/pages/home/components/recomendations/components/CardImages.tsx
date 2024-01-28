import React from "react";
import {
  Typography,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  Box,
  Container,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardIos";
import { stylesSubtitules } from "../../styles/subtitles";

interface CardImagesProps {
  title?: string;
  isSmallScreen: boolean;
  visibleImages: { title: string; imageUrl: string; price: string }[];
  prevSlide: () => void;
  nextSlide: () => void;
}

const CardImages: React.FC<CardImagesProps> = ({
  title = "Titulo slider",
  isSmallScreen,
  visibleImages,
  prevSlide,
  nextSlide,
}) => {
  const styleArrows = {
    color: "#AE9672",
    fontSize: { xs: "2rem", xl: "2.4rem" },
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: { xs: "80%", sm: "95%", md: "70%", xl: "100%" },
        gap: "2rem",
      }}
    >
      <Typography sx={stylesSubtitules} variant="h4">
        {title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          flexDirection: isSmallScreen ? "column" : "row",
          // flexWrap: "wrap",
          width: "100%",
          maxWidth: "120rem",
          margin: "0 auto",
          position: "relative",
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
              maxWidth: isSmallScreen ? "100%" : "20rem",
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
              <Typography
                sx={{
                  color: "#000",
                  fontFamily: "Inter",
                  fontSize: "1.6rem",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "normal",
                }}
                variant="h5"
                gutterBottom
              >
                {image.title}
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  fontFamily: "Inter",
                  fontSize: "1rem",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
                variant="body1"
                gutterBottom
              >
                Precio: {image.price}
              </Typography>
            </CardContent>
          </Card>
        ))}
        {(isSmallScreen || visibleImages.length > 1) && (
          <>
            <IconButton
              onClick={prevSlide}
              sx={{
                position: "absolute",
                left: { xs: "-2.3rem", xl: "10rem" },

                top: "50%",
                transform: "translateY(-50%)",
                display: "block",
              }}
            >
              <ArrowBackIcon sx={styleArrows} />
            </IconButton>
            <IconButton
              onClick={nextSlide}
              sx={{
                position: "absolute",
                right: { xs: "-2.3rem", xl: "10rem" },
                top: "50%",
                transform: "translateY(-50%)",
                height: { xs: "auto", xl: 0 },
                width: { xs: "auto", xl: 0 },
                display: "block",
              }}
            >
              <ArrowForwardIcon sx={styleArrows} />
            </IconButton>
          </>
        )}
      </Box>
    </Container>
  );
};

export default CardImages;
