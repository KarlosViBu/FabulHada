'use client'
import { useContext, useState } from "react";
import { UiContext } from "@/context";
import { useRouter } from "next/router";

import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import { Icon } from '@iconify/react';

import ClearIcon from "../iconos/ClearIcon";
import SearchIcon from "../iconos/SearchIcon";
import UserIcon from "../iconos/UserIcon";
import OrdersIcon from "../iconos/OrdersIcon";

import LoveIcon from "../iconos/LoveIcon";
import AbundanceIcon from "../iconos/AbundanceIcon";
import HealthIcon from "../iconos/HealthIcon";
import MagicIcon from "../iconos/MagicIcon";
import ZodiacIcon from "../iconos/ZodiacIcon";
import HomeIcon from "../iconos/HomeIcon";
import SunIcon from "../iconos/SunIcon";



import KeyIcon from "../iconos/KeyIcon";
import ExitIcon from "../iconos/ExitIcon";
import CategorIcon from "../iconos/CategorIcon";
import UsersIcon from "../iconos/UsersIcon";
// import { AccountCircleOutlined, AdminPanelSettings, CategoryOutlined, ConfirmationNumberOutlined, EscalatorWarningOutlined, FemaleOutlined, LoginOutlined, MaleOutlined, SearchOutlined, VpnKeyOutlined } from "@mui/icons-material"

export const SideMenu = () => {

   const router = useRouter();

   const { isMenuOpen, toggleSideMenu } = useContext(UiContext);
   const navigateTo = (url: string) => {
      toggleSideMenu();
      router.push(url);
   }

   const [searchTerm, setSearchTerm] = useState('');

   const onSearchTerm = () => {
      if (searchTerm.trim().length === 0) return;
      navigateTo(`/search/${searchTerm}`);
   }

   return (
      <Drawer
         open={isMenuOpen}
         // open={ true }
         anchor='right'
         sx={{ backdropFilter: 'blur(1px)', transition: 'all 0.5s ease-out' }}
         onClose={toggleSideMenu}
      >
         <Box sx={{ width: 250, paddingTop: 5 }}>

            <List>

               <ListItem>
                  <Input
                     autoFocus
                     value={searchTerm}
                     onChange={(e) => setSearchTerm(e.target.value)}
                     onKeyPress={(e) => e.key === 'Enter' ? onSearchTerm() : null}
                     type='text'
                     placeholder="Buscar..."
                     endAdornment={
                        <InputAdornment position="end">
                           <IconButton
                              onClick={onSearchTerm}
                           >
                              <SearchIcon width={25} fill="#33496a" />
                           </IconButton>
                        </InputAdornment>
                     }
                  />
               </ListItem>

               <ListItem button>
                  <ListItemIcon>
                     <UserIcon width={35} fill="#33496a" />
                  </ListItemIcon>
                  <ListItemText primary={'Perfil'} />
               </ListItem>

               <ListItem button>
                  <ListItemIcon>
                     <OrdersIcon width={20} fill="#33496a" />
                  </ListItemIcon>
                  <ListItemText primary={'Mis Ordenes'} />
               </ListItem>


               <ListItem
                  button
                  // sx={{ display: { xs: '', md: 'none' } }}
                  sx={{ display: { xs: '', sm: '', md: '', lg: 'none' } }}
                  onClick={() => navigateTo('/category/amor-armonia')}
               >
                  <ListItemIcon>
                     {/* <LoveIcon width={30} fill="#203656" /> */}
                     <Icon icon="line-md:sunny-filled-loop-to-moon-filled-loop-transition" color="#f89ea3" width="30" />
                     {/* <Icon icon="line-md:sun-rising-twotone-loop" color="#f47a80" width="35" /> */}
                  </ListItemIcon>
                  <ListItemText primary={'Amor y Armonía'} />
               </ListItem>

               <ListItem
                  button
                  sx={{ display: { xs: '', sm: '', md: '', lg: 'none' } }}
                  onClick={() => navigateTo('/category/abundancia-prosperidad')}
               >
                  <ListItemIcon>
                     {/* <AbundanceIcon width={30} fill="#203656" /> */}
                     {/* <Icon icon="line-md:sun-rising-twotone-loop" color="#ffd700" width="35" /> */}
                     <Icon icon="line-md:sunny-filled-loop-to-moon-filled-loop-transition" color="#eecc09" width="30" />
                  </ListItemIcon>
                  <ListItemText primary={'Abundancia y Prosperidad'} />
               </ListItem>

               <ListItem
                  button
                  sx={{ display: { xs: '', sm: '', md: '', lg: 'none' } }}
                  onClick={() => navigateTo('/category/salud-vitalidad')}
               >
                  <ListItemIcon>
                     {/* <Icon icon="line-md:sun-rising-twotone-loop" color="#08ec13" width="35" /> */}
                     <Icon icon="line-md:sunny-filled-loop-to-moon-filled-loop-transition" color="#08ec13" width="30" />
                     {/* <HealthIcon width={30} fill="#203656" /> */}
                  </ListItemIcon>
                  <ListItemText primary={'Salud y Vitalidad'} />
               </ListItem>

               <ListItem
                  button
                  sx={{ display: { xs: '', sm: '', md: '', lg: 'none' } }}
                  onClick={() => navigateTo('/category/sabiduria-poder')}
               >
                  <ListItemIcon>
                     {/* <MagicIcon width={30} fill="#203656" /> */}
                     {/* <Icon icon="line-md:sun-rising-twotone-loop" color="#0a86f1" width="35" /> */}
                     <Icon icon="line-md:sunny-filled-loop-to-moon-filled-loop-transition" color="#0a86f1" width="30" />
                  </ListItemIcon>
                  <ListItemText primary={'Sabiduria y Poder'} />
               </ListItem>

               <ListItem
                  button
                  sx={{ display: { xs: '', sm: '', md: '', lg: 'none' } }}
                  onClick={() => navigateTo('/category/naturaleza-zodiaco')}
               >
                  <ListItemIcon>
                     {/* <ZodiacIcon width={40} fill="#203656" /> */}
                  <Icon icon="line-md:sunny-filled-loop-to-moon-filled-loop-transition" color="#8d0af1" width="30" />
                  </ListItemIcon>
                  <ListItemText primary={'Naturaleza y Zodíaco'} />
               </ListItem>

               <ListItem
                  button
                  sx={{ display: { xs: '', sm: '', md: '', lg: 'none' } }}
                  onClick={() => navigateTo('/category/talismanes')}
               >
                  <ListItemIcon>
                     {/* <HomeIcon width={30} fill="#203656" /> */}
                     <Icon icon="line-md:sunny-filled-loop-to-moon-filled-loop-transition" color="#ff8c00" width="30" />
                  </ListItemIcon>
                  <ListItemText primary={'Protección Hogar'} />
               </ListItem>


               <ListItem button>
                  <ListItemIcon>
                     <KeyIcon width={30} fill="#33496a" />
                  </ListItemIcon>
                  <ListItemText primary={'Ingresar'} />
               </ListItem>

               <ListItem button>
                  <ListItemIcon>
                     <ExitIcon width={30} fill="#33496a" />
                  </ListItemIcon>
                  <ListItemText primary={'Salir'} />
               </ListItem>


               {/* Admin */}
               <Divider />
               <ListSubheader>Admin Panel</ListSubheader>

               <ListItem button>
                  <ListItemIcon>
                     {/* <Icon icon="material-symbols:category-outline-rounded" color="#019" width="30" /> */}
                     {/* <Icon icon="carbon:category-new-each" color="#019" width="30" /> */}
                     {/* <CategoryOutlined/> */}
                     <CategorIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Productos'} />
               </ListItem>
               <ListItem button>
                  <ListItemIcon>
                     {/* <Icon icon="fluent-mdl2:activate-orders" color="#154" width="25" /> */}
                     {/* <ConfirmationNumberOutlined/> */}
                     <OrdersIcon width={25} fill="#33496a" />
                  </ListItemIcon>
                  <ListItemText primary={'Ordenes'} />
               </ListItem>

               <ListItem button>
                  <ListItemIcon>
                     {/* <Icon icon="clarity:administrator-line" color="#154" width="240" /> */}
                     {/* <Icon icon="system-uicons:users" color="#154" width="25" /> */}
                     {/* <AdminPanelSettings/> */}
                     <UsersIcon width={30} />
                  </ListItemIcon>
                  <ListItemText primary={'Usuarios'} />
               </ListItem>
            </List>
         </Box>
      </Drawer>
   )
}