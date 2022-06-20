import { Grid, Paper, Typography } from '@mui/material';
import Contact from './Contact';
import gmail from '../images/gmail.svg';
import discord from '../images/discord.svg';
import linkedin from '../images/linkedin.svg';
import skype from '../images/skype.svg';

const ContacMe = () => {
  const text = {
    title: 'Contact Me',
    content:
      "I'm currently looking for the right opportunity to keep expanding and improving my skills as a programmer in a job, I'm always open to learn any new tecnologies that are required in the situation.",
  };

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Grid xs={12}>
        <Typography
          textAlign="center"
          component="h1"
          variant="h4"
          color="secondary"
          mt={2}
        >
          {text.title}
        </Typography>
        <Paper
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            px: 2,
            py: 2,
          }}
          variant="outlined"
          color="primary"
        >
          <Typography color="white" variant="h5">
            {text.content}
          </Typography>
        </Paper>
      </Grid>

      <Grid alignItems="center" container xs={12} px={2} py={2}>
        <Contact img={gmail} text="Gmail" link="" />
        <Contact img={discord} text="Discord" link="" />
        <Contact img={linkedin} text="Linkedin" link="" />
        <Contact img={skype} text="Skype" link="" />
      </Grid>
    </Grid>
  );
};

export default ContacMe;
