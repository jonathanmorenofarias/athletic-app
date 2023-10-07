import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Login () {
    const [formData, setFormData] = useState( 
        {  
            username: '',
            password: ''
        }
        )

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
    }

    return (
        <div className="flex flex-col items-center my-[20rem] gap-[2rem]">
            
                <h1 className="text-[2rem] font-bold">Login</h1>
                <form onSubmit={handleSubmit} className='flex flex-col gap-[.5rem]'>
                    <label>Username</label>
                    <input className="w-[70vw] md:w-[20rem] border-[1px] md:p-2 p-1 focus:outline-0 bg-transparent mb-[1rem]" 
                    type="text" 
                    placeholder="Enter Username"
                    onChange={handleChange}
                    name="username"
                    value={formData.username}/>

                    <label>Password</label>
                    <input className="w-[70vw] md:w-[20rem] border-[1px] md:p-2 p-1 focus:outline-0 bg-transparent " 
                    type="text" 
                    placeholder="Enter Password"
                    onChange={handleChange}
                    name="password"
                    value={formData.password}/>

                    <label className='self-end text-[.75rem]'>Forgot Password?</label>
                    <button className='bg-[black] text-white h-[3rem] w-[70vw] md:w-[20rem] bg-[red] rounded-md'>LOGIN</button>
                </form>   
                <p>Dont have an account? <Link to="/register" className='text-[#2f80fa]'>Sign Up!</Link></p>
                
        </div>
    )  
}

export default Login;