import { Box } from "@mui/material";
import ButtonReservation from "../../../../../../components/button/ButtonReservation";
import TitleHeader from "../../../../../../components/title/TitlePrimary";

const TitleAndButtonReserve = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TitleHeader />

      <ButtonReservation />
    </Box>
  );
};

export default TitleAndButtonReserve;
