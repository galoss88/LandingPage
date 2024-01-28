import { Box, Button, Typography } from "@mui/material";

const ClassifyExperience = () => {
  const titleStyles = {
    color: "#AE9672",
    fontFamily: "Jost",
    fontSize: "3.2rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  };

  const buttonStyles = {
    borderRadius: "10px",
    background: "#000",
    boxShadow:
      "0px 2.767px 2.214px 0px rgba(0, 0, 0, 0.02), 0px 6.65px 5.32px 0px rgba(0, 0, 0, 0.03), 0px 12.522px 10.017px 0px rgba(0, 0, 0, 0.04), 0px 22.336px 17.869px 0px rgba(0, 0, 0, 0.04), 0px 41.778px 33.422px 0px rgba(0, 0, 0, 0.05), 0px 100px 80px 0px rgba(0, 0, 0, 0.07)",
    color: "#FFF",
    width: "100%",
    fontSize: "1.6rem",
    "&:hover": {
      backgroundColor: "#AE9672",
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "2.4rem",
      }}
    >
      <Typography sx={titleStyles}>Clasifica tu experiencia</Typography>
      <Button sx={buttonStyles}>Clasificar</Button>
    </Box>
  );
};

export default ClassifyExperience;
