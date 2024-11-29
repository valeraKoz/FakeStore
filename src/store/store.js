import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {reducer as favoritesReducer} from './favorites/favorites.slice.js';
import {reducer as shoppingCartReducer} from './shoppingCart/shoppingCart.slice.js'
import {api} from "../api/api.js";

const reducers = combineReducers({
    favorites: favoritesReducer,
    shoppingCart: shoppingCartReducer,
    [api.reducerPath]: api.reducer
});

export const store = configureStore({
    reducer: reducers,
    devTools: import.meta.env.NODE_ENV === 'development',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
})