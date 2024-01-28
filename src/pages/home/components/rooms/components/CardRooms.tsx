import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import ButtonReservation from "../../../../../components/button/ButtonReservation";

interface Room {
  key?: number;
  title: string;
  imageUrl: string;
  description: string;
  price: string;
}

interface CardRoomsProps {
  room: Room;
}

const CardRooms: React.FC<CardRoomsProps> = ({ room }) => {
  return (
    <Card
      sx={{
        display: "flex",
        height: "100%",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "none",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        flexDirection: { xs: "column", xl: "row" },
        width: { xs: "auto", sm: "auto", md: "auto", lg: "100%", xl: "100%" },
      }}
    >
      <CardMedia
        component="img"
        alt={room.title}
        height="200"
        image={room.imageUrl}
        sx={{
          objectFit: "cover",
          width: { xs: "auto", sm: "auto", md: "auto", lg: "auto", xl: "45%" },
          borderTopLeftRadius: "12px",
          borderBottomLeftRadius: "12px",
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          justifyContent: "space-between",
          alignItems: "center",
          height: "20rem",
          maxWidth: "30rem",
        }}
      >
        <CardContent
          sx={{
            flexGrow: 1,
            padding: "16px",
            maxWidth: "30rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height:"100%"
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              color: "#FFF",
              fontFamily: "Inter",
              fontSize: "3.1rem",
              fontStyle: "normal",
              fontWeight: 800,
              lineHeight: "normal",
            }}
            mb={1}
          >
            {room.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              color: "#FFF",
              textAlign: "justify",
              fontFamily: "Inter",
              fontSize: "19px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            {room.description}
          </Typography>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "16px",
          }}
        >
          <ButtonReservation title="Hacer Reservación" />
        </Box>
      </Box>
    </Card>
  );
};

export default CardRooms;
