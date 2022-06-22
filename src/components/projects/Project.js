import { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Link, CircularProgress } from '@mui/material';
import { Container } from '@mui/system';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Project = ({ name, description, image, badges, link }) => {
	const [loading, setLoading] = useState(true);
	const imageAlt = `${name}-preview`;

	Project.propTypes = {
		name: PropTypes.string,
		description: PropTypes.string,
		image: PropTypes.string,
		link: PropTypes.string,
		badges: PropTypes.array,
	};

	const loadingComplete = loading => (loading ? setLoading(false) : null);

	return (
		<>
			<Grid item xs={6}>
				<Typography color='secondary' variant='h5' mb={2}>
					{name}
				</Typography>
				<Typography color='white' variant='h5' mb={4}>
					{description}
				</Typography>
				<Container>
					{badges
						? badges.map(badge => {
								return <img key={badge} src={badge} alt={imageAlt}></img>;
						  })
						: null}
				</Container>
				<Link
					href={link}
					target='_blank'
					color='secondary'
					sx={{ float: 'right' }}
				>
					<Typography color='secondary' variant='h5' mt={2}>
						Link <ArrowRightIcon />
					</Typography>
				</Link>
			</Grid>
			<Grid item xs={6}>
				<Container
					sx={{
						maxWidth: '600px !important',
					}}
				>
					<img
						style={{ width: '100%', height: 'auto' }}
						src={image}
						alt='project-preview'
						onLoad={loadingComplete}
					></img>

					{loading ? <CircularProgress color='secondary' /> : null}
				</Container>
			</Grid>
		</>
	);
};

export default Project;
