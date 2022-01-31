import React from 'react';
import {formatMoney} from "../util/currencyUtil";
import {hover} from "@testing-library/user-event/dist/hover";

const CryptoCard = ({ data }) => {
    const priceTag = {
        price: data.price,
        change: data.change,
        color: data.change < 0 ? '#D9534F' : data.change === 0 ? '#FFAD60' : '#5cd13f'
    }

    return (
        <div className="rounded-sm p-5 outline outline-4 relative hover:scale-card hover:cursor-pointer hover:transition-transform" style={{
            background: `linear-gradient(45deg, ${data.color || 'black'} 55%, #FFFF 45%)`,
            outlineColor: `${data.color || 'black'}`
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
                        <span className="rounded ml-4 px-2 py-0.5" style={{ backgroundColor: priceTag.color }}>
                            {priceTag.change}%
                        </span>
                    </h3>
                </div>
                <div>
                    <img className="w-24 h-24" src={data.iconUrl} alt={data.name} />
                </div>
            </div>
        </div>
    );
};

export default CryptoCard;