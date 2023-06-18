import NextLink from 'next/link';

import { Link, Box, Card, CardContent, Divider, Grid, Typography, Chip } from '@mui/material';
// import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material';

import { ShopLayout } from '../../components/layouts/ShopLayout';
import { CartList, OrderSummary } from '../../components/cart';
// import { Icon } from '@iconify/react';
import PayIcon from '@/components/iconos/PayIcon';


const OrderPage = () => {
  return (
    <ShopLayout title='Resumen de la orden 123671523' pageDescription={'Resumen de la orden'}>
        <Typography variant='h1' component='h1'>Orden: ABC123</Typography>

        {/* <Icon icon="mdi:recurring-payment" color="#154" width="54" /> */}
        <PayIcon />
        <Chip 
            sx={{ my: 2 }}
            label="Pendiente de pago"
            variant='outlined'
            color="error"
            // icon={ <CreditCardOffOutlined /> }
        />
        <Chip 
            sx={{ my: 2 }}
            label="Orden ya fue pagada"
            variant='outlined'
            color="success"
            // icon={ <CreditScoreOutlined /> }
        />

        <Grid container>
            <Grid item xs={ 12 } sm={ 7 }>
                <CartList />
            </Grid>
            <Grid item xs={ 12 } sm={ 5 }>
                <Card className='summary-card'>
                    <CardContent>
                        <Typography variant='h2'>Resumen (3 productos)</Typography>
                        <Divider sx={{ my:1 }} />

                        <Box display='flex' justifyContent='space-between'>
                            <Typography variant='subtitle1'>Dirección de entrega</Typography>
                            <NextLink href='/checkout/address' passHref legacyBehavior>
                                <Link underline='always'>
                                    Editar
                                </Link>
                            </NextLink>
                        </Box>

                        
                        <Typography>Diana Cardona</Typography>
                        <Typography>323 Algun lugar</Typography>
                        <Typography>SomerVille, HYA 23S</Typography>
                        <Typography>Colombia</Typography>
                        <Typography>+57 3002428235</Typography>

                        <Divider sx={{ my:1 }} />

                        <Box display='flex' justifyContent='end'>
                            <NextLink href='/cart' passHref legacyBehavior>
                                <Link underline='always'>
                                    Editar
                                </Link>
                            </NextLink>
                        </Box>

                        <OrderSummary />

                        <Box sx={{ mt: 3 }}>
                            {/* TODO */}
                            <h1>Pagar</h1>

                            {/* <Icon icon="mdi:recurring-payment" color="#154" width="54" /> */}
                            <Chip 
                                sx={{ my: 2 }}
                                label="Orden ya fue pagada"
                                variant='outlined'
                                color="success"
                                // icon={ <CreditScoreOutlined /> }
                            />
                        </Box>

                    </CardContent>
                </Card>
            </Grid>
        </Grid>


    </ShopLayout>
  )
}

export default OrderPage;