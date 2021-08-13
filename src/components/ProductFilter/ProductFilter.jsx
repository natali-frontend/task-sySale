import React, { useState } from 'react';
import styles from "./ProductFilter.module.scss";
export const ProductFilter = ({item, count, setCount, filterData = ['Желтый', 'Красный', 'Зелёный']}) => {
    const [isActive, setIsActive] = useState(false);
    const [filterValue, setFilterValue] = useState('Цвет')
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
                <div className={styles.radio}>
                    <input type='radio' name='radio' id='radio1' />
                    <label htmlFor='radio1'>100 мл</label>
                </div>
                <div className={styles.radio}>
                    <input type='radio' name='radio' id='radio2' />
                    <label htmlFor='radio2'>200 мл</label>
                </div>
                <div className={styles.radio}>
                    <input type='radio' name='radio' id='radio3' />
                    <label htmlFor='radio3'>300 мл</label>
                </div>
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