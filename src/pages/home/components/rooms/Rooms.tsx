import { Container } from "@mui/material";
import useCreateSliderRooms from "../../../../hooks/useCreateSliderRooms";
import { useRooms } from "../../../../state/rooms";

const Rooms = () => {
  const { rooms } = useRooms();

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
