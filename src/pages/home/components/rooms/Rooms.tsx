import { Container } from "@mui/material";
import useCreateSliderRooms from "../../../../hooks/useCreateSliderRooms";
import { useStore } from "../../../../state";

const Rooms = () => {
  const { rooms } = useStore();
  // const rooms = [
  //   {
  //     title: "Habitación 1",
  //     imageUrl: "/room.png",
  //     description: "Descripción de la habitación 1.",
  //   },
  //   {
  //     title: "Habitación 2",
  //     imageUrl: "/room.png",
  //     description: "Descripción de la habitación 2.",
  //   },
  //   // Agrega más habitaciones según sea necesario
  // ];

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
