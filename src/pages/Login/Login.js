import { useState } from 'react'
import { loginToAccount } from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import "./login.css"
export default function LogIn(props) {
    const navigate = useNavigate();
    const [formState, setFormState] = useState({
        username: '',
        password: ''
    })

    const handleChange = (event) => {
        setFormState({...formState, [event.target.name]: event.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        loginToAccount(formState)
            .then((data) => {
                localStorage.token = data.token;
                props.setLogInStatus(true)
                props.setUser(data.user)
            })
            navigate('/')
    }

    return (
			<div className='w-full max-w-xs' style={{ width: '20rem' }}>
				<div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
					<h1>Login</h1>
					<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
						<label htmlFor='username' className="block text-gray-700 text-sm font-bold mb-2">
							Username:{' '}
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							type='text'
							name='username'
							onChange={handleChange}
							defaultValue={formState.username}
						/>
						<label htmlFor='password' className='block text-gray-700 text-sm font-bold mb-2'>
							Password:{' '}
						</label>
						<input
							className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							type='password'
							name='password'
							onChange={handleChange}
							defaultValue={formState.password}
						/>
						<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
							Login
						</button>
					</form>
				</div>
			</div>
		);
}
