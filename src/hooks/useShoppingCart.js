import {useSelector} from "react-redux";

export const useShoppingCart = (data) => {
    return useSelector((store) => store.shoppingCart[data]);
}