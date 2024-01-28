import { Box } from "@mui/material";
import CardEvent from "./components/CardEvent";

const Events = () => {
  const cardData = [
    {
      id: 1,
      backgroundImage:
        "https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/reportajes/cuando-volveremos-a-ir-a-conciertos-con-normalidad/8867610-2-esl-MX/Cuando-volveremos-a-ir-a-conciertos-con-normalidad.png",
      title: "Título de la Tarjeta 1",
      date: "Fecha 1",
      time: "Hora 1",
    },
    {
      id: 2,
      backgroundImage:
        "https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/reportajes/cuando-volveremos-a-ir-a-conciertos-con-normalidad/8867610-2-esl-MX/Cuando-volveremos-a-ir-a-conciertos-con-normalidad.png",
      title: "Título de la Tarjeta 2",
      date: "Fecha 2",
      time: "Hora 2",
    },
    {
      id: 3,
      backgroundImage:
        "https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/reportajes/cuando-volveremos-a-ir-a-conciertos-con-normalidad/8867610-2-esl-MX/Cuando-volveremos-a-ir-a-conciertos-con-normalidad.png",
      title: "Título de la Tarjeta 3",
      date: "Fecha 3",
      time: "Hora 3",
    },
    // Puedes agregar más tarjetas según sea necesario
  ];

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      sx={{ gap: "12.7rem" }}
    >
      {cardData.map((card) => (
        <CardEvent
          key={card.id}
          backgroundImage={card.backgroundImage}
          title={card.title}
          date={card.date}
          time={card.time}
        />
      ))}
    </Box>
  );
};

export default Events;
