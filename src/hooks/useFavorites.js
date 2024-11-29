import {useSelector} from "react-redux";

export const useFavorites = () => {
    return useSelector((store) => store.favorites);
}