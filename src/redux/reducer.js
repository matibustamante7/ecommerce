import { ADD_TO_CART, DELETE_PROD_TO_CART, EMPTY_CART, FILTER_CATEGORY, GET_PRODUCTS, GET_PRODUCT_DETAIL, NEW_CANT_PROD_CART, ORDER_BY_PRICE, SEARCH_BAR } from "./actionsTypes";


const initialState = {
    products: [],
    allProducts: [],
    productDetail: {},
    cartItems: [],
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload,
                allProducts: payload
            }
        case FILTER_CATEGORY:
            const allProducts = state.allProducts;
            const filterCategory = payload === 'all' ? allProducts : allProducts.filter(el => el.category === payload);
            return {
                ...state,
                products: filterCategory
            }
        case ORDER_BY_PRICE:
            let sortPrice = payload === 'minor' ?
                [...state.products].sort(function (a, b) {
                    // return menor a mayor
                    return a.price - b.price;
                }) :
                [...state.products].sort(function (a, b) {
                    // return mayor a menor
                    return b.price - a.price
                })
            // console.log('log de sort',sortPrice);
            return {
                ...state,
                products: sortPrice
            }
        case GET_PRODUCT_DETAIL:
            return {
                ...state,
                productDetail: payload
            }
        case ADD_TO_CART:
            const nuevoProducto = payload;
            const productoExistente = state.cartItems.find((item) => item.id === nuevoProducto.id);

            if (productoExistente) {
                // Si el producto ya está en el carrito, incrementar la cantidad
                const productoActualizado = {
                    ...productoExistente,
                    cantidad: productoExistente.cantidad + 1,
                };
                const cartItemsActualizado = state.cartItems.map((item) =>
                    item.id === nuevoProducto.id ? productoActualizado : item
                );
                return {
                    ...state,
                    cartItems: cartItemsActualizado,
                };
            } else {
                // Si el producto no está en el carrito, agregarlo al estado del carrito
                nuevoProducto.cantidad = 1;
                return {
                    ...state,
                    cartItems: [...state.cartItems, nuevoProducto],
                };
            }

        case EMPTY_CART:
            let emptyAllCart = []
            return {
                ...state,
                cartItems: emptyAllCart
            }
        case DELETE_PROD_TO_CART:
            let itemToDelete = state.cartItems.filter(item => item.id !== payload);
            return {
                ...state,
                cartItems: itemToDelete
            }
        case NEW_CANT_PROD_CART:
            const {prodId, cantProd} = payload;
            return {
                ...state,
                cartItems: state.cartItems.map((item) =>
                    item.id === prodId ? { ...item, cantidad: cantProd } : item
                ),
            };
        case SEARCH_BAR:
            let producto = state.allProducts.filter((item)=> item.title.toLowerCase().includes(payload));
            return{
                ...state,
                products: producto
            }
        default:
            return { ...state }
    }
}
export default reducer;