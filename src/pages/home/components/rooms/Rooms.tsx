import { Container } from "@mui/material";
import useCreateSliderRooms from "../../../../hooks/useCreateSliderRooms";

const Rooms = () => {
  const rooms = [
    {
      title: "Habitación 1",
      imageUrl: "/src/assets/room.png",
      description: "Descripción de la habitación 1.",
    },
    {
      title: "Habitación 2",
      imageUrl: "/src/assets/room.png",
      description: "Descripción de la habitación 2. asdassadasddasdadasd",
    },
    // Agrega más habitaciones según sea necesario
  ];

  const { SliderImages } = useCreateSliderRooms(
    rooms.map((room) => ({ ...room, price: "$25000" }))
  );

  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          width: { xs: "100%", sm: "90%", md: "60%", lg: "50%", xl: "50%" },
          height: "100%",
          alignItems: "center",
          padding: "5rem 0",
        }}
      >
        <SliderImages />
      </Container>
    </>
  );
};

export default Rooms;
