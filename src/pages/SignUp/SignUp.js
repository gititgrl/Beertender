import { useState} from 'react';
import { signUp } from '../../utils/api';
import { useNavigate } from 'react-router-dom';

import './signup.css'
export default function SignUp(props) {
	const initialState = { username: '', password: '' };
	const [formState, setFormState] = useState(initialState);
	const navigate = useNavigate();

	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.name]: event.target.value })};
		
	function handleSubmit(event, formData) {
		event.preventDefault();
		signUp(formState)
			.then((data) => {
				localStorage.token = data.token;
				localStorage.user_id = data.user._id;
				props.setUser(data.user);
			});
		navigate('/login')
	};

		return (
			<div className='flex items-center justify-center h-screen'>
				<div className='bg-blue-200 shadow-md rounded px-20 pt-6 pb-8 mb-4'>
					<h1 className="block text-gray-700 text-lg font-bold mb-2">Sign Up</h1>
					<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'"onSubmit={handleSubmit}>
						<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor='username'>
							<p>Username</p>
							<input
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								type='text'
								name='username'
								value={formState.username}
								onChange={handleChange}
								required
							/>
						</label>
						<label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password' >
							<p>Password</p>
							<input
								className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
								type='password'
								name='password'
								value={formState.password}
								onChange={handleChange}
								required
							/>
						</label>
						<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
							Sign Up
						</button>
					</form>
				</div>
				
			</div>
		);
	}
  
