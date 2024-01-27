import { Grid } from "@mui/material";
import { Header } from "./components/header";
import { Recomendations } from "./components/recomendations";

const Home = () => {
  return (
    <Grid
      container
      direction="column"
      rowSpacing={"50px"}
      sx={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} xl={12}>
        <Header />
      </Grid>
      <Grid item>
        <Recomendations />
      </Grid>
      <Grid item sx={{ backgroundColor: "green" }}>
        hola
      </Grid>
      <Grid item sx={{ backgroundColor: "yellow" }}>
        hola
      </Grid>
    </Grid>
  );
};

export default Home;
