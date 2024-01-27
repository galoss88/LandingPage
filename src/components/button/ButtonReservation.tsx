// ButtonHacerReserva.tsx

import React from "react";
import Button from "@mui/material/Button";

interface ButtonHacerReservaProps {
  onClick?: () => void;
  title?: string;
}

const ButtonReservation: React.FC<ButtonHacerReservaProps> = ({
  onClick,
  title = "Titulo Boton",
}) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "white",
        color: " #AE9672",
        fontSize: "20px",
        fontWeight: 500,
        width:"100%"
      }}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default ButtonReservation;
