import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface CustomCardProps {
  backgroundImage: string;
  title: string;
  date: string;
  time: string;
}

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
        backgroundColor: "blue",
      }}
    >
      <div
        style={{
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
        <Typography variant="h5" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="subtitle1">{date}</Typography>
        <Typography variant="subtitle1">{time}</Typography>
      </CardContent>
    </Card>
  );
};

export default CardEvent;
