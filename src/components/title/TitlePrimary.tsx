import { Typography } from "@mui/material";
import { Title } from "../../models";

const TitlePrimary = ({ title = "Titulo Principal" }: Title) => {
  return (
    <Typography
      sx={{
        color: "#F5F5F5",
        textShadow: "0px 5px 4px rgba(0, 0, 0, 0.50)",
        fontFamily: "Jost",
        fontSize: { xs: "3rem",xl: "4.8rem" },
        fontStyle: "normal",
        fontWeight: 900,
        lineHeight: "normal",
        zIndex: 1,
      }}
      variant="h1"
    >
      {title}
    </Typography>
  );
};

export default TitlePrimary;
