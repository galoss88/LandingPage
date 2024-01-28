import { Box, Divider, Link, List, ListItem, Typography } from "@mui/material";
import { Social } from "./components/social";
interface Links {
  title: string;
  url: string;
}
const links: Links[] = [
  { title: "imput", url: "" },
  { title: "imput", url: "" },
  { title: "imput", url: "" },
];
const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "transparent",
        color: "#fff",
        padding: "5rem",
        textAlign: "center",
        height: "33.2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          backgroundColor: "transparent",

          color: "#fff",
          padding: "5rem",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography fontSize={"3.25rem"} fontWeight={700} variant="h6">
              LOGO
            </Typography>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ mx: 2, my: 0, height: "18.6rem", backgroundColor: "#fff" }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                flexDirection: "column",
                width: "auto",
                flexWrap: "wrap",
              }}
            >
              <Typography sx={{ fontSize: "1.6rem" }} variant="h6">
                About Us
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  maxWidth: "300px",
                  textAlign: "justify",
                  fontSize: "1.2rem",
                  fontWeight: "300",
                }}
              >
                {/* Establece un ancho máximo para el párrafo */}
                Lorem ipsum dolor sit amet consectetur. Eget est diam pharetra
                porttitor malesuada facilisi. Dui lorem eget morbi diam. Sit
                justo vitae venenatis est nunc vel tellus auctor. Odio tincidunt
                tempor hendrerit nunc felis aliquet urna mollis quam.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h6" sx={{ fontSize: "1.6rem" }}>
            Quick Links
          </Typography>
          <List dense component="nav">
            {links?.map(({ title, url }) => (
              <ListItem key={title}>
                <Typography variant="body2">
                  <Box component="span" marginRight={1}>
                    &bull; {/* Viñeta */}
                  </Box>
                  <Link href={url} color="inherit" underline="hover">
                    {title}
                  </Link>
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
        <Social />
      </Box>

      <Box
        sx={{
          mt: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          width: "100%",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#FFF",
            fontFamily: "Mosk",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
          }}
        >
          2023 Nombre. All rights reserved.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#F5F5F5",
            fontFamily: "Mosk",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: 300,
            lineHeight: "normal",
            // Otras propiedades según sea necesario
          }}
        >
          <Link href="#">Terms and Conditions</Link>
          <Link href="#">Privacy Policy</Link> | <Link href="#">Security</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
