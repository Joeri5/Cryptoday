import React from 'react';
import {useParams} from "react-router-dom";

const CoinInfo = () => {
    const { id } = useParams();

    return (
        <div>
            {id}
        </div>
    );
};

export default CoinInfo;