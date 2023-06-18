import { FC, useContext } from 'react';
import NextLink from 'next/link';
import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material';

// import { initialData } from '../../database/seed-data';
import { ItemCounter } from '../ui';
import { CartContext } from '@/context';
import { ICartProduct } from '@/interfaces';

// const productsInCart = [
//    initialData.products[0],
//    initialData.products[1],
//    initialData.products[2],
// ]

interface Props {
   editable?: boolean;
}

export const CartList: FC<Props> = ({ editable = false }) => {

   // En el context estan todos los productos del carrito
   const { cart, updateCartQuantity, removeCartProduct } = useContext(CartContext);

   const onNewCartQuantityValue = (product: ICartProduct, newQuantityValue: number) => {
      product.quantity = newQuantityValue;
      updateCartQuantity(product);
   }

   return (
      <>
         {
            cart.map(product => (
               <Grid container spacing={2} key={product.slug + product.kind} sx={{ mb: 1 }}>
                  <Grid item xs={3}>
                     {/* TODO: llevar a la página del producto */}
                     <NextLink href={`/product/${product.slug}`} passHref legacyBehavior>
                        <Link>
                           <CardActionArea>
                              <CardMedia
                                 image={`/products/${product.image}`}
                                 component='img'
                                 sx={{ borderRadius: '10px' }}
                              />
                           </CardActionArea>
                        </Link>
                     </NextLink>
                  </Grid>
                  <Grid item xs={7}>
                     <Box display='flex' flexDirection='column'>
                        <Typography fontSize={20} >{product.personage}</Typography>
                        {/* <Typography fontSize={20} >Talla: <strong>M</strong></Typography> */}

                        {
                           editable
                              ? (
                                 <ItemCounter
                                    currentValue={product.quantity}
                                    maxValue={10}
                                    updatedQuantity={(value) => onNewCartQuantityValue(product, value)}
                                 />
                              )
                              : (
                                 <Typography variant='h5'>{product.quantity} {product.quantity > 1 ? 'productos' : 'producto'}</Typography>
                              )
                        }

                     </Box>
                  </Grid>
                  <Grid item xs={2} display='flex' alignItems='center' flexDirection='column'>
                     <Typography variant='h2'>{`$${product.price}`}</Typography>

                     {
                        editable && (
                           <Button
                              variant='text'
                              color='secondary'
                              onClick={() => removeCartProduct(product)}
                           >
                              Remover
                           </Button>
                        )
                     }
                  </Grid>
               </Grid>
            ))
         }
      </>
   )
}
