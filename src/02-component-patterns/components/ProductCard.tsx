import {createContext, CSSProperties, JSX, ReactElement} from 'react';
import {useProduct} from '../hooks/useProduct';
import {InitialValues, OnChangeArgs, Product, ProductCartHandlers, ProductContextProps} from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';


export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;

export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: (args: ProductCartHandlers) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductCard = ({children, product, className, style, onChange, value, initialValues}: Props) => {
    const {counter, increaseBy, maxCount, isMaxReached, reset} = useProduct({ onChange, product, value, initialValues });
    return (
        <Provider value={{
            counter,
            increaseBy,
            maxCount,
            product

        }}>
            <div
                className={`${styles.productCard} ${className}`}
                style={style}
            >
                {
                    children({
                        count: counter,
                        isMaxReached,
                        maxCount,
                        product,
                        increaseBy,
                        reset
                    })
                }
            </div>
        </Provider>

    );
};
