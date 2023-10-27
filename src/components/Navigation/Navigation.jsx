import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { MENU } from "../constants/constants";
import "./Navigation.css";
import Drawer from "@mui/material/Drawer";

export default function Navigation({ scrollToSection }) {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [isSearchFocused, setIsSearchFocused] = React.useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  // Добавьте функцию для прокрутки к секции
  const handleScrollToSection = (sectionName) => {
    scrollToSection(sectionName);
  };

  return (
    <React.Fragment>
      <AppBar
        className={`navigation-container ${
          isSearchFocused ? "search-focused" : ""
        }`}
        sx={{
          backgroundColor: "rgba(20, 20, 20, 0.7)",
          position: "fixed",
          zIndex: 100,
          top: 0,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              size="large"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              color="inherit"
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>

            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                display: { xs: "none", md: "flex" },
              }}
            >
              <Box
                className="navLinkContainer"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                {MENU.map(({ name }, index) => (
                  <a
                    key={index}
                    className="navLink"
                    onClick={() => handleScrollToSection(name)}
                  >
                    {name}
                  </a>
                ))}
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={handleDrawerClose}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "rgba(20, 20, 20, 0.3)",
            color: "#fff",
          },
        }}
      >
        <Box
          sx={{
            width: 250,
            display: "flex",
            flexDirection: "column",
            paddingTop: 2,
          }}
        >
          {MENU.map(({ name }, index) => (
            <a
              key={index}
              className="drawerNavLink"
              onClick={() => handleScrollToSection(name)}
              style={{
                color: "red",
                fontWeight: "bold",
                margin: "10px",
              }}
            >
              {name}
            </a>
          ))}
        </Box>
      </Drawer>
    </React.Fragment>
  );
}
