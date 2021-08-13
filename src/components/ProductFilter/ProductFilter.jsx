import React, { useState } from 'react';
import styles from "./ProductFilter.module.scss";
import { ProductRadio } from "../ProductRadio/ProductRadio";

export const ProductFilter = ({item, count, setCount, index, filterData = ['Желтый', 'Красный', 'Зелёный']}) => {
    const [isActive, setIsActive] = useState(false);
    const [filterValue, setFilterValue] = useState('Цвет');
    return (
        <div className={styles.filter}>
            <div className={styles.filterTop}>
                <div className={`${styles.filterColor} ${isActive ? styles.active : ''}`}
                     onClick={() => setIsActive(!isActive)}
                     onMouseLeave={() => {
                         if(isActive) {
                             setIsActive(false);
                         }
                     }}
                >
                    <span>{filterValue}</span>
                    <ul>
                        {
                            filterData.map((item, idx) => <li key={idx} onClick={() => setFilterValue(item)}>{item}</li>)
                        }
                    </ul>
                </div>
                <span className={styles.price}>{item.price} грн</span>
            </div>
            <form>
                <ProductRadio item={item} index={index} value={100} />
                <ProductRadio item={item} index={index} value={200} />
                <ProductRadio item={item} index={index} value={300} />
            </form>
            <div className={styles.filterBottom}>
                <div className={styles.quantity}>
                    <div className={styles.quantityButtons}>
                        <button type='button' className='reduce'
                                onClick={() => setCount((prev) => Math.max(prev - 1, 1))}>-
                        </button>
                        <label>
                            <input type='text' value={count} readOnly />
                        </label>
                        <button type='button' className='enlarge'
                                onClick={() => setCount((prev) => Math.min(prev + 1, 10))}>+
                        </button>
                    </div>
                </div>
                <a href={'/'} className='btn'>КУПИТЬ</a>
            </div>
        </div>
    )
};