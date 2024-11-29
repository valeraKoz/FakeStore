import styles from './ProductPage.module.css';
import { useParams} from "react-router";
import {useGetProductByCategoryIdQuery} from "../../api/api.js";
import {Fragment} from "react";
import PropTypes from "prop-types";
import {ProductCard} from "../../components/ProductCard/ProductCard.jsx";



export const ProductPage = () => {

    const {category,id} = useParams();
    const {isLoading, data} = useGetProductByCategoryIdQuery({category, id});


    const render = ()=>{
        return(
            <Fragment>
                <h1 className={styles.title}>{data.name}</h1>
                {<ProductCard product={data}/>}
                <div className={styles.container}>
                    <div className={styles.description}>
                        <p>{data.info.description}</p>
                    </div>

                    <h3 className={styles.specTitle}>Характеристики</h3>
                    <div className={styles.spec}>
                        <div className={styles.specItem}>
                            <h4 className={styles.specItemTitle}>Общие характеристики</h4>
                            <div className={styles.specItemInfoMain}>
                                <div className={styles.specItemInfo}>
                                    <span>Модель:</span>
                                    <span>{data.name}</span>
                                </div>
                                <div className={styles.specItemInfo}>
                                    <span>Диагональ дисплея(дюйм):</span>
                                    <span>{data.spec.displayDiagonal}"</span>
                                </div>
                                <div className={styles.specItemInfo}>
                                    <span>Дистанционный интерфейс:</span>
                                    <span>{data.spec.wirelessInterface.join(', ')}</span>
                                </div>
                                <div className={styles.specItemInfo}>
                                    <span>Разрешение видео:</span>
                                    <span>{data.spec.videoResolution}</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.specItem}>
                            <h4 className={styles.specItemTitle}>Матрица</h4>
                            <div className={styles.specItemInfoMain}>
                            <div className={styles.specItemInfo}>
                                <span>Размер матрицы:</span>
                                <span>{data.spec.matrixSize}</span>
                            </div>
                            <div className={styles.specItemInfo}>
                                <span>Полнокадровая матрица:</span>
                                <span>{data.spec.FullFrameMatrix ? 'да' : 'нет'}</span>
                            </div>
                            <div className={styles.specItemInfo}>
                                <span>Минимальная чувствительность ISO:</span>
                                <span>{data.spec.minISO}</span>
                            </div>
                            <div className={styles.specItemInfo}>
                                <span>Максимальная чувствительность ISO:</span>
                                <span>{data.spec.maxISO}</span>
                            </div>
                            </div>
                        </div>
                        <div className={styles.specItem}>
                            <h4 className={styles.specItemTitle}>Объектив</h4>
                            <div className={styles.specItemInfoMain}>
                            {   // haveObjective?????
                                data.spec.haveObjective
                                    ?
                                    (<Fragment>
                                        <div className={styles.specItemInfo}>
                                            <span>Объектив в комплекте:</span>
                                            <span>{data.spec.haveObjective ? 'есть' : "нет"}</span>
                                        </div>
                                        <div className={styles.specItemInfo}>
                                            <span>Байонет:</span>
                                            <span>{data.spec.bayonet.join(', ')}</span>
                                        </div>
                                    </Fragment>)
                                    :
                                    (<Fragment>
                                        <div className={styles.specItemInfo}>
                                            <span>Объектив в комплекте:</span>
                                            <span>{data.spec.haveObjective ? "есть" : "нет"}</span>
                                        </div>
                                        <div className={styles.specItemInfo}>
                                            <span>Байонет:</span>
                                            <span>{data.spec.bayonet.join(', ')}</span>
                                        </div>
                                    </Fragment>)
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }

    console.log('RENDER: ', isLoading ? 'LOADING...' : 'SUCCESS: ' + data.name);
    return (
        <div className={styles.wrapper}>
            {isLoading ? 'LOADING...' : render()}
        </div>
    )
}


ProductPage.propTypes = {
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