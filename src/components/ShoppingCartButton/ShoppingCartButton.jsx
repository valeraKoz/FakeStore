import styles from './ShoppingCart.module.css';
import {useShoppingCart} from "../../hooks/useShoppingCart.js";
import { FaCartShopping } from "react-icons/fa6";
import {useState} from "react";
import {ShoppingCartModal} from "./ShoppingCartModal/ShoppingCartModal.jsx";
import {NavLink} from "react-router";

export const ShoppingCartButton = () => {
    const shoppingCart = useShoppingCart('data');
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <div className={styles.wrapper}
             onMouseEnter={() => {window.visualViewport.width > 768 && setModalVisible(true)}}
             onMouseLeave={() => {window.visualViewport.width > 768 && setModalVisible(false)}}>

        <div className={styles.item}>
            <div className={styles.cart}>
                <NavLink to={'/shopping-cart'}><FaCartShopping size={22}/></NavLink>
                <span>{shoppingCart.length}</span>
            </div>
        </div>
                <ShoppingCartModal visible={modalVisible}/>
        </div>
    )
}