import { FC, useMemo, useState } from 'react';
import NextLink from 'next/link';
import { Grid, Card, CardActionArea, CardMedia, Box, Typography, Link, Chip } from '@mui/material'

import { IProduct } from '../../interfaces'
import 'animate.css';

interface Props {
   product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {

   const [isHovered, setIsHovered] = useState(false);
   const [isImageLoaded, setIsImageLoaded] = useState(false);

   const productImage = useMemo(() => {
      // ? `/products/${product.images[1]}`
      return isHovered
         ? `/products/pergamino-1.png`
         : `/products/${product.images[0]}`;

   }, [isHovered, product.images])

   return (
      <Grid item
         xs={6}
         sm={3}
         className='kzin'
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
      >
         <Card>
            <NextLink href={`/product/${product.slug}`} passHref legacyBehavior prefetch={false} className='padre'>
               <Link>

                  <CardActionArea>
                  <Box sx={{ mt: 1, display: isHovered ? 'flex' : 'none' }} className='kiam'>
                     <Typography fontSize={20} fontFamily={"Playball"}
                     sx={{ position: 'absolute', zIndex: 99, top: '30px', textAlign: 'center',
                     Left:'20px' }}
                     >
                        {product.iam}
                     </Typography>

                  </Box>

                     {
                        (product.inStock === 0) && (
                           <Chip
                              color="primary"
                              label="No hay disponibles"
                              sx={{ position: 'absolute', zIndex: 99, top: '10px', left: '10px' }}
                           />
                        )
                     }

                     <CardMedia
                        component='img'
                        className='fadeIn'
                        image={productImage}
                        alt={product.personage}
                        onLoad={() => setIsImageLoaded(true)}
                     />

                  </CardActionArea>
               </Link>
            </NextLink>

         </Card>
         

         {/* <Box sx={{ zIndex: 99, textAlign: 'center', display: isHovered ? 'flex' : 'none' }} className='text-iam'>
            <Typography fontWeight={700}>{product.iam}</Typography>
         </Box> */}

         <Box sx={{ display: 'block' }} className='fadeIn cardText'>
            <Typography fontSize={22} fontWeight={700} sx={{ mb:0 }}
            
            >{product.personage}</Typography>
            <Typography fontSize={25} fontWeight={600} sx={{ mb:0 }}>{`$${product.price}`}</Typography>
         </Box>
      </Grid>
   )
}
