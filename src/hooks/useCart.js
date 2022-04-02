import { useEffect, useState } from 'react';
import { getStoredItem } from '../utilities/localStorageDb';

const useCart = (coins) => {
    const [crypto, setCrypto] = useState([]);
    useEffect(() => {
        const storedItem = getStoredItem();
        const addNewCart = [];
        for (const id in storedItem) {
            const addedCrypto = coins.find(coin => coin.id === id);
            if (addedCrypto) {
                addedCrypto.quantity = storedItem[id];
                addNewCart.push(addedCrypto)
            }
        }
        setCrypto(addNewCart)
    }, [coins])
    return [crypto, setCrypto]
};

export default useCart;