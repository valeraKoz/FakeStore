import styles from './FavoritesPage.module.css';
import {useFavorites} from "../../hooks/useFavorites.js";
import {NavLink} from "react-router";
import {ProductCard} from "../../components/ProductCard/ProductCard.jsx";

export const FavoritesPage = () => {
    const data = useFavorites()
    return (
        <div className={styles.wrapper}>
            {data.length ?
                <>
                    В избранном
                {data.map(item => <ProductCard product={item} key={item.id}/>)}
                </>
                : <NavLink className={styles.tocatalog} to='/catalog'>К покупкам</NavLink>}
        </div>
    )
}