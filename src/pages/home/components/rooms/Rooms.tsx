import { Container } from "@mui/material";
import useImageSlider from "../../../../hooks/useCreateSliderRooms";

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
      description: "Descripción de la habitación 2.",
    },
    // Agrega más habitaciones según sea necesario
  ];

  const { SliderImages } = useImageSlider(
    rooms.map((room) => ({ ...room, price: "" }))
  );

  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "50%",
          height: "100%",
          alignItems: "center",
        }}
      >
        <SliderImages />
      </Container>
    </>
  );
};

export default Rooms;
