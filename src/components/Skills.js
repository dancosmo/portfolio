import { useEffect, useState } from 'react';
import { Grid, Paper, Grow, CircularProgress, useTheme } from '@mui/material';
import { StyledTypography } from './Home';
import Pdf from './pdfs/Pdf';
import reactBadge from '../images/skills/icons8-react.svg';
import jsBadge from '../images/skills/icons8-javascript.svg';
import tsBadge from '../images/skills/icons8-typescript.svg';
import firebaseBadge from '../images/skills/icons8-firebase.svg';
import routerBadge from '../images/skills/icons8-react-router.svg';
import nodeBadge from '../images/skills/icons8-node-js.svg';
import reduxBadge from '../images/skills/icons8-redux.svg';
import adapBadge from '../images/soft-skills/icons8-adaptable-64.png';
import commBadge from '../images/soft-skills/icons8-communication-skill-64.png';
import critBadge from '../images/soft-skills/icons8-critical-thinking-64.png';
import innoBadge from '../images/soft-skills/icons8-innovation-64.png';
import solvBadge from '../images/soft-skills/icons8-solving-64.png';
import sprintBadge from '../images/soft-skills/icons8-sprint-iteration-48.png';
import teamBadge from '../images/soft-skills/icons8-meeting-64.png';

const contentEnglish = {
	HardSkills: 'Hard Skills',
	SoftSkills: {
		title: 'Soft Skills',
		adaptability: 'Adaptability',
		creativity: 'Creativity',
		critical: 'Critical Thinking',
		comm: 'Good Communication',
		solving: 'Problem Solving',
		sprint: 'Scrum',
		team: 'Teamwork',
	},
	download: 'Open',
};
const contentSpanish = {
	HardSkills: 'Habilidades Duras',
	SoftSkills: {
		title: 'Habilidades Blandas',
		adaptability: 'Adaptabilidad',
		creativity: 'Creatividad',
		critical: 'Pensamiento Crítico',
		comm: 'Comunicación Clara',
		solving: 'Res. de Problemas',
		sprint: 'Scrum',
		team: 'Trabajo en Equipo',
	},
	download: 'Abrir',
};

function Skills() {
	const theme = useTheme();
	const { language } = theme;
	const [checked, setChecked] = useState(false);
	const [content, setContent] = useState(contentEnglish);
	const [loading, setLoading] = useState(true);

	const loadingComplete = loading ? setLoading(false) : null;

	useEffect(() => {
		setChecked(true);

		if (language === true) {
			setContent(contentEnglish);
		} else {
			setContent(contentSpanish);
		}
	}, [language]);

	const badgesH = [
		{ badge: tsBadge, name: 'TypeScript' },
		{ badge: jsBadge, name: 'JavaScript' },
		{ badge: reactBadge, name: 'React' },
		{ badge: routerBadge, name: 'React Router' },
		{ badge: reduxBadge, name: 'Redux' },
		{ badge: firebaseBadge, name: 'Firebase' },
		{ badge: nodeBadge, name: 'Node.JS' },
	];
	const badgesS = [
		{ badge: adapBadge, name: content.SoftSkills.adaptability },
		{ badge: innoBadge, name: content.SoftSkills.creativity },
		{ badge: critBadge, name: content.SoftSkills.critical },
		{ badge: commBadge, name: content.SoftSkills.comm },
		{ badge: solvBadge, name: content.SoftSkills.solving },
		{ badge: sprintBadge, name: content.SoftSkills.sprint },
		{ badge: teamBadge, name: content.SoftSkills.team },
	];

	return (
		<Grow in={checked} mountOnEnter unmountOnExit>
			<Grid
				container
				flexDirection='row'
				justifyContent='center'
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				<Grid item xs={5}>
					<Paper
						sx={{
							backgroundColor: theme.palette.grey[900],
							py: 2,
						}}
					>
						<StyledTypography
							color='secondary'
							variant='h5'
							mx={2}
							mb={2}
							sx={{ textAlign: 'center' }}
						>
							{content.HardSkills}
						</StyledTypography>

						<Grid flexDirection='column' container>
							{badgesH
								? badgesH.map(element => (
										<Grid
											item
											container
											direction='row'
											alignItems='center'
											key={element.name}
											mx={2}
											xs='auto'
										>
											<img
												width='24px'
												height='auto'
												src={element.badge}
												alt='skill-preview'
												onLoad={loadingComplete}
											/>
											<StyledTypography color='secondary' variant='h6' ml={2}>
												{element.name}
											</StyledTypography>
											{loading ? <CircularProgress color='secondary' /> : null}
										</Grid>
								  ))
								: null}
						</Grid>
					</Paper>
				</Grid>
				<Grid item xs={5}>
					<Paper
						sx={{
							backgroundColor: theme.palette.grey[900],
							py: 2,
						}}
					>
						<StyledTypography
							color='secondary'
							variant='h5'
							mx={2}
							mb={2}
							sx={{ textAlign: 'center' }}
						>
							{content.SoftSkills.title}
						</StyledTypography>

						<Grid flexDirection='column' container>
							{badgesS
								? badgesS.map(element => (
										<Grid
											item
											container
											direction='row'
											alignItems='center'
											key={element.name}
											mx={2}
											xs='auto'
										>
											<img
												width='24px'
												height='auto'
												src={element.badge}
												alt='skill-preview'
												onLoad={loadingComplete}
											/>
											<StyledTypography color='secondary' variant='h6' ml={2}>
												{element.name}
											</StyledTypography>
											{loading ? <CircularProgress color='secondary' /> : null}
										</Grid>
								  ))
								: null}
						</Grid>
					</Paper>
				</Grid>
				<Grid item xs={10}>
					<Pdf download={content.download} />
				</Grid>
			</Grid>
		</Grow>
	);
}

export default Skills;
