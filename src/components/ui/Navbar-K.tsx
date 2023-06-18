import { useContext, useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { UiContext } from '@/context';


import { AppBar, Badge, Box, Button, IconButton, Input, InputAdornment, Link, Toolbar, Typography } from '@mui/material';
import { SHOP_CONSTANTS } from '@/database'
import SearchIcon from '../iconos/SearchIcon';
import CartIcon from '../iconos/CartIcon';
import ClearIcon from '../iconos/ClearIcon';

export const Navbar = () => {

   const menuItems: string[] = SHOP_CONSTANTS.ValidCategories;


   const { asPath, push } = useRouter();
   const router = useRouter();

   // console.log({router});
   const { toggleSideMenu } = useContext(UiContext);

   const [searchTerm, setSearchTerm] = useState('');
   const [isSearchVisible, setIsSearchVisible] = useState(false);

   const onSearchTerm = () => {
      if (searchTerm.trim().length === 0) return;
      push(`/search/${searchTerm}`);
   }

   return (
      <AppBar>
         <Toolbar>
            <NextLink href='/' passHref legacyBehavior>
               <Link display='flex' alignItems='center'>
                  <Typography variant='h1' component={'h1'}>Fabul♥Hada</Typography>
                  {/* <Typography variant='h1' component={'h1'} sx={{ ml: 0.5 }}>Hada</Typography> */}
               </Link>
            </NextLink>

            <Box flex={1} />

            <Box sx={{  xs: 'none', sm: 'block'  }}
                    className="fadeIn">

               {
                  menuItems.map( (category) => (

                     <NextLink href={`/category/${category}`} passHref legacyBehavior>
                        <Link>
                           <Button color={asPath === `/category/${category}` ? 'primary' : 'info'}>{category}</Button>
                           {/* <Button color={ 'info' }>{category}</Button> */}
                        </Link>
                     </NextLink>
                     
                     ))
               }
            </Box>

            <Box flex={1} />

            {/* Pantallas pantallas grandes */}
            {
               isSearchVisible
                  ? (
                     <Input
                        sx={{ display: { xs: 'none', sm: 'flex' } }}
                        className='fadeIn'
                        autoFocus
                        value={searchTerm}
                        onChange={(e:any) => setSearchTerm(e.target.value)}
                        onKeyPress={(e:any) => e.key === 'Enter' ? onSearchTerm() : null}
                        type='text'
                        placeholder="Buscar..."
                        endAdornment={
                           <InputAdornment position="end">
                              <IconButton
                                 onClick={() => setIsSearchVisible(false)}
                              >
                              <ClearIcon width={20} fill="#F44336"/>
                              </IconButton>
                           </InputAdornment>
                        }
                     />
                  )
                  :
                  (
                     <IconButton
                        onClick={() => setIsSearchVisible(true)}
                        className="fadeIn"
                        sx={{ display: { xs: 'none', sm: 'flex' } }}
                     >
                        <SearchIcon width={25} fill="#33496a"/>
                     </IconButton>
                  )
            }

             {/* Pantallas pequeñas  */}
            <IconButton
               sx={{ display: { xs: 'flex', sm: 'none' } }}
               onClick={toggleSideMenu}
            >
            </IconButton>

            <NextLink href="/cart" passHref legacyBehavior>
               <Link>
                  <IconButton>
                     <Badge badgeContent={2} color="secondary">
                        <CartIcon width={25}/>
                     </Badge>
                  </IconButton>
               </Link>
            </NextLink>
               

            <Button >
               Menú
            </Button>

         </Toolbar>
      </AppBar>
   )
}
