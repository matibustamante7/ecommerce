import { Box, Button, Container, Divider, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux"
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteProduct, emptyCart, newCantProdCart } from "../../redux/actions";
import theme from "../../theme";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState } from "react";
import { Wallet, initMercadoPago } from "@mercadopago/sdk-react";
import axios from "axios";

export default function Cart() {

    const cartItems = useSelector((state) => state.cartItems); // Modifica el nombre para evitar confusiones
    // const [totalCart, setTotalCart] = useState(0);

    const dispatch = useDispatch();

    const handleRemoveProduct = (proId) => {
        dispatch(deleteProduct(proId))
    }

    const handleDelete = () => {
        dispatch(emptyCart())
    }
    let totalProd = 0;

    const handleChangeCountProd = (productId, newCount) => {
        // Acciones para actualizar la cantidad del producto en el carrito
        if (newCount >= 1) {
            dispatch(newCantProdCart(productId, newCount));
        } else {
            //Si la cantidad es menor a 1 se elimina el producto el carrito
            handleRemoveProduct(productId)
        }
    };

    const totalCart = () => {
        let totalProd = 0;
        let totalCartPrice = 0;
        cartItems.forEach((prod) => {
            //sumo el precio de cada producto por su cantidadd
            totalProd = prod.price * prod.cantidad
            //sumo el total de total de productos y los sumo al total de todos los productos
            totalCartPrice += totalProd;
        });
        return totalCartPrice.toFixed(2);
    }



    //preferences mercadopago
    const [preferences, setPreferences] = useState(null);
    initMercadoPago('public_key')


    const createPreference = async (cartItems) => {
        console.log(cartItems);
        try {
            // Recorre cada producto del carrito y crea un arreglo de objetos con los datos necesarios
            const items = cartItems.map((producto) => ({
                title: producto.title,
                unit_price: parseFloat(producto.price),
                quantity: parseInt(producto.cantidad),
                currency_id: "ARS",
            }));
            // Realiza la solicitud a tu backend para crear la preferencia en MercadoPago
            const response = await axios.post('http://localhost:3001/create_preference', {
                items, // Pasamos el arreglo de objetos con los datos de los productos
            });

            // Obtenemos el ID de preferencia desde la respuesta del backend
            const { id } = response.data;
            return id;
        } catch (error) {
            console.log(error);
        }
    }

    const handleBuy = async () => {
        const id = await createPreference(cartItems); // Pasamos cartItems como argumento
        if (id) {
            setPreferences(id);
        }
    }

    return (
        <Container sx={{p:7}} >
            <Typography variant="h2" textAlign='center' margin='2rem'>Shopping cart</Typography>
            <Divider />
            {
                cartItems.map((producto) => {
                    return (
                        <Box component='Paper'
                            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 3, borderBottom: 1, p: 2, m: 2 }}>
                            <Box
                                component='img'
                                src={producto.image}
                                alt={producto.title}
                                width='10rem'>
                            </Box>
                            <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <Typography variant="h4">{producto.title}</Typography>
                                <Typography>$ {producto.price}</Typography>
                                <TextField
                                    label='Amount'
                                    type="number"
                                    value={producto.cantidad}
                                    onChange={(e) => handleChangeCountProd(producto.id, parseInt(e.target.value))}
                                    sx={{ maxWidth: '5rem' }} />
                                <Typography>Total Product: <b>${(totalProd = producto.price * producto.cantidad).toFixed(2)}</b></Typography>

                            </Box>
                            <Box sx={{ m: 4 }}>
                                <Button onClick={() => handleRemoveProduct(producto.id)}>
                                    <DeleteIcon color="error" />
                                </Button>
                            </Box>
                        </Box>
                    )
                })
            }
            {
                cartItems.length > 0 ? (
                    <Box
                        sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
                    >
                        <Box sx={{ m: 4 }}>
                            <Button
                                variant="contained"
                                sx={{ backgroundColor: theme.palette.button.delete }}
                                onClick={() => handleDelete()}
                            >
                                Empty cart<DeleteIcon color="" />
                            </Button>
                        </Box>

                        <Box sx={{ display: "flex", justifyContent: "space-between", maxHeight: "3rem", gap: 2 }}>
                            <Button
                                variant="contained"
                                sx={{ backgroundColor: theme.palette.button.succsess }}
                                onClick={() => handleBuy()} // Cambiar handleDelete() por el evento correcto para comprar
                            >
                                Buy <ShoppingCartIcon color="" />
                            </Button>
                            {preferences &&
                                <Wallet initialization={{ preferenceId: preferences }} />
                            }
                            <Typography variant="h5">Total cart: ${totalCart()}</Typography>
                        </Box>
                    </Box>
                ) : (
                    <Typography variant="h3" sx={{ textAlign: 'center' }}>The cart is empty</Typography>
                )
            }

        </Container>
    )
}