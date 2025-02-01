import React, { useContext } from 'react';
import Navbar from './Shared/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './components/AuthProvider/AuthProvider';

const ErrorElement = () => {
const user = useContext(AuthContext)
    const navigate = useNavigate()
    return (

        <div>
            <Navbar></Navbar>
            <div className='w-[75%] mx-auto h-screen'>
                {
                    user?<h2 className='text-3xl py-2 text-center'>Please, Sign in first</h2>: <h2></h2>
                }
                
            
            <img src="https://i.imgur.com/A3kFMg2.png" alt="" />
            <button onClick={()=>navigate('/')} className='btn'>Go back</button>
        </div>
        </div>
        
    );
};

export default ErrorElement;