import React, {useEffect, useState} from 'react';
import navigation from "../constants/navigation";
import {useLocation} from "react-router-dom";

const Appbar = () => {
    const location = useLocation();
    const [title, setTitle] = useState('');

    useEffect(() => {
        const data = navigation[location.pathname] || { title: 'Not found' };

        setTitle(data.title);
        document.title = `Cryptoday - ${data.title}`
    }, [location.pathname]);

    return (
        <div className="flex items-center w-full p-5 shadow-md">
            <h3 className="font-bold text-secondary">{title}</h3>
        </div>
    );
};

export default Appbar;