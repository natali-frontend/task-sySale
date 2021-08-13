import React from 'react';
import styles from "../ProductFilter/ProductFilter.module.scss";

export const ProductRadio = ({item, index, value, selectedValue}) => {
    return (
        <div className={styles.radio} >
            <input type='radio'
                   name={item.name}
                   id={item.name + index}
                   value={value}
                   defaultChecked={Number(selectedValue) === value}
            />
            <label htmlFor={item.name + index} >{value} мл</label>
        </div>
    )
};