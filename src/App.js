// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: 'hidden',
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: 'hidden',
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up('sm')]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: 'nowrap',
//     boxSizing: 'border-box',
//     ...(open && {
//       ...openedMixin(theme),
//       '& .MuiDrawer-paper': openedMixin(theme),
//     }),
//     ...(!open && {
//       ...closedMixin(theme),
//       '& .MuiDrawer-paper': closedMixin(theme),
//     }),
//   }),
// );

// export default function MiniDrawer() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(true);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{
//               marginRight: 5,
//               ...(open && { display: 'none' }),
//             }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Mini variant drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer variant="permanent" open={open}>
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//             <ListItem key={text} disablePadding sx={{ display: 'block' }}>
//               <ListItemButton
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: open ? 'initial' : 'center',
//                   px: 2.5,
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: open ? 3 : 'auto',
//                     justifyContent: 'center',
//                   }}
//                 >
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {['All mail', 'Trash', 'Spam'].map((text, index) => (
//             <ListItem key={text} disablePadding sx={{ display: 'block' }}>
//               <ListItemButton
//                 sx={{
//                   minHeight: 48,
//                   justifyContent: open ? 'initial' : 'center',
//                   px: 2.5,
//                 }}
//               >
//                 <ListItemIcon
//                   sx={{
//                     minWidth: 0,
//                     mr: open ? 3 : 'auto',
//                     justifyContent: 'center',
//                   }}
//                 >
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <DrawerHeader />
//         <Typography paragraph>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//           tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
//           enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
//           imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
//           Convallis convallis tellus id interdum velit laoreet id donec ultrices.
//           Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
//           adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
//           nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
//           leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
//           feugiat vivamus at augue. At augue eget arcu dictum varius duis at
//           consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
//           sapien faucibus et molestie ac.
//         </Typography>
//         <Typography paragraph>
//           Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
//           eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
//           neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
//           tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
//           sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
//           tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
//           gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
//           et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
//           tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
//           eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
//           posuere sollicitudin aliquam ultrices sagittis orci a.
//         </Typography>
//       </Box>
//     </Box>
//   );
// }


// import "./App.css";

// // Material UI imports
// import Chip from "@mui/material/Chip";
// import FaceIcon from "@mui/icons-material/Face";
// import Paper from "@mui/material/Paper";
// import LockIcon from "@mui/icons-material/Lock";

// import Switch from "@mui/material/Switch";
// import { useState } from "react";
// import Login from "./pages/authentication/login";
// import Signup from "./pages/authentication/signup";

// function App() {
//   const [checked, setChecked] = useState(true);

//   const handleChange = (event) => {
//     setChecked(event.target.checked);
//   };

//   return (
//     <div className="App">
//       <Paper elevation={3} style={{ padding: "50px", paddingBottom: "50px",margin:"auto", marginTop:"10%"  ,width:"40%"}}>
//         <div align="center">
//           {checked ? (
//             <Chip
//               icon={<LockIcon />}
//               label="Log In"
//               variant="outlined"
//               color="info"
//             />
//           ) : (
//             <Chip
//               icon={<FaceIcon />}
//               label="Sign Up"
//               variant="outlined"
//               color="info"
//             />
//           )}
//           <br />

//           <Switch
//             checked={checked}
//             onChange={handleChange}
//             inputProps={{ "aria-label": "controlled" }}
//           />
//         </div>

//         {checked ? <Login /> : <Signup />}
//       </Paper>
//     </div>
//   );
// }

// export default App;

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import Grid from '@mui/material/Grid';
import ReduceCapacityIcon from '@mui/icons-material/ReduceCapacity';
import RuleFolderIcon from '@mui/icons-material/RuleFolder';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';







const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
export default function MiniDrawer() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };



    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" fontFamily={'Khmer OS Siemreap'}>
                        របាយការណ៍ អាពាហ៍ពិពាហ៍
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <Box sx={{ display: { md: 'flex' } }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="https://z-p3-scontent.fpnh5-4.fna.fbcdn.net/v/t39.30808-6/428709529_1468530834078203_6511389809686840876_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHalm6dgc7hJW3XCDqcQfpEB0v0gXFs4Z4HS_SBcWzhnkropMGIiKXFhtVTDevFI7xv0fT4DpGg68SNmjXLQSCc&_nc_ohc=si6dK3UUdg8Ab6M_PmO&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-4.fna&oh=00_AfCObAOP4cPSCfVUzvaSxwu5VCoGXbGPQGn9RzqJw0y52g&oe=6630F221" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Paper elevation={3} sx={{ width: '100%',pt:'25px',pb:'25px' }}>
                        <Stack direction="row" spacing={1} sx={{ m: '25px' }}>
                            <Grid container spacing={1} >
                              
                                <Grid item xs >
                                    <Card sx={{ maxWidth: 345,p:'10px' , background: "#1976d2" }}>
                                        <Stack direction="row" spacing={1}>
                                        <MarkEmailReadIcon sx={{ fontSize: 50,p:0,pt:1,pl:2, color:"#9c133e" }} />
                                            <Typography   variant="h5" fontFamily={'Khmer OS Siemreap'} sx={{ pt:2,  color: "#ffff" }}>
                                               14 <span>នាក់</span>
                                            </Typography>
                                        
                                        </Stack>
                                        <CardContent sx={{p:0,pl:2,pb:2}}> 
                                            <Typography variant="body2" color="#ffff" fontFamily={'Khmer OS Siemreap'}>
                                               <hr></hr>
                                                របាយការណ៍ ភ្ងៀវបានអញ្ចើញ
                                            </Typography>
                                        </CardContent>
                                        <CardActions sx={{p:0,pl:2,pb:2}}>
                                            <Button size="small" sx={{color: "#ffff",borderColor:"#ffff" }}variant="outlined" startIcon={<RemoveRedEyeIcon />}>Views</Button>
                                            <Button size="small" sx={{color: "#ffff",borderColor:"#ffff" }}variant="outlined" startIcon={<AddCircleIcon/>}>New Report</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                                <Grid item xs >
                                    <Card sx={{ maxWidth: 345,p:'10px' , background: "#1976d2" }}>
                                        <Stack direction="row" spacing={1}>
                                        <RuleFolderIcon sx={{ fontSize: 50,p:0,pt:1,pl:2, color:"#9c133e" }} />
                                            <Typography   variant="h5" fontFamily={'Khmer OS Siemreap'} sx={{ pt:2,  color: "#ffff" }}>
                                                5 <span>នាក់</span>
                                            </Typography>
                                        
                                        </Stack>
                                        <CardContent sx={{p:0,pl:2,pb:2}}> 
                                            <Typography variant="body2" color="#ffff" fontFamily={'Khmer OS Siemreap'}>
                                               <hr></hr>
                                                របាយការណ៍ ត្រូវបានអញ្ចើញភ្ងៀវ
                                            </Typography>
                                        </CardContent>
                                        <CardActions sx={{p:0,pl:2,pb:2}}>
                                            <Button size="small" sx={{color: "#ffff",borderColor:"#ffff" }}variant="outlined" startIcon={<RemoveRedEyeIcon />}>Views</Button>
                                            <Button size="small" sx={{color: "#ffff",borderColor:"#ffff" }}variant="outlined" startIcon={<AddCircleIcon/>}>New Report</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                                <Grid item xs >
                                    <Card sx={{ maxWidth: 345,p:'10px' , background: "#1976d2" }}>
                                        <Stack direction="row" spacing={1}>
                                        <ReduceCapacityIcon sx={{ fontSize: 50,p:0,pt:1,pl:2, color:"#9c133e" }} />
                                            <Typography   variant="h5" fontFamily={'Khmer OS Siemreap'} sx={{ pt:2,  color: "#ffff" }}>
                                                32 <span>នាក់</span>
                                            </Typography>
                                        
                                        </Stack>
                                        <CardContent sx={{p:0,pl:2,pb:2}}> 
                                            <Typography variant="body2" color="#ffff" fontFamily={'Khmer OS Siemreap'}>
                                               <hr></hr>
                                                របាយការណ៍ ភ្ងៀវបានចូលរួមកម្មវិធី
                                            </Typography>
                                        </CardContent>
                                        <CardActions sx={{p:0,pl:2,pb:2}}>
                                            <Button size="small" sx={{color: "#ffff",borderColor:"#ffff" }}variant="outlined" startIcon={<RemoveRedEyeIcon />}>Views</Button>
                                            <Button size="small" sx={{color: "#ffff",borderColor:"#ffff" }}variant="outlined" startIcon={<AddCircleIcon/>}>New Report</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                                <Grid item xs >
                                    <Card sx={{ maxWidth: 345,p:'10px' , background: "#1976d2" }}>
                                        <Stack direction="row" spacing={1}>
                                        <ForwardToInboxIcon sx={{ fontSize: 50,p:0,pt:1,pl:2, color:"#9c133e" }} />
                                            <Typography   variant="h5" fontFamily={'Khmer OS Siemreap'} sx={{ pt:2,  color: "#ffff" }}>
                                               12 <span>នាក់</span>
                                            </Typography>
                                        
                                        </Stack>
                                        <CardContent sx={{p:0,pl:2,pb:2}}> 
                                            <Typography variant="body2" color="#ffff" fontFamily={'Khmer OS Siemreap'}>
                                               <hr></hr>
                                                របាយការណ៍ សងចំណងដៃភ្ងៀវ
                                            </Typography>
                                        </CardContent>
                                        <CardActions sx={{p:0,pl:2,pb:2}}>
                                            <Button size="small" sx={{color: "#ffff",borderColor:"#ffff" }}variant="outlined" startIcon={<RemoveRedEyeIcon />}>Views</Button>
                                            <Button size="small" sx={{color: "#ffff",borderColor:"#ffff" }}variant="outlined" startIcon={<AddCircleIcon/>}>New Report</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Stack>
                </Paper>
            </Box>
        </Box>
    );
}
