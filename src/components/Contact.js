import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

const Contact = ({ img, text, link, alertText, behavior }) => {
  const copy = async () => {
    const copyLink = link;
    await navigator.clipboard.writeText(copyLink);
    alert(alertText);
  };

  const redirect = () => {
    window.open(`${link}`, '_blank');
  };

  const behaviorHandler = () => {
    if (behavior === 'redirect') {
      return (
        <>
          <ListItemButton onClick={() => redirect()}>
            <ListItemIcon>
              <img width="24" src={img} alt="text-preview"></img>
            </ListItemIcon>
            <ListItemText primary={text} sx={{ color: `white` }} />
          </ListItemButton>
        </>
      );
    } else {
      return (
        <>
          <ListItemButton onClick={() => copy()}>
            <ListItemIcon>
              <img width="24" src={img} alt="text-preview"></img>
            </ListItemIcon>
            <ListItemText primary={text} sx={{ color: `white` }} />
          </ListItemButton>
        </>
      );
    }
  };

  return behaviorHandler();
};

export default Contact;
