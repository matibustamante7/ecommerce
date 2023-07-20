import { Box, Button, Container, Paper, Rating, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addToCart, findProductDetail } from "../../redux/actions";
import theme from "../../theme";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const styleButtonBack = () =>{

}

export default function ProductDetail() {
    const { id } = useParams();
    const productDetail = useSelector((state) => state.productDetail)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(findProductDetail(id))
    }, [])
    // console.log(productDetail);
    const handleBack = () => {
        navigate('/')
    }

    const handleAddToCart = (productDetail) => {
       dispatch(addToCart(productDetail));
    //    carrito.push(producto)
    //    console.log(carrito);
   }

    return (
        <Container sx={{ maxWidth: '25rem', mt: 10, p: 2 }}>

            <Typography onClick={handleBack}
                sx={{mb: 5,
                    width:'2rem',
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: 20,
                    cursor: 'pointer',
                    color: theme.palette.secondary.main,
                    '&:hover': {
                      color: theme.palette.button.delete,},
                }}>
                    <ArrowBackIcon /> Back</Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, }}>
                <Paper
                    sx={{ maxWidth: '400px', display: 'flex', alignItems: 'center', textAlign: "center", gap: 1 }}>
                    <img src={productDetail.image} alt={productDetail.title} style={{ width: '70%', height: 'auto', margin: 'auto' }} />
                </Paper>
                <Box>
                    <Typography variant="h4">{productDetail.title}</Typography>
                    <Typography variant="h6" sx={{ opacity: 0.4 }}>Category: {productDetail.category}</Typography>
                    <Typography variant="h5">$ {productDetail.price}</Typography>
                    <Typography sx={{ display: 'flex', alignItems: 'center' }}>Rating:
                        <Rating name="size-small" value={productDetail.rating?.rate} size="small" disabled /></Typography>
                    <Button
                     variant="contained"
                      sx={{ mt: 4, backgroundColor: theme.palette.button.success }}
                      onClick={handleAddToCart(productDetail)}>Add to cart</Button>
                </Box>
            </Box>
        </Container>
    )
}