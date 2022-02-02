import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const headers = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_NEWS_API_KEY
}

const createRequest = (url) => ({ url, headers });

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://bing-news-search1.p.rapidapi.com/'}),
    endpoints: (builder) => ({
        getNews: builder.query({
            query: ({ term, limit }) => createRequest(`/news/search?q=${term}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${limit || 4}`)
        })
    })
})

export const {
    useGetNewsQuery
} = newsApi;