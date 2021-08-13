import React from 'react';

// assets
import styles from './App.module.scss';
import productImage1_1 from '../../images/product-image-1.1.jpg'
import productImage1_2 from '../../images/product-image-1.2.jpg'
import productImage2_1 from '../../images/product-image-2.1.jpg'
import productImage2_2 from '../../images/product-image-2.2.jpg'
import productImage3_1 from '../../images/product-image-3.1.jpg'
import productImage3_2 from '../../images/product-image-3.2.jpg'
import { ProductItem } from "../ProductsItem/ProductsItem";

const items = [
    {
        image: productImage1_1,
        image2: productImage1_2,
        title: "Шампунь",
        name: 'radio1',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        price: 200
    },
    {
        image: productImage2_1,
        image2: productImage2_2,
        title: "Шампунь",
        name: 'radio2',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        price: 300
    },
    {
        image: productImage3_1,
        image2: productImage3_2,
        title: "Шампунь",
        name: 'radio3',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        price: 350
    }
];

function App() {
    return (
        <main>
            <section className={styles.products}>
                <div className='container'>
                    <div className={styles.productsList}>
                        {items.map((item, index) => (
                            <ProductItem key={index} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default App;
