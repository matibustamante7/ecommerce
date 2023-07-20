import { Button, Container, MenuItem, Select, } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterCategory, orderByPrice } from "../../redux/actions";
import theme from "../../theme";

///estilos de botones

export default function SubHeader() {

    const [precio, setPrecio] = useState('');
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
    return (
        <Container maxWidth sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: theme.palette.background.subheader }}>
            {/* precio minimo */}
            <Select
                labelId="select-price"
                id="demo-select-small-label"
                name="price"
                onChange={handleChangePrice}
                label="Price"
                value={precio}
                width='200px'
            >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value='minor'>Minor to major</MenuItem>
                <MenuItem value='major'>Major to minor</MenuItem>
            </Select>
            

            <Button value="all" onClick={handleCategoria}>See all</Button>
            <Button value="men's clothing" onClick={handleCategoria}>Men's clothing</Button>
            <Button value="women's clothing" onClick={handleCategoria}>Woman's clothing</Button>
            <Button value='jewelery' onClick={handleCategoria}>jewelery</Button>
            <Button value='electronics' onClick={handleCategoria}>electronics</Button>
        </Container>
    )
}