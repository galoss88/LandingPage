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
        flexDirection: "row",
        height: "100%",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "none",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      <CardMedia
        component="img"
        alt={room.title}
        height="200"
        image={room.imageUrl}
        sx={{
          objectFit: "cover",
          width: "45%",
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
        }}
      >
        <CardContent sx={{ flexGrow: 1, padding: "16px" }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            color={"primary.main"}
            fontSize={"1.8rem"}
            mb={1}
          >
            {room.title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: "1rem",
              lineHeight: "1.5",
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
