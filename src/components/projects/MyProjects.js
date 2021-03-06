import { useEffect, useState } from 'react';
import { useTheme, Grid, Grow } from '@mui/material';
import { StyledTypography } from '../Home';

import Project from './Project';
import watchatImage from '../../images/watchat-preview.PNG';
import rpsImage from '../../images/RPS-preview.PNG';
import postyImage from '../../images/posty-preview.PNG';
import reactBadge from '../../images/react.svg';
import jsBadge from '../../images/javascript.svg';
import firebaseBadge from '../../images/firebase.svg';
import bootstrapBadge from '../../images/Bootstrap.svg';
import routerBadge from '../../images/react-router.svg';
import materialBadge from '../../images/material.svg';
import mongoBadge from '../../images/mongodb.svg';
import nodeBadge from '../../images/node.svg';
import reduxBadge from '../../images/redux.svg';
import herokuBadge from '../../images/heroku.svg';
import netlifybadge from '../../images/netlify.svg';
import cssbadge from '../../images/css.svg';

const contentEnglish = {
	title: 'My Projects',
	watchatTitle: 'Watchat',
	watchatContent: 'React app for chatting, watching and sharing videos.',
	rpsTitle: 'Rock, Paper, Scissors',
	rpsContent:
		'Simple Rock Paper Scissors game with multiplayer mode for 2 players and spectator.',
	postyTitle: 'Posty',
	postyContent:
		'Posty is for sharing experiences. You can also like, edit or delete them!.',
	hackerNewsTitle: 'Hacker News',
	hackerNewsContent:
		'News Search about Angular, React and Vue with infinite scrolling and favorites page.',
};

const contentSpanish = {
	title: 'Mis Proyectos',
	watchatTitle: 'Watchat',
	watchatContent:
		'Aplicación React para chatear, ver videos y compartir el video.',
	rpsTitle: 'Piedra, Papel, Tijeras!',
	rpsContent:
		'El conocido juego con multiplayer para 2 jugadores y espectador.',
	postyTitle: 'Posty',
	postyContent:
		'Es una app para compartir experiencias. Tiene funciones de ¨Like¨, editar y borrar.',
	hackerNewsTitle: 'Hacker Noticias',
	hackerNewsContent:
		'Busqueda de noticias acerca de Angular, React y Vue con scroll infinito y página de favoritos.',
};

const MyProjects = () => {
	const theme = useTheme();
	const language = theme.language;
	const [checked, setChecked] = useState(false);
	const [content, setContent] = useState(contentEnglish);

	useEffect(() => {
		setChecked(true);

		language === true ? setContent(contentEnglish) : setContent(contentSpanish);
	}, [language]);

	const badges = {
		watchat: [
			jsBadge,
			reactBadge,
			routerBadge,
			bootstrapBadge,
			firebaseBadge,
			netlifybadge,
		],
		rps: [jsBadge, reactBadge, routerBadge, firebaseBadge, netlifybadge],
		posty: [
			jsBadge,
			reactBadge,
			reduxBadge,
			routerBadge,
			materialBadge,
			nodeBadge,
			mongoBadge,
			netlifybadge,
			herokuBadge,
		],
		hacker: [jsBadge, reactBadge, routerBadge, cssbadge, netlifybadge],
	};

	return (
		<Grow in={checked} mountOnEnter unmountOnExit>
			<Grid
				container
				justifyContent='center'
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 4, sm: 8, md: 12 }}
			>
				<Grid item xs={10}>
					<StyledTypography color='white' variant='h4'>
						{content.title}
					</StyledTypography>
				</Grid>
				<Project
					name={content.watchatTitle}
					description={content.watchatContent}
					image={watchatImage}
					badges={badges.watchat}
					link='https://watchat-cosmo.netlify.app/'
				/>
				<Project
					name={content.postyTitle}
					description={content.postyContent}
					image={postyImage}
					badges={badges.posty}
					link='https://posty-cosmo.netlify.app/'
				/>
				<Project
					name={content.rpsTitle}
					description={content.rpsContent}
					image={rpsImage}
					badges={badges.rps}
					link='https://rock-paper-scissors-cosmo.netlify.app/'
				/>
			</Grid>
		</Grow>
	);
};

export default MyProjects;
