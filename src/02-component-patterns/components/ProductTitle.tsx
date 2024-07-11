import styles from '../styles/styles.module.css';
import {ProductContext} from './ProductCard';
import {useContext} from 'react';

export const ProductTitle = ({title}: {title?: string}) => {
    const {product} = useContext(ProductContext);
    return (
        <div className={styles.productTitle}>{title || product.title}</div>
    );
}
