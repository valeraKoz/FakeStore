import styles from './CatalogPage.module.css';
import {useGetProductQuery} from "../../api/api.js";
import {ProductCard} from "../../components/ProductCard/ProductCard.jsx";

export const CatalogPage = () => {

    const {isLoading,data} = useGetProductQuery('photo-camera');
    const productCardRender = data =>
        data.map(product => <ProductCard key={product.id} product={product}/>)

    const countProduct = () => {
        const lastNumber = +data.length.toString().slice(-2);
        if (data.length === 1) return ' товар';
        if (data.length >= 5 && data.length <= 20) return ' товаров';
        if (lastNumber % 10 === 1) return ' товар';
        if (lastNumber % 10 >= 1 && lastNumber % 10 <= 4) return ' товара';
        if (lastNumber % 10 === 0 || (lastNumber % 10 >= 5 && lastNumber % 10 <= 9))
            return ' товаров';
    };

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Зеркальные фотоаппараты <span>{data && data.length + countProduct()}</span></h1>
            {isLoading ?  <div>Loading...</div> : data && productCardRender(data)}
        </div>
    )
}