import { Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Account (props) {
    const [accountInfo, setAccountInfo] = useState({})

    useEffect(() => {
        fetch("https://wave-api-74wv.onrender.com/api/user/accountinfo", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
          })
          .then (res => res.json())
          .then (data => {
            setAccountInfo(data)
          })
    } , [])

    function logOut () {
        localStorage.removeItem('token')
        props.setLoggedIn(false)
    }

    if (props.loggedIn === false) return <Navigate to='/login' />

    return (
       <div className='min-h-[75vh] flex flex-col justify-center items-center gap-[1rem]'>
        <h1 className='text-3xl'>Account Info</h1>
        <div className='flex justify-between items-center w-[30rem] border-[1px] p-[2rem]'>
          <h1>Username</h1>
          <p>{accountInfo.username}</p>
        </div>
        <div className='flex justify-between items-center w-[30rem] border-[1px] p-[2rem]'>
          <h1>Email</h1>
          <p>{accountInfo.email}</p>
        </div>
        <button onClick={logOut} className="bg-black text-white w-[10rem] h-[3rem]">
            LOGOUT 
        </button>
       </div>
    )
}

export default Account;