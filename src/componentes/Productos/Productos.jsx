import { useEffect, useState } from "react"
// import { todasLasPrendas } from "../../data";
import { Container, Grid } from "@mui/material";
import CardProduct from "../CardProduct/CardProduct";
import { addToCart, getProducts } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import theme from "../../theme";
export default function Home() {
    const dispatch = useDispatch()

   //carrito 
//    let carrito =[];
    const handleAddToCart = (producto) => {
       dispatch(addToCart(producto));
    //    carrito.push(producto)
    //    console.log(carrito);
   }


    //despacho la accion al montarse el componente
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    //selecciono mi estado global con el useSelector
    const productos = useSelector((state) => state.products)
    // console.log(productos);

    //seccion carrito
    return (
        <Container >
            <Grid container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{pt:10 }} 
                rowSpacing={{ xs: 1, sm: 2, md: 3 }}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    productos?.map((producto) => {
                        return (
                            <Grid item>
                                <CardProduct addToCartProp={handleAddToCart} producto={producto} />
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Container>

    )
}