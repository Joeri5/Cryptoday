import React from 'react';
import Card from "../components/Card";
import {useGetCoinsQuery} from "../api/cryptoApi";
import millify from "millify";
import CryptoCard from "../components/CryptoCard";
import {useGetNewsQuery} from "../api/newsApi";
import NewsCard from "../components/NewsCard";

const SectionTitle = ({children, icon}) => {
    return <h2 className="text-sm font-bold uppercase text-blue-500 mb-2">{children}</h2>
}

const Dashboard = () => {
    const { data: stats, isFetching: isStatsFetching } = useGetCoinsQuery({ offset: 0, limit: 5, filter: 'marketCap' });
    const { data: news, isFetching: isNewsFetching } = useGetNewsQuery({ term: 'crypto' });

    if (isStatsFetching || isNewsFetching)
        return "Loading...";

    return (
        <div className="p-10">
            <SectionTitle>Stats</SectionTitle>
            <div>
                <div className="grid grid-cols-3 gap-5">
                    <Card title="Total Market Cap" value={millify(stats.data.stats.totalMarketCap)} icon="cash"/>
                    <Card title="Total Exchanges" value={millify(stats.data.stats.totalExchanges)} icon="bank"/>
                    <Card title="Total 24h Volume" value={millify(stats.data.stats.total24hVolume)} icon="clock"/>
                </div>
            </div>
            <div className="mt-20">
                <SectionTitle>Top 5 Coins</SectionTitle>
                <div className="grid grid-cols-5 gap-5">
                    {stats.data.coins.map(coin => <CryptoCard data={coin}/> )}
                </div>
            </div>
            <div className="mt-20">
                <SectionTitle>Latest Crypto News</SectionTitle>
                <div className="grid grid-cols-2 gap-5">
                    {news.value.map(article => <NewsCard data={article}/>).splice(0, 4)}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;