import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";

const pages = ["Home", "Services", "Contact me"];

const Navbar = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const [currentPg, setCurrentPg] = useState("Home");

  return (
    <AppBar
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        backgroundColor: `${trigger ? "#F5F5F7" : "transparent"}`,
        transition: "0.6s",
        color: `${trigger ? "black" : "white"}`,
        height: 55,
      }}
      elevation={trigger ? 4 : 0}
    >
      <Toolbar sx={{ height: 55 }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: 55,
          }}
        >
          <Box>
            <Typography variant='h1' sx={{ fontSize: 30, fontWeight: 500 }}>
              M.Shaikh
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 4, height: "100%" }}>
            {pages.map((page, i) => {
              return (
                <Box key={i}>
                  <Typography
                    onClick={() => {
                      setCurrentPg(page);
                    }}
                    sx={{
                      fontSize: 20,
                      height: 50.5,
                      cursor: "pointer",
                      paddingInline: 1,
                      borderBottom: 3,
                      borderColor: `${
                        currentPg === page ? "#FF4532" : "transparent"
                      }`,
                      display: "grid",
                      placeItems: "center",
                      transition: "0.2s",
                    }}
                  >
                    {page}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
