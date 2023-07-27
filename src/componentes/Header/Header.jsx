import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';
import SubHeader from '../SubHeader/SubHeader';
import theme from '../../theme';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { searchBarProduct } from '../../redux/actions';
import { Badge, Typography } from '@mui/material';

export default function ButtonAppBar() {

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);

  //cantidad total de productos en carrito
  const cantTotalCartItems = (cartItems)=>{
    let cantTotal =0;
    for (const item of cartItems) {
      cantTotal += item.cantidad;
    }
    return cantTotal;
  }

  const prodInCart = cantTotalCartItems(cartItems);
  // console.log(prodInCart);


  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '50ch',
      },
    },
  }));

  const goToCart = () => {
    navigate('/cart')
  }
  const hadleGoHome = () => {
    navigate('/')
  }
  const goToLogin = () => {
    navigate('/login')
  }
  //hace el dispatch a la action que busca en la searchbar
  const handleChangeSearch = (e) => {
    let producto = e.target.value.toLowerCase();
    dispatch(searchBarProduct(producto))
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: '60%', m: 'auto' }}>

            <Typography variant='h5'onClick={() => hadleGoHome()} sx={{color:theme.palette.background.subHeader, cursor:"pointer"}}>React Shop</Typography>


          <Search sx={{ width: 'xl' }}
            onChange={handleChangeSearch}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box
            sx={{ display: 'flex', alignItems: 'center', m: 'auto' }}>
            <FavoriteBorderSharpIcon />
            <Button color='inherit' sx={{ m: 2 }} onClick={goToLogin}>
              <LoginTwoToneIcon />
              Login
            </Button>
            <Badge color='error' badgeContent={prodInCart} onClick={goToCart} sx={{ cursor: 'pointer' }}>
              <ShoppingCartIcon color='#fff' />
            </Badge>
          </Box>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      {location.pathname === '/' && <SubHeader/> }
    </Box>
  );
}