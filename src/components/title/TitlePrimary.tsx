import { Typography } from "@mui/material";
import { Title } from "../../models";

const TitlePrimary = ({ title = "Titulo Principal" }: Title) => {
  return (
    <Typography
      sx={{
        color: "#F5F5F5",
        textShadow: "0px 5px 4px rgba(0, 0, 0, 0.50)",
        fontFamily: "Jost",
        fontSize: "48px",
        fontStyle: "normal",
        fontWeight: 900,
        lineHeight: "normal",
      }}
      variant="h1"
    >
      {title}
    </Typography>
  );
};

export default TitlePrimary;
