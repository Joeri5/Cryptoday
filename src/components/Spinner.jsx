import React from 'react';
import "./Spinner.css";

const Spinner = () => {
    return <div className="relative flex justify-center items-center h-screen">
        <span className="loader" />
    </div>;
};

export default Spinner;