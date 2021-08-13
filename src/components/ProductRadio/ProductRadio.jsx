import React, { useState } from 'react';
import styles from "../ProductFilter/ProductFilter.module.scss";

export const ProductRadio = ({item, index, value}) => {
    const [radioValue, setRadioValue] = useState(100);
    const handleRadio = (e) => {
        setRadioValue(e)
    };
    console.log(radioValue, 'radioValue');
    return (
        <div className={styles.radio} >
            <input type='radio' name={item.name}  value={value} checked={radioValue===value} onChange={()=>handleRadio(value)}/>
            {/*<label htmlFor={`radio${item.name}${index}`} >{value} мл</label>*/}
        </div>
    )
};