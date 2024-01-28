import React from "react";
import { Grid, Avatar, Typography, Box } from "@mui/material";

interface ImageObject {
  url: string;
  title: string;
}

interface CustomHookProps {
  images: ImageObject[];
}

const useCreateServices = ({ images }: CustomHookProps) => {
  const generateGrid = () => {
    const rows: JSX.Element[] = [];

    for (let i = 0; i < images.length; i += 4) {
      const rowImages = images.slice(i, i + 4);

      const row = (
        <Grid container spacing={2} key={i}>
          {rowImages.map((image, index) => (
            <Grid item xs={12} sm={3} key={index}>
              <Box
                sx={{
                  textAlign: "center",
                  marginBottom: 4,
                }}
              >
                <Avatar
                  alt={image.title}
                  src={image.url}
                  sx={{
                    width: "80px",
                    height: "80px",
                    margin: "0 auto 1.2rem auto",
                  }}
                />
                <Typography
                 
                  variant="subtitle1"
                >
                  {image.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      );

      rows.push(row);
    }

    return rows;
  };

  const ImageGrid: React.FC = () => {
    return (
      <Box sx={{ flexGrow: 1, marginTop: 2 }}>
        {generateGrid().map((row, index) => (
          <div key={index}>{row}</div>
        ))}
      </Box>
    );
  };

  return { ImageGrid };
};

export default useCreateServices;
