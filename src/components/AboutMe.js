import { useEffect, useState } from "react";
import { useTheme, CircularProgress } from "@mui/material";
import {
  Grid,
  Typography,
  Avatar,
  Container,
  Paper,
  Slide,
} from "@mui/material";
import profile from "../images/miniature-removebg-preview.png";
import handWave from "../images/wave-hello.gif";



const contentEnglish = {
  greeting:`Hi there!`,
  aboutme: `Mechatronic's Engineer that has great passion for coding and technology. I made my first steps with Visual Basic and Assembly, loading code into Microcontrollers using Pic Pogrammers. Later I started with web software development and have been learning more ever since.`,
  checkvideo: `Check  out my 30 seconds presentation video`,
  videoLink: "https://www.youtube.com/embed/jAHsgmppgQ4",
}

const contentSpanish = {
  greeting:`Hey hola!`,
  aboutme: `Ingeniero en Mecatrónica con gran pasión por el código y la tecnología. Di mis primeros pasos con Visual Basic y Ensamblador, cargador código a microcontroladores con programadores PIC. Luego empecé con el desarrallo web y desde entonces me he enfocado en este.`,
  checkvideo: `Mira mi presentación de 30 segundos`,
  videoLink: "https://www.youtube.com/embed/EqgOa1AvmDE"
}

const AboutMe = () => {
  const theme = useTheme();
  let language = theme.language; 
  const [checked, setChecked] = useState(false);
  const [aboutMe, setAboutMe] = useState(contentEnglish);
  const [loading, setLoading] = useState(true);
  
  const loadingComplete = loading => loading ? setLoading(false) : null;
  
  useEffect(() => {
    setChecked(true);
    language === true ? setAboutMe(contentEnglish) : setAboutMe(contentSpanish);
  }, [language]);

  return (
    <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={3}>
          <Container>
            <Avatar
              sx={{ width: 250, height: 250 }}
              src={profile}
              alt="profile-picture"
              onLoad={loadingComplete}
            ></Avatar>
             {loading ? <CircularProgress color="secondary"/> : null}
          </Container>
        </Grid>
        <Grid item xs={9}>
          <Paper
            sx={{
              backgroundColor: (theme) =>
                theme.palette.type === "dark"
                  ? theme.palette.grey[900]
                  : theme.palette.grey[100],
              px: 2,
              py: 2,
            }}
            variant="outlined"
            color="primary"
          >
            <Typography color="white" component="h1" variant="h4">
              {aboutMe.greeting} <img width="30px" src={handWave} alt="hand-wave"></img>
            </Typography>
            <Typography
              sx={{ textAlign: "center" }}
              color="secondary"
              component="h1"
              variant="h4"
            >
              {}
            </Typography>
            <Typography sx={{textAlign:"justify"}} color="white" variant="h5" mt={2}>
              {aboutMe.aboutme}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} mt={8}>
          <Typography
            sx={{ textAlign: "center" }}
            color="white"
            component="h2"
            variant="h4"
            mt={2}
            mb={2}
          >
            {aboutMe.checkvideo}
          </Typography>
          <Container sx={{ textAlign: "center", position:"relative", overflow:"hidden", width: "100%", paddingTop:"56.25%", }}>
            <iframe
              style={{  position: "absolute",
                top: "0",
                left: "0",
                bottom: "0",
                right: "0",
                width: "100%",
                height: "100%",}}
              src={aboutMe.videoLink}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen="on"
            ></iframe>
          </Container>
        </Grid>

      </Grid>
    </Slide>
  );
};

export default AboutMe;
