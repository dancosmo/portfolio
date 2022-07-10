import { useState } from 'react';
import {
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Snackbar,
	Alert,
} from '@mui/material';
import PropTypes from 'prop-types';

const Contact = ({ img, text, link, alertText, behavior }) => {
	Contact.propTypes = {
		img: PropTypes.string,
		text: PropTypes.string,
		link: PropTypes.string,
		alertText: PropTypes.string,
		behavior: PropTypes.string,
	};

	const [openSnack, setOpenSnack] = useState(false);

	const closeSnack = () => setOpenSnack(false);

	const copy = async () => {
		setOpenSnack(true);
		const copyLink = link;
		await navigator.clipboard.writeText(copyLink);
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
							<img width='24' src={img} alt='text-preview'></img>
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
							<img width='24' src={img} alt='text-preview'></img>
						</ListItemIcon>

						<ListItemText primary={text} sx={{ color: `white` }} />
					</ListItemButton>
					<Snackbar
						open={openSnack}
						onClose={closeSnack}
						autoHideDuration={40000}
					>
						<Alert
							sx={{ position: 'fixed', bottom: '320px' }}
							onClose={closeSnack}
							severity='success'
						>
							{alertText}
						</Alert>
					</Snackbar>
				</>
			);
		}
	};

	return <>{behaviorHandler()}</>;
};

export default Contact;
