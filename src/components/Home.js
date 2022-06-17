import { useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  List,
  Box,
  Toolbar,
  IconButton,
  Divider,
  CssBaseline,
  Container,
  Button
} from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FallingStars from "./falling-stars/FallingStars";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import background from "../images/background-1.jpg";
import SideBar from "./SideBar";
import AboutMe from "./AboutMe";
import MyProjects from "./MyProjects";
import Resume from "./Resume";
import Contact from "./Contact";

import CallIcon from "@mui/icons-material/Call";
import gmail from "../images/gmail.svg";
import discord from "../images/discord.svg";
import linkedin from "../images/linkedin.svg";
import skype from "../images/skype.svg";
import github from "../images/github.svg";

const mdTheme = createTheme({
  language: true,
  typography: {
    fontFamily: [
      "Source Code Pro",
      "monospace",
      "-apple-system",
      "BlinkMacSystemFont",
    ].join(","),
  },
  palette: {
    type: "dark",
    primary: {
      main: "#591bbf",
    },
    secondary: {
      main: "#ffff00",
    },
    action:{
      hover:"rgba(242, 255, 0, 0.5)",
    }
  },
});

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    borderColor: "white",
    backgroundColor: `${
      mdTheme.palette.type === "dark"
        ? mdTheme.palette.grey[900]
        : mdTheme.palette.grey[100]
    }`,
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

function Content() {
  const [open, setOpen] = useState(true);
  const [switchLenguage, setSwitchLenguage] = useState(true);

  const changeLanguage = () => {
    setSwitchLenguage(!switchLenguage);
    mdTheme.language = !mdTheme.language;
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar position="absolute" open={open}>
            <Toolbar
              sx={{
                pr: "24px",
                textAlign: "center", // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge="start"
                color="primary"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: "36px",
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon
                  sx={{
                    color: "white",
                  }}
                />
              </IconButton>
              <Typography
                component="h1"
                variant="h4"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
              >
                {`<Daniel Perez/>`}
              </Typography>

              <Button variant="outlined" onClick={changeLanguage} color="secondary" aria-label="change to english">
                <Typography>{switchLenguage ? 'ESPAÑOL' : 'ENGLISH'}</Typography>
              </Button>

            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <Toolbar
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                px: [1],
                backgroundColor: (theme) =>
                  theme.palette.type === "dark"
                    ? theme.palette.grey[900]
                    : theme.palette.grey[100],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon
                  sx={{
                    color: "white",
                  }}
                />
              </IconButton>
            </Toolbar>
            <Divider sx={{ borderColor: "white" }} />

            <List
              component="nav"
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.type === "dark"
                    ? theme.palette.grey[900]
                    : theme.palette.grey[100],
              }}
            >
              <SideBar theme={mdTheme} />
              <Divider sx={{ my: 1, borderColor: "white" }} />
            </List>
            <List>
              <ListItemButton onClick={() => setOpen(!open)}>
                <ListItemIcon>
                  <CallIcon sx={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary={switchLenguage ? `Contact Me` : `Contacto`}sx={{ color: `white` }} />
              </ListItemButton>
              <Contact
                img={gmail}
                behavior="copy"
                text="Gmail"
                link="cosmowebdeveloper@gmail.com"
                alertText={switchLenguage ? `cosmowebdeveloper@gmail.com was copied to the clipboard` : `cosmowebdeveloper@gmail.com se ha copiado al clipboard`}
              />
              <Contact
                behavior="copy"
                img={discord}
                text="Discord"
                link="DC#1495"
                alertText={switchLenguage ? `DC#1495 was copied to the clipboard` : `DC#1495 se ha copiado al clipboard`}
              />
              <Contact
                behavior="redirect"
                img={linkedin}
                text="Linkedin"
                link="https://www.linkedin.com/in/dancosmo/"
                
              />
              <Contact
                behavior="redirect"
                img={skype}
                text="Skype"
                link="https://join.skype.com/invite/f259dqj3nTzr"
                
              />
              <Contact
                behavior="redirect"
                img={github}
                text="Github"
                link="https://github.com/dancosmo"
                
              />
            </List>
          </Drawer>
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "dark"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar />
            <Container
              maxWidth="auto"
              sx={{
                pt: 4,
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
              }}
            >
              <Routes>
                <Route path="/" element={<AboutMe />}></Route>
                <Route path="/projects" element={<MyProjects />}></Route>
                <Route path="/resume" element={<Resume />}></Route>
              </Routes>
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
      <FallingStars />
    </BrowserRouter>
  );
}

export default function Home() {
  return <Content />;
}
