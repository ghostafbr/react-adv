import {ProductButtons, ProductCard, ProductImage, ProductTitle} from '../components';
import '../styles/custom-styles.css';
import {products} from '../data/products';
import {Product, ProductCartHandlers} from '../interfaces/interfaces';

const product: Product = products[0];

export const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            <ProductCard
                key={product.id}
                product={product}
                className="bg-dark text-bold"
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >
                {
                    ({reset, isMaxReached, maxCount, increaseBy, count}: ProductCartHandlers) => (
                        <>
                            <ProductImage className="custom-image" style={{
                                boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                            }}/>
                            <ProductTitle className="text-white"/>
                            <ProductButtons className="custom-buttons"/>

                            <button onClick={reset}> Reset </button>
                            <button onClick={() => increaseBy(-2)}> -2 </button>
                            {
                                (!isMaxReached && <button onClick={() => increaseBy(2)}> +2 </button>)
                            }
                            <span> {count} - { maxCount } </span>
                        </>
                    )
                }

            </ProductCard>
        </div>
    );
};
