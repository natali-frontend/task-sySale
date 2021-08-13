import React, { useState } from 'react';
import styles from "./ProductsItem.module.scss";
import { ReactComponent as CompareSvg } from "../../images/icons/compare.svg";
import { ProductFilter } from '../ProductFilter/ProductFilter';

export const ProductItem = ({item}) => {
    const [count, setCount] = useState(1);
    return (
        <div className={styles.productsItem}>
                            <span className={styles.new}>
                                New
                            </span>
            <button className={styles.compare}>
                <CompareSvg />
            </button>
            <div className={styles.itemImage}>
                <a href={'/'}>
                    <img src={item.image} alt='product' />
                    <img src={item.image2} className={styles.hide} alt='product' />
                </a>
            </div>
            <div className={styles.itemDescription}>
                <h2>{item.title}</h2>
                <p>
                    {item.description}
                </p>
            </div>
            <ProductFilter item={item} count={count} setCount={setCount} />
        </div>
    )
};