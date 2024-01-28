import { LinkedIn } from "@mui/icons-material";
import Twitter from "@mui/icons-material/X";
import { Box, Link } from "@mui/material";
const styleSocialRed = { fontSize: "3.2rem" };
const Social = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Link href="#" color="inherit" sx={{ display: "block" }}>
          <Twitter sx={styleSocialRed} />
        </Link>
        <Link href="#" color="inherit" sx={{ display: "block" }}>
          <LinkedIn sx={styleSocialRed} />
        </Link>
      </Box>

      <Link
        href="#"
        color="inherit"
        sx={{ display: "block", textDecoration: "none", fontSize: "2rem" }}
      >
        asdasd@asd.com
      </Link>
    </Box>
  );
};

export default Social;
