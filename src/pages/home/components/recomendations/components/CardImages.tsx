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
const CardImages = ({ title = "Titulo slider" }: { title?: string }) => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        gap: "2rem",
      }}
    >
      <Typography fontWeight={"bold"} variant="h4">
        {title}
      </Typography>

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
                left: "0",
                top: "50%",
                transform: "translateY(-50%)",
                display: "block",
              }}
            >
              <ArrowBackIcon sx={styleArrows} />
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
              <ArrowForwardIcon sx={styleArrows} />
            </IconButton>
          </>
        )}
      </Box>
    </Container>
  );
};
export default CardImages;
