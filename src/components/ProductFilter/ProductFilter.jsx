import React from 'react';
import styles from "./ProductFilter.module.scss";

export const ProductFilter = ({item, count, setCount}) => {
    return (
        <div className={styles.filter}>
            <div className={styles.filterTop}>
                <div className={styles.filterColor}>
                    <span>Цвет</span>
                    <ul>
                        <li>Жёлтый</li>
                        <li>Красный</li>
                        <li>Зелёный</li>
                    </ul>
                </div>
                <span className={styles.price}>{item.price} грн</span>
            </div>
            <form>
                <label>
                    <input type='radio' name='volume' />
                    100 мл
                </label>
                <label>
                    <input type='radio' name='volume' />
                    200 мл
                </label>
                <label>
                    <input type='radio' name='volume' />
                    300 мл
                </label>
            </form>
            <div className={styles.filterBottom}>
                <div className={styles.quantity}>
                    <div className={styles.quantityButtons}>
                        <button type='button' className='reduce'
                                onClick={() => setCount((prev) => Math.max(prev - 1, 1))}>-
                        </button>
                        <label>
                            <input type='text' value={count} />
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