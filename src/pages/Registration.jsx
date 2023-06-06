import React, { useState } from 'react';
import {
	Button,
	Container,
	FormControl,
	FormGroup,
	FormLabel,
	TextField,
	Typography,
} from '@mui/material';

const Registration = () => {
	const [activeForm, setActiveForm] = useState('login')
	const [isTransitioning, setIsTransitioning] = useState(false)

	const handleFormToggle = (form) => {
		setIsTransitioning(true);
		setTimeout(() => {
			setActiveForm(form);
			setIsTransitioning(false);
		}, 500);
	};

	return (
		<div className='d-flex'>
			<div>
				<p>A gauche</p>
			</div>
			<Container maxWidth="sm" sx={{ marginTop: '50px' }}>
				<div id="toggle-forms" style={{ marginBottom: '15px' }}>
					<Button
						variant={activeForm === 'login' ? 'contained' : 'outlined'}
						onClick={() => handleFormToggle('login')}
						sx={{ marginRight: '10px' }}
					>
						Login
					</Button>
					<Button
						variant={activeForm === 'register' ? 'contained' : 'outlined'}
						onClick={() => handleFormToggle('register')}
					>
						Register
					</Button>
				</div>

				{activeForm === 'login' && (
					<form className={isTransitioning ? 'fade-out' : ''}>
						<Typography variant="h4" sx={{ textAlign: 'center', color: 'white' }}>
							Login
						</Typography>
						<FormGroup sx={{ marginTop: '20px' }}>
							<FormControl fullWidth>
							<TextField id="email" label="Email" type="email" />
							</FormControl>
						</FormGroup>
						<FormGroup sx={{ marginTop: '20px' }}>
							<FormControl fullWidth>
							<TextField id="password" label="Password" type="password" />
							</FormControl>
						</FormGroup>
						<FormGroup sx={{ marginTop: '20px', textAlign: 'center' }}>
							<Button variant="contained" sx={{ backgroundColor: 'dodgerblue', color: 'white' }}>
							Login
							</Button>
						</FormGroup>
						<Typography variant="body1" className="forgot" sx={{ color: 'dodgerblue', marginTop: '10px' }}>
							Forgot Password?
						</Typography>
					</form>
				)}

				{activeForm === 'register' && (
					<form className={isTransitioning ? 'fade-out' : ''}>
						<Typography variant="h4" sx={{ textAlign: 'center', color: 'white' }}>
							Register
						</Typography>
						<FormGroup sx={{ marginTop: '20px' }}>
							<FormControl fullWidth>
							<TextField id="email" label="Email" type="email" />
							</FormControl>
						</FormGroup>
						<FormGroup sx={{ marginTop: '20px' }}>
							<FormControl fullWidth>
							<TextField id="password" label="Password" type="password" />
							</FormControl>
						</FormGroup>
						<FormGroup sx={{ marginTop: '20px' }}>
							<FormControl fullWidth>
							<TextField id="repassword" label="Re-Password" type="password" />
							</FormControl>
						</FormGroup>
						<FormGroup sx={{ marginTop: '20px', textAlign: 'center' }}>
							<Button variant="contained" sx={{ backgroundColor: 'dodgerblue', color: 'white' }}>
							Register
							</Button>
						</FormGroup>
					</form>
				)}
			</Container>
		</div>
	)
}


export default Registration;
