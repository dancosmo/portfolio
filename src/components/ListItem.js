import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';

const ListItem = ({ InfoIcon, text, color, path }) => {
  const navigate = useNavigate();

  return (
    <ListItemButton onClick={() => navigate(`${path}`)}>
      <ListItemIcon>
        <InfoIcon sx={{ color: `${color}` }} />
      </ListItemIcon>
      <ListItemText primary={text} sx={{ color: `${color}` }} />
    </ListItemButton>
  );
};

export default ListItem;
