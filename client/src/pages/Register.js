import { useState } from 'react';

function Register () {
    const [formData, setFormData] = useState(
        {  
            username: '',
            email: '',
            password: ''
        }
        )

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetch('/api/user/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }).then(() => {
            setFormData({
                username: '',
                email: '',
                password: ''
            })
        })
    }

    return (
        <div className="flex flex-col items-center my-[20rem] gap-[2rem]">
                <h1 className="text-[2rem] font-bold">Register</h1>
                <form onSubmit={handleSubmit} className='flex flex-col gap-[.5rem]'>
                    <label>Email</label>
                    <input className="w-[70vw] md:w-[20rem] border-[1px] md:p-2 p-1 focus:outline-0 bg-transparent mb-[1rem]" 
                        type="text" 
                        placeholder="Enter your Email" 
                        onChange={handleChange} 
                        name="email" 
                        value={formData.email}/>
                    <label>Username</label>
                    <input className="w-[70vw] md:w-[20rem] border-[1px] md:p-2 p-1 focus:outline-0 bg-transparent mb-[1rem]" 
                        type="text" 
                        placeholder="Create a Username" 
                        onChange={handleChange} 
                        name="username" 
                        value={formData.username}/>
                    <label>Password</label>
                    <input className="w-[70vw] md:w-[20rem] border-[1px] md:p-2 p-1 focus:outline-0 bg-transparent mb-[1rem]" 
                        type="text" 
                        placeholder="Create a Password" 
                        onChange={handleChange} 
                        name="password" 
                        value={formData.password}/>
                    <button className='bg-[black] text-white h-[3rem] w-[70vw] md:w-[20rem] bg-[red] rounded-md'>SIGN UP</button>
                </form>   

                
        </div>
    )
}

export default Register;