import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { ShopLayout } from '@/components/layouts';

import { ProductList } from '@/components/products';
import { useProducts } from '@/hooks';

import { FullScreenLoading } from '@/components/ui';


const NaturalezaZodiacoPage: NextPage = () => {


   const { products, isLoading } = useProducts('/products?category=naturaleza-zodiaco');


   return (
      <ShopLayout title={'Fabul♥Hada - Naturaleza & Zodiaco'} 
      pageDescription={'Los mejores productos de FabulHada para la Naturaleza y Zodiaco'}>
         <Typography variant='h1' component='h1'>Naturaleza y Zodíaco</Typography>
         <Typography variant='h2' sx={{ mb: 1 }}>Salmodia</Typography>

         {
            isLoading
               ? <FullScreenLoading />
               : <ProductList products={products} />
         }

      </ShopLayout>
   )
}

export default NaturalezaZodiacoPage
