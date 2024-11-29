import styles from "./Header.module.css";
import {Navigation} from "../Navigation/Navigation.jsx";

export const Header = () => {


    return(
        <header className={styles.header}>

            <h1 className={styles.title}>FakeStore</h1>

            <Navigation />


        </header>
    )
}