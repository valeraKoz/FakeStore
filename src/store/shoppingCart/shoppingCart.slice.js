import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: [],
    price: 0
};

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        addToCartActions: (state, {payload: product}) => {
            const isExist = state.data.some((r) => r.id === product.id);

            if(!isExist){
                state.data.push(product);
                state.price+=product.price;
            }
        },
        clearShoppingCartActions: (state) => {
            state.data.splice(0,state.data.length);
            state.price = 0;
        },
        deleteShoppingCartByIdActions: (state, {payload: id}) => {
            const index = state.data.findIndex((r) => r.id === id);
            state.price-= state.data[index].price;
            state.data.splice(index, 1);
        }
    }
})


export const { actions, reducer} = shoppingCartSlice;