import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterCategory, orderByPrice, orderByRating } from "../../redux/actions";
import theme from "../../theme";

///estilos de botones

export default function SubHeader() {

    const dispatch = useDispatch();

    const handleCategoria = (e) => {
        let newCat = e.target.value;
        dispatch(filterCategory(newCat));
    }
    const handleChangePrice = (e) => {
        let precio = e.target.value;
        dispatch(orderByPrice(precio))
        // console.log('el value de select a cambiado ',precio);
    }
    const handleRating =(e)=>{
        let rate = e.target.value;
        dispatch(orderByRating(rate))
        // console.log(e.target.value);
    }
    return (
        <Container sx={{  p:2, backgroundColor: theme.palette.background.subheader, minWidth:'100%', display:'flex', justifyContent:'space-around'}}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    maxWidth:'800px',
                    gap:10
                }}
            >
        
                <FormControl>
                    <InputLabel id="select-price">Price</InputLabel>
                    <Select
                        labelId="select-price"
                        id="demo-select-small-label"
                        name="price"
                        onChange={handleChangePrice}
                        label="Price"
                        style={{ width: '200px' }}
                    >
                        {/* <MenuItem value=""><em>None</em></MenuItem> */}
                        <MenuItem value='minor'>Minor to major</MenuItem>
                        <MenuItem value='major'>Major to minor</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <InputLabel id="select-category">Category</InputLabel>
                    <Select
                        labelId="select-category"
                        id="demo-select-small-label"
                        name="Category"
                        onChange={handleCategoria}
                        label="Category"
                        style={{ width: '200px' }}
                    >
                        <MenuItem value="all">All</MenuItem>
                        <MenuItem value="men's clothing">Men</MenuItem>
                        <MenuItem value="women's clothing">Women</MenuItem>
                        <MenuItem value='electronics'>Electronic</MenuItem>
                        <MenuItem value='jewelery'>Jewelery</MenuItem>
                    </Select>
                </FormControl>

                <FormControl>
                    <InputLabel id="select-rating">Rating</InputLabel>
                    <Select
                        labelId="select-rating"
                        id="demo-select-small-label"
                        name="Rating"
                        onChange={handleRating}
                        label="Rating"
                        style={{ width: '200px' }}
                    >
                        <MenuItem value="all">All</MenuItem>
                        <MenuItem value="1">1-5</MenuItem>
                        <MenuItem value="5">5-1</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Container>
    )
}