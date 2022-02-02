import { configureStore } from '@reduxjs/toolkit';
import {cryptoApi} from "./api/cryptoApi";
import {newsApi} from "./api/newsApi";

export const store = configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [newsApi.reducerPath]: newsApi.reducer,
    },
});