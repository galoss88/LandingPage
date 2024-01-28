import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

interface CustomCardProps {
  backgroundImage: string;
  title: string;
  date: string;
  time: string;
}
const styleDateCard = {
  color: "#FFF",
  textAlign: "center",
  fontFamily: "Jost",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
};

const CardEvent: React.FC<CustomCardProps> = ({
  backgroundImage,
  title,
  date,
  time,
}) => {
  return (
    <Card
      sx={{
        position: "relative",
        width: "20rem",
        height: "37rem", // ajusta la altura según tus necesidades
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
          filter: "brightness(0.5)",
          boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.3)",
        }}
      />
      <CardContent
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white",
        }}
      >
        <Typography
          sx={{
            color: "#FFF",
            fontFamily: "Jost",
            fontSize: "25px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            width: "20rem",
          }}
          variant="h5"
          fontWeight="bold"
        >
          {title}
        </Typography>
      </CardContent>
      <CardContent
        sx={{
          position: "absolute",
          bottom: "-13%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "white",
        }}
      >
        <Typography sx={styleDateCard} variant="subtitle1">
          {date}
        </Typography>
        <Typography sx={styleDateCard} variant="subtitle1">
          {time}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardEvent;
