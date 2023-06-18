import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { ShopLayout } from '@/components/layouts';

import { ProductList } from '@/components/products';
import { useProducts } from '@/hooks';

import { FullScreenLoading } from '@/components/ui';


const SaludVitalidadPage: NextPage = () => {


   const { products, isLoading } = useProducts('/products?category=salud-vitalidad');


   return (
      <ShopLayout title={'Fabul♥Hada - Salud & Vitalidad'} pageDescription={'Los mejores productos de FabulHada para la Salud y Vitalidad'}>
         <Typography variant='h1' component='h1'>Salud y Vitalidad</Typography>
         <Typography variant='h2' sx={{ mb: 1 }}>Salmodia</Typography>

         {
            isLoading
               ? <FullScreenLoading />
               : <ProductList products={products} />
         }

      </ShopLayout>
   )
}

export default SaludVitalidadPage
