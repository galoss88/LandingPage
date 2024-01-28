import { LinkedIn, MailOutline, Twitter } from "@mui/icons-material";
import { Box, Divider, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#333",
        color: "#fff",
        padding: "2rem",
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
        <Typography variant="h6">LOGO</Typography>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ mx: 2, height: "2rem", backgroundColor: "#fff" }}
        />
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="h6">About Us</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
        </Box>
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="h6">Quick Links</Typography>
          <Link
            href="#"
            color="inherit"
            underline="hover"
            sx={{ display: "block" }}
          >
            Link 1
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="hover"
            sx={{ display: "block" }}
          >
            Link 2
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="hover"
            sx={{ display: "block" }}
          >
            Link 3
          </Link>
        </Box>
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="h6">Social</Typography>
          <Link href="#" color="inherit" sx={{ display: "block" }}>
            <Twitter />
          </Link>
          <Link href="#" color="inherit" sx={{ display: "block" }}>
            <LinkedIn />
          </Link>
          <Link href="#" color="inherit" sx={{ display: "block" }}>
            <MailOutline />
          </Link>
        </Box>
      </Box>

      <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body2">
          2023 Nombre. All rights reserved.
        </Typography>
        <Typography variant="body2">
          <Link href="#">Terms and Conditions</Link> |{" "}
          <Link href="#">Privacy Policy</Link> | <Link href="#">Security</Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
