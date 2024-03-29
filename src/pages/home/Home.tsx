import { Grid } from "@mui/material";
import { Events } from "./components/events";
import Footer from "./components/footer/Footer";
import { Header } from "./components/header";
import { Recomendations } from "./components/recomendations";
import { Rooms } from "./components/rooms";
import { Services } from "./components/services";
import { ClassifyExperience } from "./components/classifyExperience";

const Home = () => {
  return (
    <Grid
      container
      id="Home"
      direction="column"
      sx={{ minHeight: "100vh", margin: 0, minWidth: "100vw", gap: "8rem" }}
    >
      <Grid item>
        <Header />
      </Grid>
      <Grid id="Menu" item sx={{ alignContent: "center" }}>
        <Recomendations />
      </Grid>
      <Grid
        item
        id="rooms"
        sx={{
          display: "flex",
          backgroundColor: "#AE9672",
          justifyContent: "center",
          alignItems: "center",
          width: "100%", // Ajustar el ancho al 100%
        }}
      >
        <Rooms />
      </Grid>
      <Grid
        item
        id="Eventos"
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          padding: "5rem",
        }}
      >
        <Events />
      </Grid>
      <Grid
        item
        id="Servicios"
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Services />
      </Grid>
      <Grid
        item
        id="classifyExperience"
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ClassifyExperience />
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
          backgroundColor: "#AE9672",
        }}
      >
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Home;
