import useImageSlider from "../../../../hooks/useCreateSliderRooms";

const Rooms = () => {
  const rooms = [
    {
      title: 'Habitación 1',
      imageUrl: 'url_de_la_imagen_1',
      description: 'Descripción de la habitación 1.',
    },
    {
      title: 'Habitación 2',
      imageUrl: 'url_de_la_imagen_2',
      description: 'Descripción de la habitación 2.',
    },
    // Agrega más habitaciones según sea necesario
  ];

  const { SliderImages } = useImageSlider(rooms.map((room) => ({ ...room, price: '' })));

  return <SliderImages />;
};

export default Rooms;
