import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "@reduxjs/toolkit";
import {actions as favoriteActions} from "../store/favorites/favorites.slice.js";
import {actions as shoppingCartActions} from "../store/shoppingCart/shoppingCart.slice.js"


const rootActions = {
    ...favoriteActions,
    ...shoppingCartActions
}

console.log(rootActions)

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(()=>bindActionCreators(rootActions,dispatch), [dispatch]);
}




