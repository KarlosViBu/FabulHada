import { FC, useMemo, useState } from 'react';
import NextLink from 'next/link';
import { Grid, Card, CardActionArea, CardMedia, Box, Typography, Link, Chip, Badge } from '@mui/material'
import 'animate.css';
import { IProduct } from '../../interfaces'

interface Props {
    product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {

    const [isHovered, setIsHovered] = useState(false);
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const productImage = useMemo(() => {
        return isHovered
          ? `/products/${ product.images[1] }`
          : `/products/${ product.images[0] }`;

    }, [isHovered, product.images])

    const inImage = useMemo(() => {
      return isHovered
         ? "animate__animated animate__flipInY kshadow"
        //  ? "animate__animated animate__zoomIn animate__fast bordImg  kshadow"
         : "animate__animated animate__fadeIn animate__slow bordImg"
      // : "animate__animated animate__zoomIn animate__faster"

   }, [isHovered])

    return (
        <Grid item 
        xs={6} 
        sm={ 3 }
        
        >
          <Card>
              <NextLink href={`/product/${ product.slug }`} passHref legacyBehavior prefetch={ false }>
                <Link>

                    <CardActionArea
                    onMouseEnter={ () => setIsHovered(true) } 
                    onMouseLeave={ () => setIsHovered(false) }
                    >

                        {
                            (product.inStock === -1 ) && (
                                <Chip 
                                    color="success"
                                    label={product.personage}
                                    // variant="outlined" 
                                    sx={{ position: 'absolute', zIndex: 99, top: '10px', left:'50px' }}
                                />
                                
                            )
                        }

                        <CardMedia 
                            component='img'
                           //  className='fadeIn'
                            className={inImage}
                            image={ productImage }
                            alt={ product.personage }
                            onLoad={ () => setIsImageLoaded(true) }
                        />

                    </CardActionArea>
                </Link>
              </NextLink>
              
          </Card>
          {/*  */}
          <Box sx={{ mt: 1, display: isImageLoaded ? 'block' : 'none' }}  className='fadeIn cardText'>
          {/* <Typography  sx={{ mb:1 }} */}
            
            {/* // >{product.personage}</Typography> */}
            <p className='kper'>{product.personage}</p>
            <p className='kpre'>{`$${product.price}`}</p>
            {/* <Typography  sx={{ mb:0 }}>{`$${product.price}`}</Typography> */}
          </Box>
      </Grid>
    )
}
