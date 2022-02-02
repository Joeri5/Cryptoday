import React from 'react';
import Icon from "./Icon";

const Card = ({ title, value, color, icon }) => {
    return (
        <div className="rounded-md bg-primary-blue-500 text-white">
            <div className="px-7 py-5 flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-bold uppercase">{title}</h2>
                    <h3 className="text-lg font-light">{value}</h3>
                </div>
                <div className="text-6xl">
                    <Icon icon={icon} />
                </div>
            </div>
        </div>
    );
};

export default Card;