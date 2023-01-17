import { useState, useEffect } from 'react';
import {updateUser} from "../utils/api";
import {deleteUser} from "../utils/api";
import { useNavigate } from 'react-router-dom';


export default function User(prop) {
	const navigate = useNavigate();
	// function to reveal edit form
	const [showForm, setShowForm] = useState(false);
	const [deletPopUp, setDeletPopUp] = useState(false);
	// edit form and changed states
	const [formState, setFormState] = useState({ username: '', password: '' });
	useEffect(() => {
		setFormState(prop.user);
	},[prop.user, showForm])
	
	
	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};

	const handleSubmitUpdateUser = (event) => {
		event.preventDefault();
		updateUser(prop.user_Id, formState)
		setShowForm(false);
		navigate('/user-info');
	};
	// delete user function
	const destroyUser = () => {
		deleteUser(prop.user_Id);
		localStorage.clear();
		prop.setLogInStatus(false);
		navigate('/');
	};
	

	


	return (
	<div className="flex flex-col">
		<div className='flex items-center justify-center h-screen'>
			<div className='bg-red-300 shadow-md rounded px-10 pt-6 pb-8 mb-4'>
				{!deletPopUp ? <button
					id='edit-btn'
					className='bg-red-300 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'
					onClick={setDeletPopUp}>
					<svg xmlns="http://www.w3.org/2000/svg" 
					fill="none" viewBox="0 0 24 24" 
					strokeWidth="1.5" 
					stroke="currentColor" 
					className="w-6 h-6">
  						<path strokeLinecap="round" 
						strokeLinejoin="round" 
						d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
					</svg>
						Delete User
				</button> : null}
				{deletPopUp ? (
					<div className='delete-popup'>
						<p>Are you sure you wish to delete user?</p>
						<button
							id='edit-btn'
							className='bg-red-400 rounded mx-2 px-2'
							onClick={destroyUser}>
							Yes
						</button>
						<button
							id='edit-btn'
							className='bg-yellow-200 rounded mx-2 px-2'
							onClick={() => {setDeletPopUp(false)}}>
							No
						</button>
					</div>
				) : null}
			</div>

			<div className='flex items-center justify-center h-screen'>
				<div className='bg-yellow-200 shadow-md rounded px-10 pt-6 pb-8 mb-4'>
					<button
						id='edit-btn'
						className='bg-yellow-200 hover:bg-yellow-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'
						onClick={() => {
							setShowForm(!showForm);
						}}>
						<svg xmlns="http://www.w3.org/2000/svg" 
						fill="none" 
						viewBox="0 0 24 24" 
						strokeWidth="1.5" 
						stroke="currentColor" 
						className="w-6 h-6">
  							<path strokeLinecap="round" 
							strokeLinejoin="round" 
							d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
						</svg>
							Edit User
					</button>
				</div>
				{showForm ? (
					<div className='edit form'>
						<form onSubmit={handleSubmitUpdateUser} className="w-full max-w-lg">
							<div className="flex flex-wrap -mx-3 mb-6">
							<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
							<label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='username'>
								Username:
							</label>
							<input
								className='form-control'
								id='username'
								type='text'
								onChange={handleChange}
								value={formState.username}
							/>

							<label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='password'>
								Password:
							</label>
							<input
								className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
								id='password'
								type='text'
								onChange={handleChange}
								value={formState.password}
							/>
							<button className='btn btn-primary' type='submit'>
								Save Changes
							</button>
							</div>
							</div>
						</form>
					</div>
				
				) : null}
			</div>
			
		</div>
	</div>
	);
}