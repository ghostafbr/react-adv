import {ProductContextProps, ProductCardProps} from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';
import {useProduct} from '../hooks/useProduct';
import {createContext} from 'react';


export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;

export const ProductCard = ({children, product}: ProductCardProps) => {
    const {counter, increaseBy} = useProduct();
    return (
        <Provider value={{
            product,
            increaseBy,
            counter
        }}>
            <div className={styles.productCard}> {children} </div>
        </Provider>

    );
};
