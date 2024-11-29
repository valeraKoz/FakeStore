import styles from './Navigation.module.css'
import {NavLink} from "react-router";
import {FavoriteListButton} from "../FavoriteListButton/FavoriteListButton.jsx";
import {ShoppingCartButton} from "../ShoppingCartButton/ShoppingCartButton.jsx";
import {MainPageButton} from "../MainPageButton/MainPageButton.jsx";
import {CatalogPageButton} from "../CatalogPageButton/CatalogPageButton.jsx";
import { RxHamburgerMenu } from "react-icons/rx";
import {useState} from "react";

export const Navigation = () => {

    const [dropdownVisible, setDropdownVisible] = useState(false);


    return (
        <div className={styles.navWrapper}>
        {
            window.visualViewport.width < 768 ?
                <>
                    <button className={styles.burger}  >
                        <NavLink to={'/favorite-list'}><FavoriteListButton/></NavLink>
                        <ShoppingCartButton/>
                        <RxHamburgerMenu color='white' onClick={() => setDropdownVisible(!dropdownVisible)}/>
                    </button>
                    <div className={dropdownVisible? styles.dropdownWrapper : styles.dropdownWrapper + ' ' + styles.hidden} onClick={() => setDropdownVisible(false)}>
                        <div className={dropdownVisible ? styles.dropdown : styles.dropdown + ' ' + styles.hidden}>
                            <NavLink to='/'>Главная</NavLink>
                            <NavLink to='/catalog'>Каталог</NavLink>
                            <NavLink to='/favorite-list'>Избранное</NavLink>
                            <NavLink to='/shopping-cart'>Корзина</NavLink>
                        </div>
                    </div>
                </>
                :
                <nav className={styles.navigation}>
                    <NavLink className={styles.item} to="/"><MainPageButton/></NavLink>
                    <NavLink className={styles.item} to='/catalog'><CatalogPageButton/></NavLink>
                    <NavLink className={styles.item} to={'/favorite-list'}><FavoriteListButton/></NavLink>
                <ShoppingCartButton/>
            </nav>
}
</div>
)
}