import { Box, Container } from "@mui/material";
import { Navbar } from "./components";
import { TitleAndButtonReserve } from "./components/titleAndButtonReserve";

const Header = () => {
  return (
    <Container
      sx={{
        height: "376px",
        backgroundImage: `url('/src/assets/imageHotel.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      <Box width={"100%"} textAlign={"center"}>
        <Navbar />
      </Box>

      <Box
        width={"100%"}
        height={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <TitleAndButtonReserve />
      </Box>
    </Container>
  );
};

export default Header;
