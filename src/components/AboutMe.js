import { useEffect, useState } from 'react';
import {
	useTheme,
	CircularProgress,
	Grid,
	Avatar,
	Paper,
	Grow,
	Box,
} from '@mui/material';
import profile from '../images/miniature-removebg-preview.png';
import handWave from '../images/wave-hello.gif';
import { StyledTypography } from './Home';

const contentEnglish = {
	greeting: 'Hi there!',
	aboutme:
		'Mechatronics Engineer that has great passion for coding and technology. I made my first steps with Visual Basic and Assembly, loading code into Microcontrollers using Pic Programmers. Later I started with web software development and have been learning more ever since.',
	checkvideo: 'Check  out my 30 seconds presentation video',
	videoLink: 'https://www.youtube.com/embed/jAHsgmppgQ4',
};

const contentSpanish = {
	greeting: 'Hey hola!',
	aboutme:
		'Ingeniero en Mecatrónica con gran pasión por el código y la tecnología. Di mis primeros pasos con Visual Basic y Ensamblador, cargando código a microcontroladores con programadores PIC. Luego empecé con el desarrallo web y desde entonces me he enfocado en este.',
	checkvideo: 'Mira mi presentación de 30 segundos',
	videoLink: 'https://www.youtube.com/embed/EqgOa1AvmDE',
};

const AboutMe = () => {
	const theme = useTheme();
	const language = theme.language;
	const [checked, setChecked] = useState(false);
	const [aboutMe, setAboutMe] = useState(contentEnglish);
	const [loading, setLoading] = useState(true);

	const loadingComplete = loading => (loading ? setLoading(false) : null);

	useEffect(() => {
		setChecked(true);
		language === true ? setAboutMe(contentEnglish) : setAboutMe(contentSpanish);
	}, [language]);

	return (
		<Grow in={checked} mountOnEnter unmountOnExit>
			<Grid
				justifyContent='center'
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				<Grid
					item
					xs={4}
					sx={{ display: 'flex', justifyContent: 'space-around' }}
				>
					<Avatar
						sx={{ width: 200, height: 200 }}
						src={profile}
						alt='profile-picture'
						onLoad={loadingComplete}
					></Avatar>
					{loading ? <CircularProgress color='secondary' /> : null}
				</Grid>
				<Grid item xs={8}>
					<Paper
						sx={{
							backgroundColor: theme.palette.grey[900],
							px: 2,
							py: 2,
						}}
						variant='outlined'
						color='primary'
					>
						<StyledTypography color='white' component='h1' variant='h4'>
							{aboutMe.greeting}{' '}
							<img width='30px' src={handWave} alt='hand-wave'></img>
						</StyledTypography>
						<StyledTypography
							sx={{ textAlign: 'left' }}
							color='white'
							variant='h5'
							mt={2}
						>
							{aboutMe.aboutme}
						</StyledTypography>
					</Paper>
				</Grid>

				<Grid item xs={12} mt={8}>
					<StyledTypography
						sx={{ textAlign: 'center' }}
						color='white'
						variant='h5'
						mt={2}
						mb={2}
					>
						{aboutMe.checkvideo}
					</StyledTypography>
					<Box
						sx={{
							position: 'relative',
							overflow: 'hidden',
							width: '100%',
							paddingTop: '56.25%',
						}}
					>
						<iframe
							style={{
								position: 'absolute',
								marginRight: 'auto',
								marginLeft: 'auto',
								top: '0',
								left: '0',
								bottom: '0',
								right: '0',
								width: '75%',
								height: '75%',
							}}
							src={aboutMe.videoLink}
							title='YouTube video player'
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen='off'
							alt='my-video'
						></iframe>
					</Box>
				</Grid>
			</Grid>
		</Grow>
	);
};

export default AboutMe;
