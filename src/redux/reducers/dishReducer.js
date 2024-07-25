import { createSlice } from '@reduxjs/toolkit';

// Helper functions to handle local storage
const loadFromLocalStorage = (key) => {
    try {
        const serializedState = localStorage.getItem(key);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn('Error loading from local storage', e);
        return undefined;
    }
};

const saveToLocalStorage = (key, state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(key, serializedState);
    } catch (e) {
        console.warn('Error saving to local storage', e);
    }
};

// Initial state
const initialCart = loadFromLocalStorage('dishCart') || [];

const dishCartSlice = createSlice({
    name: 'dishCart',
    initialState: initialCart,
    reducers: {
        addProductToCart: (state, action) => {
            const product = action.payload;
            console.log(product);
            const existingProduct = state.find(item => item.productId === product.productId);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.push({ ...product, quantity: 1 });
            }
            //state.push({ ...product, quantity: 1 });
            saveToLocalStorage('dishCart', state);
        },
        removeProductFromCart: (state, action) => {
            const productId = action.payload;
            const updatedCart = state.filter(item => item.productId !== productId);
            saveToLocalStorage('dishCart', updatedCart);
            return updatedCart;
        },
        incrementProductQuantity: (state, action) => {
            const productId = action.payload;
            const product = state.find(item => item.productId === productId);
            if (product) {
                product.quantity += 1;
                saveToLocalStorage('dishCart', state);
            }
        },
        decrementProductQuantity: (state, action) => {
            const productId = action.payload;
            const product = state.find(item => item.productId === productId);
            if (product && product.quantity > 1) {
                product.quantity -= 1;
                saveToLocalStorage('dishCart', state);
            }
        },
        clearCart: (state) => {
            const updatedCart = [];
            saveToLocalStorage('dishCart', updatedCart);
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
