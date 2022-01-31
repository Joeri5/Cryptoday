import React from 'react';
import ErrorImage from '../assets/404.png'
import {useNavigate} from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex flex-col justify-center items-center h-screen">
                <img src={ErrorImage} alt="404 error image"/>
                <button onClick={() => navigate('/')} className="px-10 py-2 bg-gradient-to-r from-white-600 to-white-700 shadow-md rounded-md font-bold text-primary-700">
                    Go to dashboard
                </button>
            </div>
        </div>
    );
};

export default NotFound;