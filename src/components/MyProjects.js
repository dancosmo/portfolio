import { useEffect, useState } from "react";
import { useTheme } from "@mui/material";

import { Grid, Typography, Slide } from "@mui/material";
import Project from "./Project";
import watchatImage from "../images/watchat-preview.PNG";
import rpsImage from "../images/RPS-preview.PNG";
import postyImage from "../images/posty-preview.PNG";
import reactBadge from "../images/react.svg";
import jsBadge from "../images/javascript.svg";
import firebaseBadge from "../images/firebase.svg";
import bootstrapBadge from "../images/Bootstrap.svg";
import routerBadge from "../images/react-router.svg";
import materialBadge from "../images/material.svg";
import mongoBadge from "../images/mongodb.svg";
import nodeBadge from "../images/node.svg";
import reduxBadge from "../images/redux.svg";
import herokuBadge from "../images/heroku.svg";
import netlifybadge from "../images/netlify.svg";

const contentEnglish = {
  title:`My Projects`,
  watchatTitle: "Watchat",
  watchatContent: "React app to for chatting, watching videos and share the video.",
  rpsTitle: `Rock, Paper, Scissors`,
  rpsContent: "Simple Rock Paper Scissors game with multiplayer mode for 2 players and spectator.",
  postyTitle: `Posty`,
  postyContent: "Posty is for sharing experiences. You can also like, edit or delete them!.",

};

const contentSpanish = {
  title:`Mis Proyectos`,
  watchatTitle: "Watchat",
  watchatContent: "Aplicación React para chatear, ver videos y compartir el video.",
  rpsTitle: `Piedra, Papel, Tijeras!`,
  rpsContent: "El conocido juego con multiplayer para 2 jugadores y espectador.",
  postyTitle: `Posty`,
  postyContent: "Es una app para compartir experiencias. Tiene funciones de ¨Like¨, editar y borrar.",

};

const MyProjects = () => {
  const theme = useTheme();
  let language = theme.language;
  const [checked, setChecked] = useState(false);
  const [content, setContent] = useState(contentEnglish);

  useEffect(() => {
    setChecked(true);

    language === true ? setContent(contentEnglish) : setContent(contentSpanish);

  }, [language]);

  const badges = {
    watchat: [
      jsBadge,
      reactBadge,
      routerBadge,
      bootstrapBadge,
      firebaseBadge,
      netlifybadge,
    ],
    rps: [jsBadge, reactBadge, routerBadge, firebaseBadge, netlifybadge],
    posty: [
      jsBadge,
      reactBadge,
      reduxBadge,
      routerBadge,
      materialBadge,
      nodeBadge,
      mongoBadge,
      netlifybadge,
      herokuBadge,
    ],
  };

  return (
    <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={12}>
          <Typography color="white" component="h1" variant="h3">
            {content.title}
          </Typography>
        </Grid>
        <Project
          name={content.watchatTitle}
          description={content.watchatContent}
          image={watchatImage}
          badges={badges.watchat}
          link="https://watchat-cosmo.netlify.app/"
        />
        <Project
          name={content.rpsTitle}
          description={content.rpsContent}
          image={rpsImage}
          badges={badges.rps}
          link="https://rock-paper-scissors-cosmo.netlify.app/"
        />
        <Project
          name={content.postyTitle}
          description={content.postyContent}
          image={postyImage}
          badges={badges.posty}
          link="https://posty-cosmo.netlify.app/"
        />
      </Grid>
    </Slide>
  );
};

export default MyProjects;
