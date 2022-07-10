import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import HandymanIcon from '@mui/icons-material/Handyman';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ListItem from './ListItem';

const optionsEnglish = {
	aboutme: 'About Me',
	projects: 'My Projects',
	resume: 'Skills',
};
const optionsSpanish = {
	aboutme: 'Sobre Mí',
	projects: 'Mis Proyectos',
	resume: 'Habilidades',
};

function SideBar() {
	const theme = useTheme();
	const { language } = theme;

	const [content, setContent] = useState(optionsEnglish);

	useEffect(() => {
		if (language === true) {
			setContent(optionsEnglish);
		} else {
			setContent(optionsSpanish);
		}
	}, [language]);

	return (
		<>
			<ListItem
				path='/'
				InfoIcon={InfoIcon}
				text={content.aboutme}
				color='white'
			/>
			<ListItem
				path='/projects'
				InfoIcon={HandymanIcon}
				text={content.projects}
				color='white'
			/>
			<ListItem
				path='/skills'
				InfoIcon={AssignmentIndIcon}
				text={content.resume}
				color='white'
			/>
		</>
	);
}

export default SideBar;
