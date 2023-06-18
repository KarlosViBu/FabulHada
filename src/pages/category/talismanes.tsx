import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { ShopLayout } from '@/components/layouts';

import { ProductList } from '@/components/products';
import { useProducts } from '@/hooks';

import { FullScreenLoading } from '@/components/ui';


const TalismanesPage: NextPage = () => {


  const { products, isLoading } = useProducts('/products?category=talismanes');


  return (
    <ShopLayout title={'Fabul♥Hada - Talismanes'} pageDescription={'Los mejores productos de FabulHada acerca de Talismanes'}>
        <Typography variant='h1' component='h1'>Talismanes</Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>Salmodia</Typography>

        {
          isLoading
            ? <FullScreenLoading />
            : <ProductList products={ products } />
        }

    </ShopLayout>
  )
}

export default TalismanesPage
