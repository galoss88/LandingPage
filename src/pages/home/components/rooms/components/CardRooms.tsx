import React from 'react';
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Box,
} from '@mui/material';

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
    <Card sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <CardMedia
        component="img"
        height="140"
        alt={room.title}
        image={room.imageUrl}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" fontWeight="bold">
          {room.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {room.description}
        </Typography>
      </CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem',
        }}
      >
        <Button variant="contained" color="primary">
          Hacer reserva
        </Button>
      </Box>
    </Card>
  );
};

export default CardRooms;
