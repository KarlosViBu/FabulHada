import NextLink from 'next/link';

import { Box, Link, Typography } from "@mui/material"
import { ShopLayout } from "../../components/layouts"
import medusa from '../../../public/gifs/carrito-de-compras.gif'
import Image from 'next/image';


const EmptyPage = () => {
   return (
      <ShopLayout title="Carrito vació" pageDescription="No hay artículos en el carrito de compras">

         <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            height='calc(100vh - 200px)'
            sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
         >
            <Image src={medusa} width={200} alt="sin" priority />

            <Box display='flex' flexDirection='column' alignItems='center'>
               <Typography variant='h5'>Su carrito está vació</Typography>
               <NextLink href='/' passHref legacyBehavior>
                  <Link typography="h4" color='secondary'>
                     Regresar
                  </Link>
               </NextLink>
            </Box>


         </Box>
      </ShopLayout>
   )
}

export default EmptyPage