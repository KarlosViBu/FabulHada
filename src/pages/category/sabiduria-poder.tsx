import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { ShopLayout } from '@/components/layouts';

import { ProductList } from '@/components/products';
import { useProducts } from '@/hooks';

import { FullScreenLoading } from '@/components/ui';


const SabiduriaPoderPage: NextPage = () => {


   const { products, isLoading } = useProducts('/products?category=sabiduria-poder');


   return (
      <ShopLayout title={'Fabul♥Hada - sabiduria & poder'} pageDescription={'Los mejores productos de FabulHada para la Sabiduria y Poder'}>
         <Typography variant='h1' component='h1'>Sabiduria y Poder</Typography>
         <Typography variant='h2' sx={{ mb: 1 }}>Salmodia</Typography>

         {
            isLoading
               ? <FullScreenLoading />
               : <ProductList products={products} />
         }

      </ShopLayout>
   )
}

export default SabiduriaPoderPage
