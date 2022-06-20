import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material';
import ListItem from './ListItem';
import InfoIcon from '@mui/icons-material/Info';
import ArticleIcon from '@mui/icons-material/Article';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const optionsEnglish = {
  aboutme: `About Me`,
  projects: `My Projects`,
  resume: `Skills`,
};
const optionsSpanish = {
  aboutme: `Sobre Mí`,
  projects: `Mis Proyectos`,
  resume: `Habilidades`,
};

const SideBar = () => {
  const theme = useTheme();
  let language = theme.language;

  const [content, setContent] = useState(optionsEnglish);

  useEffect(() => {
    language === true
      ? setContent(optionsEnglish)
      : setContent(optionsSpanish);
  }, [language]);

  const color = theme.palette.type === 'dark' ? 'white' : 'black';

  return (
    <>
      <ListItem
        path="/"
        InfoIcon={InfoIcon}
        text={content.aboutme}
        color={color}
      />
      <ListItem
        path="/projects"
        InfoIcon={ArticleIcon}
        text={content.projects}
        color={color}
      />
      <ListItem
        path="/resume"
        InfoIcon={AssignmentIndIcon}
        text={content.resume}
        color={color}
      />
    </>
  );
};

export default SideBar;
