import styles from './ShoppingCartModal.module.css';
import PropTypes from "prop-types";
import {useShoppingCart} from "../../../hooks/useShoppingCart.js";
import {ShoppingCartModalItem} from "../ShoppingCartModalItem/ShoppingCartModalItem.jsx";
import {useActions} from "../../../hooks/useActions.js";
import {beautifyPrice} from "../../../CONST.js";

export const ShoppingCartModal = ({visible}) =>{
    const shoppingCart = useShoppingCart('data');
    const shoppingCartPrice = useShoppingCart('price');
    const {clearShoppingCartActions} = useActions()
    const renderShoppingCartItem = ()=>{
        return shoppingCart.map((product)=><ShoppingCartModalItem key={product.id} product={product} />)
    }

    return(
        <div className={!visible ? styles.wrapper : styles.wrapper + ' ' + styles.fadein}>
            <div className={styles.header}>
                {shoppingCart.length > 0 ? (
                    <>
                        <p className={styles.count}>Основные товары {shoppingCart.length}</p>
                        <p className={styles.clear} onClick={() => clearShoppingCartActions()}>Очистить корзину</p>
                    </>
                ) : 'Пока пусто'}
            </div>
            {renderShoppingCartItem()}
            <div className={styles.price}>Общая стоимость: {beautifyPrice(shoppingCartPrice)}</div>
        </div>
    )
}


ShoppingCartModal.propTypes = {
    visible: PropTypes.bool,
}