import { useEffect, useState } from 'react';
import { Grid, Paper, Grow, CircularProgress, useTheme } from '@mui/material';
import { StyledTypography } from './Home';
import Pdf from './pdfs/Pdf';
import reactBadge from '../images/skills/icons8-react.svg';
import jsBadge from '../images/skills/icons8-javascript.svg';
import firebaseBadge from '../images/skills/icons8-firebase.svg';
import routerBadge from '../images/skills/icons8-react-router.svg';
import materialBadge from '../images/skills/icons8-material-ui.svg';
import nodeBadge from '../images/skills/icons8-node-js.svg';
import reduxBadge from '../images/skills/icons8-redux.svg';

const contentEnglish = {
	skills: 'Main Skills',
	download: 'Open',
};
const contentSpanish = {
	skills: 'Habilidades',
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

	const badges = [
		{ badge: jsBadge, name: 'Javascript' },
		{ badge: reactBadge, name: 'React' },
		{ badge: routerBadge, name: 'React Router' },
		{ badge: reduxBadge, name: 'Redux' },
		{ badge: materialBadge, name: 'Material UI' },
		{ badge: firebaseBadge, name: 'Firebase' },
		{ badge: nodeBadge, name: 'Node.JS' },
	];

	return (
		<Grow in={checked} mountOnEnter unmountOnExit>
			<Grid
				justifyContent='center'
				alignItems='center'
				container
				flexDirection='column'
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				<Grid item xs={12}>
					<Paper
						sx={{
							backgroundColor: theme.palette.grey[900],
							py: 2,
						}}
					>
						<StyledTypography
							color='secondary'
							variant='h5'
							mb={2}
							sx={{ textAlign: 'center' }}
						>
							{content.skills}
						</StyledTypography>

						<Grid flexDirection='row' container>
							{badges
								? badges.map(element => (
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
				<Grid item xs={12}>
					<Pdf download={content.download} />
				</Grid>
			</Grid>
		</Grow>
	);
}

export default Skills;
