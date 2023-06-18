import { FC, useMemo, useState } from 'react';
import NextLink from 'next/link';
import { Grid, Card, CardActionArea, CardMedia, Box, Typography, Link } from '@mui/material'
import 'animate.css';

import { IProduct } from '../../interfaces'

interface Props {
   product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {

   const [isHovered, setIsHovered] = useState(false);
   // const [isImageLoaded, setIsImageLoaded] = useState(false);

   const productImage = useMemo(() => {
      return isHovered
         ? `/products/pergamino-1.png`
         : `/products/${product.images[0]}`;

   }, [isHovered, product.images])

   // const bgCategory =
   let bgCategory = "bgc-1"
   // switch( product.category ) {
   //     case 'amor-armonia':
   //         bgCategory = "bgc-1"
   //         return bgCategory;

   //     default:
   //         let bgCategory = "bgc-1"
   //         return bgCategory;
   // }

   if (product.category === 'amor-armonia')
      bgCategory = "bgc1"
   if (product.category === 'sabiduria-poder')
      bgCategory = "bgc2"

   const inImage = useMemo(() => {
      return isHovered
         // ? "animate__animated animate__flipInY"
         ? "animate__animated animate__zoomIn animate__fast bordImg  kshadow"
         : "animate__animated animate__fadeIn animate__slow bordImg  kshadow"
      // : "animate__animated animate__zoomIn animate__faster"

   }, [isHovered])

   return (
      <Grid item
         xs={6}
         sm={3}
         className='kzin'
         onMouseLeave={() => setIsHovered(false)}
         onMouseEnter={() => setIsHovered(true)}
         
      >
         <Card 
         
         >
            <NextLink href="/product/slug" passHref prefetch={false} legacyBehavior
            >
               {/* <NextLink href={`/product/${ product.slug }`} passHref prefetch={ false }> */}
               <Link >
                  <CardActionArea className={bgCategory}>
                     <CardMedia
                        component='img'
                        // className={inImage}
                        image={productImage}
                        alt={product.personage}
                     // onLoad={ () => setIsImageLoaded(true) }
                     />

                  </CardActionArea>
               </Link>
            </NextLink>

         </Card>
         
         {/* <Box sx={{ mt: 1, display: isHovered ? 'block' : 'none' }} className='kiam'>
            <Typography fontSize={22} fontFamily={"Playball"}>{product.iam}</Typography>

         </Box> */}

         <p className=''>
         </p>
         {/* <Box sx={{ mt: 1, display: isImageLoaded ? 'block' : 'none' }} className='fadeIn'> */}
         <Box sx={{ display: 'block' }} className='fadeIn cardText'>
            <Typography fontSize={22} fontWeight={700}
            
            >{product.personage}</Typography>
            <Typography fontSize={25} fontWeight={600}>{`$${product.price}`}</Typography>
         </Box>
      </Grid>
   )
}
