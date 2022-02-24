import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import HomeSvg from "../utils/svg/home-svg.svg";
import HomeBack from "../utils/images/black-background.jpg";
import React from "react";
import { ThemeProvider } from "@emotion/react";
import { customTheme } from "../utils/MuiTheme";

const HomeMain = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Box
        sx={{
          backgroundColor: "#000",
          backgroundImage: `url(${HomeBack})`,
          backgroundSize: "cover",
          height: "95vh",
        }}
      >
        <Container
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
          }}
          maxWidth='lg'
        >
          <Box
            id='main'
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box id='text'>
              <Box id='Iam' sx={{ mb: 2 }}>
                <Typography
                  color='primary.light'
                  variant='h3'
                  sx={{ fontSize: 40 }}
                >
                  I am
                </Typography>
                <Typography variant='h1' sx={{ fontSize: 70, fontWeight: 400 }}>
                  Munavar Shaikh
                </Typography>
              </Box>
              <Box id='cyberSec'>
                <Typography
                  color='secondary'
                  variant='h1'
                  sx={{
                    fontSize: 40,
                    fontWeight: 400,
                    animation: "come-up 2s ease-out",
                  }}
                >
                  a cyber security expert
                </Typography>
              </Box>
            </Box>
            <Box
              id='svgHolder'
              sx={{ height: 600, width: 600, transform: "translateX(110px)" }}
            >
              <Box
                component='img'
                src={HomeSvg}
                sx={{ height: "100%", width: "100%" }}
              />
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default HomeMain;
