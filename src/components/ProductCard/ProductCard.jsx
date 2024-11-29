import styles from "./ProductCard.module.css";
import {memo} from "react";
import PropTypes from "prop-types";
import {FaHeart, FaRegHeart} from 'react-icons/fa6'
import {useActions} from "../../hooks/useActions.js";
import {useFavorites} from "../../hooks/useFavorites.js";
import {useShoppingCart} from "../../hooks/useShoppingCart.js";
import {Link} from "react-router";
import {beautifyPrice, IMAGE_URL} from "../../CONST.js";

export const ProductCard = memo(function ProductCard({product}){

    const {id, name,price,category,info} = product;

    const favorites = useFavorites();
    const { toggleFavoritesActions,
            deleteShoppingCartByIdActions,
            addToCartActions
            } = useActions();
    const isExist = (arr)=>arr.some((r) => r.id === id);
    const shoppingCart = useShoppingCart('data');

    


    return(
        <div className={styles.product}>
            <img src={IMAGE_URL(id)} className={styles.image} alt={name}/>
                <Link to={`/catalog/${category}/${id}`} className={styles.name}>{name + info.subtitle}</Link>

            <div className={styles.buy}>
                <div className={styles.price}>{beautifyPrice(price)}</div>
                <div className={styles.adding}>
                    <button className={styles.favorites} onClick={()=>toggleFavoritesActions(product)}>
                        {!isExist(favorites) ? <FaRegHeart/> : <FaHeart color="red"/>}
                    </button>
                    <button className={!isExist(shoppingCart) ? styles.tocart : styles.tocart + ' ' + styles.incart} onClick={()=>{
                        !isExist(shoppingCart) ? addToCartActions(product) : deleteShoppingCartByIdActions(product.id);
                    }}>
                        {!isExist(shoppingCart) ? 'Купить' : 'Убрать'}
                    </button>
                </div>
            </div>
        </div>
    )
})



ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        brand: PropTypes.string,
        category: PropTypes.string,
        info: PropTypes.shape({
            description: PropTypes.string,
            subtitle: PropTypes.string,
        }),
        spec: PropTypes.shape({
            bayonet: PropTypes.array,
            displayDiagonal: PropTypes.number,
            focusDotCount: PropTypes.number,
            fullFrameMatrix: PropTypes.bool,
            haveObjective: PropTypes.bool,
            matrixSize: PropTypes.string,
            maxISO: PropTypes.number,
            minISO: PropTypes.number,
            stabType: PropTypes.string,
            videoResolution: PropTypes.string,
            wirelessInterface: PropTypes.array

        })
    })
}