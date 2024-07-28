import { createSlice } from '@reduxjs/toolkit';
import { loadFromLocalStorage, saveToLocalStorage } from '../../helpers/chartHelper';

const cartName = process.env.REACT_APP_LOCAL_STORE_NAME;
// Initial state
const initialCart = loadFromLocalStorage(cartName) || [];

const dishCartSlice = createSlice({
    name: cartName,
    initialState: initialCart,
    reducers: {
        addProductToCart: (state, action) => {
            const product = action.payload;
            //console.log(product);
            const existingProduct = state.find(item => item.productId === product.productId);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.push({ ...product, quantity: 1 });
            }
            saveToLocalStorage(cartName, state);
        },
        removeProductFromCart: (state, action) => {
            const productId = action.payload;
            const updatedCart = state.filter(item => item.productId !== productId);
            saveToLocalStorage(cartName, updatedCart);
            return updatedCart;
        },
        incrementProductQuantity: (state, action) => {
            const productId = action.payload;
            const product = state.find(item => item.productId === productId);
            if (product) {
                product.quantity += 1;
                saveToLocalStorage(cartName, state);
            }
        },
        decrementProductQuantity: (state, action) => {
            const productId = action.payload;
            const product = state.find(item => item.productId === productId);
            if (product && product.quantity > 1) {
                product.quantity -= 1;
                saveToLocalStorage(cartName, state);
            }
        },
        clearCart: (state) => {
            const updatedCart = [];
            saveToLocalStorage(cartName, updatedCart);
            return updatedCart;
        }
    }
});

export const {
    addProductToCart,
    removeProductFromCart,
    incrementProductQuantity,
    decrementProductQuantity,
    clearCart
} = dishCartSlice.actions;

export default dishCartSlice.reducer;
