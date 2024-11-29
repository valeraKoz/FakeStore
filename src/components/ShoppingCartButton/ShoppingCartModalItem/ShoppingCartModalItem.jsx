import styles from './ShoppingCartModalItem.module.css';
import PropTypes from "prop-types";
import { AiFillDelete } from "react-icons/ai";
import {useActions} from "../../../hooks/useActions.js";
import {IMAGE_URL} from "../../../CONST.js";
import {Link} from "react-router";

export const ShoppingCartModalItem = ({product})=>{
    const {id, price, category, name} = product;
    const LINK_URL = `/catalog/${product.category}/${product.id}`;

    const beautifyPrice = (price) => price.toString().slice(0,-3) + ' ' + price.toString().slice(-3) + ' ₽'
    const {deleteShoppingCartByIdActions} = useActions();

    return (
        <div className={styles.wrapper}>
            <img className={styles.image} src={IMAGE_URL(id)} alt={product.name} />
            <Link to={LINK_URL} className={styles.name}>{name}</Link>
            <p className={styles.price}>{beautifyPrice(price)}</p>
            <div className={styles.delete} onClick={()=>deleteShoppingCartByIdActions(id)}><AiFillDelete size={24}/></div>
        </div>
    )
}


ShoppingCartModalItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
    })
}