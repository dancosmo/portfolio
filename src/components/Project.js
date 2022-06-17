import { Grid, Typography, Link } from "@mui/material";
import { Container } from "@mui/system";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Project = ({ name, description, image, badges, link }) => {

    const imageAlt = `${name}-preview`

  return (
    <>
      <Grid item xs={6}>
        <Typography
          color="secondary"
          component="h1"
          variant="h4"
          mb={2}
        >
            {name}
        </Typography>
        <Typography color="white" component="h1" variant="h5" mb={4}>
          {description}
        </Typography>
        <Container>
            {badges ? badges.map(badge =>{
              const key = badge.slice(30,60);
                return (
                        <img key={key} src={badge} alt={imageAlt}></img>
                )
            }) : null}
        </Container>
        <Link
          href={link}
          target="_blank"
          color="secondary"
          sx={{ float: "right" }}
        >
          <Typography color="secondary" component="h1" variant="h4" mt={2}>Link <ArrowRightIcon/></Typography>
        </Link>
      </Grid>
      <Grid item xs={6}>
      <Container
          sx={{
            maxWidth: "600px !important",
          }}
        >
          <img
            style={{ width: "100%", height: "auto" }}
            src={image}
            alt="project-preview"
          ></img>
        </Container>
      </Grid>
    </>
  );
};

export default Project;
