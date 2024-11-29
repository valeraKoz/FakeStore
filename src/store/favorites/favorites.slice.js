import {createSlice} from "@reduxjs/toolkit";


const initialState = []

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers:{
        toggleFavoritesActions:(state, {payload: product}) => {
            const isExist = state.some((r) => r.id === product.id);

            if(isExist){
                const index = state.findIndex((r) => r.id === product.id)
                if(index !== -1){
                    state.splice(index,1)
                }
            }else{
                state.push(product);
            }
        }
    }
})


export const {actions, reducer} = favoritesSlice;


