import React, {useState} from 'react';
import {useGetCoinsQuery} from "../api/cryptoApi";
import CryptoCard from "../components/CryptoCard";
import Spinner from "../components/Spinner";

const PaginationBar = ({ pageState, pages }) => {
    const [page, setPage] = pageState;

    const displayPages = [];
    for (let i = page - 3; i < page + 3; i++) {
        if (i < 0) continue;
        if (i > pages-1) continue;
        displayPages.push(i);
    }
    while (displayPages.length < 7 && page !== pages-1) {
        displayPages.push(displayPages[displayPages.length-1]+1);
    }

    return (
        <div className="flex items-center gap-x-3 text-xl text-white">
            {<button onClick={() => {
                if (page === 0) return;
                setPage(0);
            }}>
                <svg style={{ height: "1.25em" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                </svg>
            </button>}
            {displayPages.map(num => (
                num === page ? (
                    <button onClick={() => setPage(num)} className="font-bold">{num + 1}</button>
                ) : <button onClick={() => setPage(num)}>{num + 1}</button>
            ))}
            {<button onClick={() => {
                if (page === pages-1) {
                    return;
                }

                setPage(pages - 1);
            }}>
                <svg style={{ height: "1.25em" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
            </button>}
        </div>
    )
}

const Coins = () => {
    const filters = {
        marketCap: "Market Cap",
        price: "Price",
        '24hVolume': '24h Volume',
        change: 'Change (%)',
        listedAt: "Listed at"
    }

    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const [filter, setFilter] = useState("marketCap");

    const { data: coinData, isFetching } = useGetCoinsQuery({ offset: page * 30, limit: 30, filter });

    if (isFetching) {
        return <Spinner />;
    }

    const coins = coinData.data.coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="p-10">
            <div className="flex w-full gap-x-3">
                <input
                    className="rounded-md bg-primary-blue-500 px-5 py-2 focus:outline-none focus:outline-primary-blue-400 flex-grow text-white"
                    type="text"
                    placeholder="Search for a coin..."
                    onChange={event => setSearch(event.target.value)}
                />
                <select onChange={event => setFilter(event.target.value)} className="text-white rounded-md bg-primary-blue-500 px-5 py-2 focus:outline-none focus:outline-primary-blue-400">
                    {Object.keys(filters).map(f => (
                        filter === f ? <option selected value={f}>{filters[f]}</option> : <option value={f}>{filters[f]}</option>
                    ))}
                </select>
            </div>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                {coins.length === 0 ? (
                    <span className="text-white mx-auto col-span-3">No results found :(</span>
                ) : (
                    coins.map(coin => <CryptoCard data={coin} />)
                )}
            </div>
            <div className="mt-10 flex justify-center">
                <PaginationBar pageState={[page, setPage]} pages={Math.ceil(coinData.data.stats.totalCoins / 30)} />
            </div>
        </div>
    );
};

export default Coins;