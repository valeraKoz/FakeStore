import styles from './ShoppingCartPage.module.css';
import {useShoppingCart} from "../../hooks/useShoppingCart.js";
import {ProductCard} from "../../components/ProductCard/ProductCard.jsx";
import {beautifyPrice} from "../../CONST.js";
import {NavLink} from "react-router";

export const ShoppingCartPage = () => {
    const cartProduct = useShoppingCart('data');
    const cartPrice = useShoppingCart('price');
    return (
        <div className={styles.wrapper}>
            {cartProduct.length > 0 ?
                <>
                В КОРЗИНЕ
                {cartProduct.map(item=> <ProductCard product={item} key={item.id} />)}
                    <div className={styles.price}>Общая стоимость: {beautifyPrice(cartPrice)}</div>
                </> :
                <NavLink className={styles.tocatalog} to='/catalog'>К покупкам</NavLink>}
        </div>
    )
}