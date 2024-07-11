import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";
import {ProductContext} from "./ProductCard";
import {useContext} from 'react';

export const ProductImage = ({img = ''}) => {
    const {product} = useContext(ProductContext);
    let imgToDisplay: string = img ? img : product?.img || noImage;

    return (
        <img className={styles.productImg} src={imgToDisplay} alt="Product"/>
    );
}
