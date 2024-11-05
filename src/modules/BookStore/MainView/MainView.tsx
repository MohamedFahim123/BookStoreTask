import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import TopNavBar from "../Components/TopNavBar/TopNavBar";
import Footer from "../Components/Footer/Footer";
import Grid from '@mui/material/Grid2';

export default function MainView() {
    return (
        <Grid container alignItems={'center'}>
            <TopNavBar />
            <NavBar />
            <Outlet />
            <Footer />
        </Grid>
    );
};