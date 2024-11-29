import styles from './RecipeItem.module.css'
import PropTypes from "prop-types";
import {useActions} from "../hooks/useActions.js";
import {useFavorites} from "../hooks/useFavorites.js";
import {memo} from "react";

export const RecipeItem = memo(function RecipeItem({recipe}){
        const {name} = recipe;
        const favorites = useFavorites();
        const {toggleFavoritesActions} = useActions()
        const isExist = favorites.some((r) => r.id === recipe.id);

        console.log('Нарисовался:', recipe.id)
        console.log(favorites);
        return (
            <div className={styles.item}>
                <h3 className={styles.title}>{name}</h3>
                <button className={isExist
                    ? styles.button + ' '+styles.exist
                    : styles.button }
                        onClick={()=>{toggleFavoritesActions(recipe);}}
                >{isExist ? "Убрать из избранного" : "Добавить в избранное"}</button>
            </div>
        )
})



RecipeItem.propTypes = {
    recipe: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string.isRequired
    })
}