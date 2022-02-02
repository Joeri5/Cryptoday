import React from 'react';
import {useGetNewsQuery} from "../api/newsApi";
import NewsCard from "../components/NewsCard";
import Spinner from "../components/Spinner";

const News = () => {
    const { data: news, isFetching } = useGetNewsQuery({ term: 'crypto', limit: 30 });

    if (isFetching)
        return <Spinner />;

    return (
        <div className="p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {news.value.map(article => <NewsCard data={article} />)}
            </div>
        </div>
    );
};

export default News;