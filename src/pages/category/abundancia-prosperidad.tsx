import type { NextPage } from 'next';
import { Typography } from '@mui/material';

import { ShopLayout } from '@/components/layouts';

import { ProductList } from '@/components/products';
import { useProducts } from '@/hooks';

import { FullScreenLoading } from '@/components/ui';


const AbundanciaProsperidadPage: NextPage = () => {


  const { products, isLoading } = useProducts('/products?category=abundancia-prosperidad');


  return (
    <ShopLayout title={'Fabul♥Hada - Amor y Armonía'} pageDescription={'Los mejores productos de FabulHada para el Amor y Armonía'}>
        <Typography variant='h1' component='h1'>Abundancia y Prosperidad</Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>Salmodia</Typography>

        {
          isLoading
            ? <FullScreenLoading />
            : <ProductList products={ products } />
        }

    </ShopLayout>
  )
}

export default AbundanciaProsperidadPage
