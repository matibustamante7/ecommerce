import axios from "axios"
import { ADD_TO_CART, DELETE_PROD_TO_CART, EMPTY_CART, FILTER_CATEGORY, GET_PRODUCTS, GET_PRODUCT_DETAIL, NEW_CANT_PROD_CART, NEW_USER, ORDER_BY_PRICE, RATING_SELECT, SEARCH_BAR } from "./actionsTypes";


export const getProducts =() =>{
    return async function (dispatch) {
            try {
                const apiData = await axios('https://fakestoreapi.com/products');
            const products = apiData.data;
            dispatch({type:GET_PRODUCTS, payload: products});
            // console.log(products);
            } catch (error) {
                console.log(error.message)
            }
    }
}

export const filterCategory = (category) =>{
    return {
        type: FILTER_CATEGORY,
        payload: category
    }
}

export const orderByPrice = (price) => {
    return {
        type: ORDER_BY_PRICE,
        payload: price
    }
}

export const findProductDetail = (id) => {
    return  async function (dispatch) {
        const json = await axios(`https://fakestoreapi.com/products/${id}`);
        const prodDetail = json.data
        dispatch({type:GET_PRODUCT_DETAIL, payload: prodDetail})
    }
}

export const addToCart = (producto) => {
    // console.log(producto);
    return({
        type: ADD_TO_CART,
        payload: producto
    })
}

export const deleteProduct = (id) => {
    // console.log(id);    
    return({
        type: DELETE_PROD_TO_CART,
        payload: id
    })
}
export const emptyCart = (payload) => {
    return({
        type: EMPTY_CART,
        payload
    })
}

export const newCantProdCart = (prodId, cantProd) => {
    return({
        type: NEW_CANT_PROD_CART,
        payload: {prodId, cantProd}
    })
}

export const searchBarProduct = (producto) => {
    return({
        type: SEARCH_BAR,
        payload: producto
    })
}

export const orderByRating = (rate) => {
    return({
        type: RATING_SELECT,
        payload: rate
    })
}

export const newUser = (newUser) => {
    return({
        type: NEW_USER,
        payload: newUser
    })
}