import { Grid } from "@mui/material";
import { Header } from "./components/header";
import { Recomendations } from "./components/recomendations";
import { Rooms } from "./components/rooms";

const Home = () => {
  return (
    <Grid container direction="column" sx={{ minHeight: "100vh" }}>
      <Grid item xs={12} xl={12}>
        <Header />
      </Grid>
      <Grid item>
        <Recomendations />
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          backgroundColor: "#AE9672",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Rooms />
      </Grid>
      <Grid item sx={{ backgroundColor: "yellow" }}>
        hola
      </Grid>
    </Grid>
  );
};

export default Home;
