import { CartContext } from "@/context";
import { Grid, Typography } from "@mui/material"
import { useContext } from "react"
import { currency } from '@/utils';


export const OrderSummary = () => {

    const { numberOfItems, subTotal, total, tax } = useContext( CartContext );

  return (
    <Grid container>
        
        <Grid item xs={6}>
            <Typography>No. Productos</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>{numberOfItems} { numberOfItems > 1 ? 'productos': 'producto' }</Typography>
        </Grid>

        <Grid item xs={6}>
            <Typography>SubTotal</Typography>
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>{ currency.format(subTotal) }</Typography>
        </Grid>

        <Grid item xs={6}>
            {/* <Typography>Impuestos (15%)</Typography> */}
        </Grid>
        <Grid item xs={6} display='flex' justifyContent='end'>
            {/* <Typography>{ `$${ 35.34 }` }</Typography> */}
        </Grid>

        <Grid item xs={6} sx={{ mt:2  }}>
            <Typography variant="h2"><b> Total: </b></Typography>
        </Grid>
        <Grid item xs={6} sx={{ mt:2 }} display='flex' justifyContent='end'>
            <Typography variant="subtitle1">{ currency.format(total) }</Typography>
        </Grid>

    </Grid>
  )
}
