import { Box, Container, Typography } from "@mui/material";
import CardEvent from "./components/CardEvent";
import { stylesSubtitules } from "../styles/subtitles";

const Events = () => {
  const cardData = [
    {
      id: 1,
      backgroundImage:
        "https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/reportajes/cuando-volveremos-a-ir-a-conciertos-con-normalidad/8867610-2-esl-MX/Cuando-volveremos-a-ir-a-conciertos-con-normalidad.png",
      title: "Concierto",
      date: "Fecha",
      time: "Hora",
    },
    {
      id: 2,
      backgroundImage:
        "https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/reportajes/cuando-volveremos-a-ir-a-conciertos-con-normalidad/8867610-2-esl-MX/Cuando-volveremos-a-ir-a-conciertos-con-normalidad.png",
      title: "Wine night",
      date: "Fecha",
      time: "Hora",
    },
    {
      id: 3,
      backgroundImage:
        "https://d7lju56vlbdri.cloudfront.net/var/ezwebin_site/storage/images/_aliases/img_1col/reportajes/cuando-volveremos-a-ir-a-conciertos-con-normalidad/8867610-2-esl-MX/Cuando-volveremos-a-ir-a-conciertos-con-normalidad.png",
      title: "Concierto",
      date: "Fecha",
      time: "Hora",
    },
    // Puedes agregar más tarjetas según sea necesario
  ];

  return (
    <Container
      sx={{
        position: "relative",
        alignItems: "flex-start",
        flexDirection: "column",
      }}
    >
      <Typography sx={stylesSubtitules}>Eventos</Typography>

      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          gap: {
            xs: "4rem",
            sm: "5rem",
            // md: "10rem",
            // lg: "10rem",
            xl: "12.7rem",
          },
          justifyContent: { xl: "center", sx: "center", xs: "center" },
        }}
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
    </Container>
  );
};

export default Events;
