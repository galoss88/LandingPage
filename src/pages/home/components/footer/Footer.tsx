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
        padding: "15rem 0",
        textAlign: "center",
        height: { xl: "33.2rem", xs: "55rem" },
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
          flexDirection: { xs: "column", xl: "row" },
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
              sx={{
                mx: 2,
                my: 0,
                height: { xs: "10.6rem", xl: "18.6rem" },

                backgroundColor: "#fff",
                width: ".2rem",
              }}
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
            flexDirection: { xl: "row", xs: "row" },
            width: { xl: "auto", xs: "auto" },
            gap: { xl: "3rem", xs: "1rem" },
            marginTop: { xl: "0", xs: "3rem" },
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
          <Social />
        </Box>
      </Box>

      <Box
        sx={{
          mt: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
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
            marginBottom: "4.8rem",
          }}
        >
          2023 Nombre. All rights reserved.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "30%",
            alignItems: "flex-end",
            color: "#F5F5F5",
            fontFamily: "Mosk",
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: 300,
            lineHeight: "normal",
            marginBottom: "4.8rem",

            // Otras propiedades según sea necesario
          }}
        >
          <Link sx={{ textDecoration: "none", color: "inherit" }} href="#">
            Terms and Conditions
          </Link>
          <Link sx={{ color: "inherit", textDecoration: "none" }} href="#">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link sx={{ color: "inherit", textDecoration: "none" }} href="#">
            Security
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
