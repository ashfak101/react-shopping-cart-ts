import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useQuery } from 'react-query';
import { LinearProgress } from '@mui/material';
// Types

export type CartItemType ={
              id:number;
              category:string;
              description:string;
              image:string;
              price:number;
              title:string;
              amount:number }
const getProducts = async (): Promise<CartItemType[]> =>await(await fetch('https://fakestoreapi.com/products')).json();

const  App=()=> {
      const {data,isLoading,error}= useQuery<CartItemType[]>('products',
           getProducts
      )
      const getTotalItems=()=>null;
      const handleAddToCart=()=>null;
      const handleRemoveFromCart=()=>null;
 
       if (isLoading ) return <Box sx={{ width: '100%' }}><LinearProgress /></Box>
     
  return (
   <Box>Start</Box>
  );
}

export default App;
