import { Navigate } from 'react-router-dom'

function Account (props) {
    function logOut () {
        localStorage.removeItem('token')
        props.setLoggedIn(false)
    }

    if (props.loggedIn === false) return <Navigate to='/login' />

    return (
       <div className='min-h-[75vh]'>
        <button onClick={logOut} className="bg-[red] p-[2rem]">
            LOGOUT 
        </button>
       </div>
    )
}

export default Account;