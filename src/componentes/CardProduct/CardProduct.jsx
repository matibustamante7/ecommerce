import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import theme from '../../theme';
import { useNavigate } from 'react-router-dom';
import { Rating } from '@mui/material';
import { initMercadopago, Wallet } from "@mercadopago/sdk-react";

export default function CardProduct({ producto, addToCartProp }) {



  const navigate = useNavigate();
  const handleDetail = () => {
    navigate(`/${producto.id}`)
    // console.log('log de id en handle ', producto.id);
  }


  return (
    <Card sx={{ width: '20rem', height: '25rem', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        alt={producto.title}
        height="194"
        image={producto.image}
        style={{
          width: '50%', height: '50%', margin: 'auto'
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {producto.title.length > 30 ? `${producto.title.slice(0, 30)}...` : producto.title}
        </Typography>

        <Typography sx={{ display: 'flex', alignItems: 'center' }}>Rating:
          <Rating name="size-small" value={producto.rating?.rate} size="small" disabled /></Typography>
        <Typography variant="body2" color="text.secondary">$ {producto.price}</Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button size="small" onClick={() => handleDetail()}>See more</Button>
        <Button size="medium" variant='contained' onClick={() => addToCartProp(producto)}
          sx={{ backgroundColor: theme.palette.button.success }}>Add to cart</Button>
      </CardActions>
    </Card>
  );
}