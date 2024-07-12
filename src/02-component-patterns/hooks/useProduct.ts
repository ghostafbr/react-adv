import {useEffect, useRef, useState} from 'react';
import {InitialValues, OnChangeArgs, Product} from '../interfaces/interfaces';

interface UseProductArgs {
    product: Product;
    onChange?: (args: OnChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const useProduct = ({onChange, product, value = 0, initialValues}: UseProductArgs) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false);

    const increaseBy = (value: number): void => {

        // const newValue = Math.max( counter + value, 0);
        const newValue: number = Math.min(Math.max(counter + value, 0), initialValues?.maxCount || Infinity);
        setCounter(newValue);

        onChange && onChange({count: newValue, product});
    };

    const reset = () => setCounter(initialValues?.count || value);

    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(value);
    }, [value]);

    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);

    return {
        counter,
        isMaxReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        increaseBy,
        reset
    };

};
