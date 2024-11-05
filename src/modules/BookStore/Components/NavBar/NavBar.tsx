import { AppBar, Toolbar, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Divider, Badge } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu as MenuIcon, Window as WindowIcon } from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import Grid from '@mui/material/Grid2';
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { RootState } from "../../../Store/Store";

export default function NavBar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();
    const token = Cookies.get('authBookToken');
    const { cartCounter } = useSelector((state: RootState) => state.cart);

    const handleLogOut = () => {
        if (token) {
            Swal.fire({
                title: "Are you sure?",
                text: "You want to Logout!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "#3085d6",
                confirmButtonText: "Yes, Logout!",
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Logout Successfully!",
                        icon: "success"
                    });
                    Cookies.remove('authBookToken');
                    window.location.reload();
                };
            });
        };
    };

    const toggleDrawer = (open: boolean | ((prevState: boolean) => boolean)) => () => {
        setDrawerOpen(open);
    };

    const navLinks = [
        { name: "Home", path: "/book-store/home" },
        { name: "Books", path: "/book-store/shop" },
        { name: "About Us", path: "/book-store/about-us" },
        { name: "Contact Us", path: "/book-store/contact-us" },
        { name: "Blog", path: "/book-store/blog" },
    ];

    return (
        <Grid size={{ xs: 12 }} sx={{
            boxShadow: '0 5px 10px 0px #00000010', backgroundColor: '#ffffff', fontFamily: '"Inter", sans-serif '
        }}>
            <Box sx={{
                maxWidth: '90%',
                margin: '0 auto',
            }}>
                <AppBar
                    position="static"
                    color="primary"
                    sx={{
                        backgroundColor: '#ffffff',
                        color: '#000000',
                        boxShadow: 'none',
                        paddingBlock: 1,
                        paddingRight: 0,
                        paddingLeft: 0,
                    }}
                >
                    <Toolbar sx={{ justifyContent: "space-between" }}>
                        <Box>
                            <NavLink to={'/book-store/home'}>
                                <WindowIcon sx={{ fontSize: '40px', color: '#ED553B' }} />
                            </NavLink>
                        </Box>

                        {!isMobile ? (
                            <>
                                <Box sx={{ display: "flex", gap: 2 }}>
                                    {navLinks?.map((link, idx) => (
                                        <NavLink
                                            style={({ isActive }) => ({
                                                color: isActive ? '#393280' : '#000000',
                                                textDecoration: 'none',
                                                fontWeight: isActive ? 'bold' : 'normal',
                                                display: 'flex',
                                                gap: '10px'
                                            })}
                                            key={link.name}
                                            to={link.path}
                                        >
                                            {link.name}
                                            {
                                                navLinks.length !== (idx + 1) &&
                                                <Divider sx={{ backgroundColor: '#C4C4C4', height: '100%', width: '1px' }} />
                                            }
                                        </NavLink>
                                    ))}
                                </Box>
                                <Box sx={{ display: "flex", gap: 1 }}>
                                    <IconButton title="Logout" onClick={handleLogOut} color="inherit" sx={{ transition: 'all 0.3s ease-in-out', ":hover": { color: "#ff2020" } }}>
                                        <LogoutIcon />
                                    </IconButton>
                                    <Badge badgeContent={cartCounter || 0} color='success' overlap="circular" max={99} showZero>
                                        <IconButton
                                            onClick={() => {
                                                navigate('/book-store/cart');
                                            }}
                                            title="Cart"
                                            color="inherit"
                                            sx={{ transition: 'all 0.3s ease-in-out', ":hover": { color: "green" } }}
                                        >
                                            <LocalMallOutlinedIcon />
                                        </IconButton>
                                    </Badge>
                                    <IconButton onClick={() => {
                                        navigate('/change-password');
                                    }} title="Profile" color="inherit" sx={{ transition: 'all 0.3s ease-in-out', ":hover": { color: "blue" } }}>
                                        <AccountCircleIcon />
                                    </IconButton>
                                </Box>
                            </>
                        ) : (
                            <Box>
                                <IconButton title="Logout" onClick={handleLogOut} color="inherit" sx={{ transition: 'all 0.3s ease-in-out', ":hover": { color: "#ff2020" } }}>
                                    <LogoutIcon />
                                </IconButton>
                                <Badge badgeContent={cartCounter || 0} color="success" overlap="circular" max={99} showZero>
                                    <IconButton
                                        onClick={() => {
                                            navigate('/book-store/cart');
                                        }}
                                        title="Cart"
                                        color="inherit"
                                        sx={{ transition: 'all 0.3s ease-in-out', ":hover": { color: "green" } }}
                                    >
                                        <LocalMallOutlinedIcon />
                                    </IconButton>
                                </Badge>
                                <IconButton onClick={() => {
                                    navigate('/change-password');
                                }} title="Profile" color="inherit" sx={{ transition: 'all 0.3s ease-in-out', ":hover": { color: "blue" } }}>
                                    <AccountCircleIcon />
                                </IconButton>
                                <IconButton color="inherit" onClick={toggleDrawer(true)}>
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                        )}
                    </Toolbar>
                    <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                        <Box
                            sx={{ width: 250 }}
                            role="presentation"
                            onClick={toggleDrawer(false)}
                            onKeyDown={toggleDrawer(false)}
                        >
                            <List>
                                {navLinks.map((link) => (
                                    <ListItem key={link.name} disablePadding>
                                        <ListItemButton component={NavLink} to={link.path}>
                                            <ListItemText primary={link.name} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Drawer>
                </AppBar>
            </Box>
        </Grid>
    );
};