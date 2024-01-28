import { Box } from "@mui/material";
import { Navbar } from "./components";
import { TitleAndButtonReserve } from "./components/titleAndButtonReserve";
const Header = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "37.6rem",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Box
        component="div"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            backgroundImage: `url('/imageHotel.jpg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center", // Ajusta la posición de fondo al centro
            filter: "brightness(0.7)",
            width: "100%",
            height: "100%",
          }}
        />
      </Box>

      <Box
        sx={{
          zIndex: 1,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Navbar />
      </Box>

      <Box
        sx={{
          zIndex: 1,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TitleAndButtonReserve />
      </Box>
    </Box>
  );
};

export default Header;
