import { AiOutlineUser, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';

function Login (props) {
    const [formData, setFormData] = useState( 
        {  
            username: '',
            password: '',
        }
    )

    const [error, setError] = useState(null)
    const [showPassword, setShowPassword] = useState(false)

    const handleChange = (e) => {
        setFormData ({
            ...formData,
            [e.target.name]: e.target.value
        })
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => {
            if (!res.ok) {
                throw Error('Invalid Credentials');
            }
            return res.json()
        })
        .then(data => {
            props.setLoggedIn(true)
            setError(false)
            localStorage.setItem('token', data)
        })
        .catch(err => {
            props.setLoggedIn(false)
            setError(true)
            setShowPassword(false)
            console.log(err.message)
        }).then(() => {
            setFormData({
                username: '',
                password: ''
            })
        })
    }

    if (error === false) return <Navigate to='/account' /> 
    if (props.loggedIn) return <Navigate to='/account' />

    return (
        <div className="flex flex-col justify-center items-center min-h-[70vh] gap-[2rem]">
                <h1 className="text-[2rem] font-bold">Login</h1>
                { error && <p className='text-[red]'>Your account or password is incorrect.</p>}
                <form onSubmit={handleSubmit} className='flex flex-col gap-[.5rem]'>
                    <label>Username</label>
                    <input className="w-[70vw] md:w-[20rem] border-[1px] md:p-2 p-1 focus:outline-0 bg-transparent mb-[1rem]" 
                    type="text" 
                    placeholder="Enter Username"
                    onChange={handleChange}
                    name="username"
                    value={formData.username}/>

                    <label>Password</label>
                    <div className='flex items-center space-between relative'>
                        <input className="w-[70vw] md:w-[20rem] border-[1px] md:p-2 p-1 focus:outline-0 bg-transparent " 
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Password"
                        onChange={handleChange}
                        name="password"
                        value={formData.password}/>
                        {showPassword ? <AiFillEyeInvisible onClick={() => setShowPassword(false) }  className='text-[1.5rem] absolute right-5'/> : <AiFillEye onClick={() => setShowPassword(true)} className='text-[1.5rem] absolute right-5'/>}
                    </div>

                    <label className='self-end text-[.75rem]'>Forgot Password?</label>
                    <button className='bg-black text-white h-[3rem] w-[70vw] md:w-[20rem] bg-[red] rounded-md'>LOGIN</button>
                </form>   
                <p>Dont have an account? <Link to="/register" className='text-[#2f80fa]'>Sign Up!</Link></p>
                
        </div>
    )  
}

export default Login;