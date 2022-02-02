import React from 'react';
import {formatMoney} from "../util/currencyUtil";
import {hover} from "@testing-library/user-event/dist/hover";
import {Link} from "react-router-dom";

const CryptoCard = ({ data }) => {
    const priceTag = {
        price: data.price,
        change: data.change,
        color: data.change < 0 ? '#D9534F' : data.change === 0 ? '#FFAD60' : '#5cbd41'
    }

    const PriceTag = ()  => {
        const { change, color } = priceTag;

        const formatChange = () => {
            return change ? change < 0 ? Math.abs(change) : change : 0;
        }
        const negative = change <= 0;

        return (
            <span className="rounded-sm ml-4 px-1 py-0.5 inline-flex items-center gap-x-1 text-xs bg-primary-blue-400 font-bold" style={{ color }}>
                {change && (negative ? <svg style={{ height: "1em" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg> : <svg style={{ height: "1em" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>)}
                {formatChange(change)}%
            </span>
        )
    }

    return (
        <Link to={`/coins/${data.uuid}`} className="rounded-sm p-5 outline outline-4 outline-primary-blue-500 relative hover:scale-card hover:cursor-pointer hover:transition-transform" style={{
            background: `linear-gradient(45deg, #21264A 55%, #FFFF 45%)`
        }}>
            <div className="absolute top-2 left-2 px-2 rounded-full text-white font-light text-xl flex justify-center align-center" style={{ backgroundColor: 'rgba(255,255,255,0.20)' }}>
                #{data.rank}
            </div>
            <div className="flex justify-between">
                <div className="text-white mt-auto">
                    <h2 className="font-bold">
                        {data.name}
                    </h2>
                    <h3 className="font-light">
                        {formatMoney(priceTag.price)}
                        <PriceTag />
                    </h3>
                </div>
                <div>
                    <img className="w-24 h-24" src={data.iconUrl} alt={data.name} />
                </div>
            </div>
        </Link>
    );
};

export default CryptoCard;