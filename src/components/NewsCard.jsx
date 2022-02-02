import React from 'react';

const NewsCard = ({ data }) => {
    return (
        <a href={data.url} target="_blank" rel="noreferrer" className="bg-primary-blue-500 rounded-md px-5 py-3 flex flex-col justify-between gap-5 text-white">
            <h2 className="text-lg font-medium">{data.name}</h2>
            <p className="text-sm">
                {data.description}
            </p>
        </a>
    );
};

export default NewsCard;