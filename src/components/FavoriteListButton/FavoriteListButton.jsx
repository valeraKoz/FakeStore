import styles from './FavoriteList.module.css'
import {FaHeart} from "react-icons/fa";
import {useFavorites} from "../../hooks/useFavorites.js";

export const FavoriteListButton = () => {
    const favorites = useFavorites();
    return (
        <div className={styles.item}>
            <div className={styles.favorite}>
                <FaHeart size={22}/>
                <span>{favorites.length}</span>
            </div>
        </div>
    )
}