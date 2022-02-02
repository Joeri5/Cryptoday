import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': process.env.REACT_APP_CRYPTO_API_KEY
}

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://coinranking1.p.rapidapi.com' }),
    endpoints: (builder) => ({
        getCoins: builder.query({
            query: ({ offset, limit, filter }) => createRequest(`/coins?limit=${limit}&offset=${offset}&orderBy=${filter}`)
        }),
    })
});

export const {
    useGetCoinsQuery,
} = cryptoApi;