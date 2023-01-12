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
	},[showForm])
	
	
	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};

	const handleSubmitUpdateUser = (event) => {
		event.preventDefault();
		updateUser(prop.user._id, formState)
		setShowForm(false);
		navigate('/user-info');
	};
	// delete user function
	const destroyUser = () => {
		deleteUser(prop.user._id);
		localStorage.clear();
		prop.setLogInStatus(false);
		navigate('/');
	};
	
	return (
		<div className='display-body'>
			<div className='delete'>
				{!deletPopUp ? <button
					id='edit-btn'
					className='btn btn-danger '
					onClick={setDeletPopUp}>
					Delete User
				</button> : null}
				{deletPopUp ? (
					<div className='delete-popup'>
						<p>Are you sure you wish to delete user?</p>
						<button
							id='edit-btn'
							className='btn btn-danger '
							onClick={destroyUser}>
							Yes
						</button>
						<button
							id='edit-btn'
							className='btn btn-danger '
							onClick={() => {setDeletPopUp(false)}}>
							No
						</button>
					</div>
				) : null}
			</div>

			<div className='edit'>
				<div className='form-btn'>
					<button
						id='edit-btn'
						className='btn btn-primary '
						onClick={() => {
							setShowForm(!showForm);
						}}>
						Edit User
					</button>
				</div>
				{showForm ? (
					<div className='edit-form' style={{ width: '20rem' }}>
						<form onSubmit={handleSubmitUpdateUser}>
							<label className='form-label' htmlFor='username'>
								Username:
							</label>
							<input
								className='form-control'
								id='username'
								type='text'
								onChange={handleChange}
								value={formState.username}
							/>

							<label className='form-label' htmlFor='password'>
								Password:
							</label>
							<input
								className='form-control'
								id='password'
								type='text'
								onChange={handleChange}
								value={formState.password}
							/>
							<button className='btn btn-primary' type='submit'>
								Save Changes
							</button>
						</form>
					</div>
				) : null}
			</div>
		</div>
	);
}