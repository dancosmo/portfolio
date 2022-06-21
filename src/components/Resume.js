import { useEffect, useState } from 'react';
import {
	Grid,
	Paper,
	Typography,
	Container,
	Slide,
	CircularProgress,
	useTheme,
} from '@mui/material';
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
	download: 'Download',
};
const contentSpanish = {
	skills: 'Habilidades',
	download: 'Descargar',
};

function Resume() {
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
		<Slide direction='left' in={checked} mountOnEnter unmountOnExit>
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				<Grid item xs={4}>
					<Paper
						sx={{
							backgroundColor: theme.palette.grey[900],
							px: 2,
							py: 2,
						}}
					>
						<Typography
							color='secondary'
							component='h1'
							variant='h4'
							mb={2}
							sx={{ textAlign: 'center' }}
						>
							{content.skills}
						</Typography>
						<Container>
							<Grid container>
								{badges
									? badges.map(element => (
											<Grid
												container
												direction='row'
												alignItems='center'
												key={element.name}
												my={1}
												item
												xs={12}
												textAlign='center'
											>
												<img
													width='48px'
													height='auto'
													src={element.badge}
													alt='skill-preview'
													onLoad={loadingComplete}
												/>
												<Typography
													color='secondary'
													component='h1'
													variant='h6'
													ml={2}
												>
													{element.name}
												</Typography>
												{loading ? (
													<CircularProgress color='secondary' />
												) : null}
											</Grid>
									  ))
									: null}
							</Grid>
						</Container>
					</Paper>
				</Grid>
				<Grid item xs={8}>
					<Pdf download={content.download} />
				</Grid>
			</Grid>
		</Slide>
	);
}

export default Resume;
