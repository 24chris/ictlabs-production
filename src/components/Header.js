import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

const Header = () => {
    let {user, logoutUser} = useContext(AuthContext)

    return (
        <div className='text-gray-700 body-font border-b border-gray-200'>
            <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
            <Link className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0' to="/" >
            <img className='ml-10' src='/fieldlogo.png' alt='sfg' width={150} height={150}/>
            </Link>
            <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
           
            {user ? (
                <> {user && <p className='font-sans text-2xl font-semibold p-2'> {user.username}</p>} <span className='font-sans text-2xl p-2'> | </span>

                <button  className='font-sans  inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-red-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-500"
            '  onClick={logoutUser}>Logout</button> 
                </>
            ): (
                <>
                <Link className='mr-5 hover:text-gray-900 text-2xl' to="/user" >Login</Link>

                <Link className='mr-5 hover:text-gray-900 text-2xl' to="/register"> Register</Link>
                </>
            )}
                
            </nav>
           </div>
        </div>
    )
}

export default Header







// <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
           
// {user ? (
//     <> <p  onClick={logoutUser}>Logout</p> <span> | </span> </>
// ): (
//     <Link className='mr-5 hover:text-gray-900' to="/login" >Login</Link>
// )}

// {user &&   <p>Hello {user.name}</p>}
// </nav>