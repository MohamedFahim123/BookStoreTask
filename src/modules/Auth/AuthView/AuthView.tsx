import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import authImg from '../..//../assets/AuthImages/66f3916ec341be3dea98c07eb554c77b.jpeg';
import authLogo from '../..//../assets/AuthImages/Logo.png';
import { Outlet } from 'react-router-dom';
import styles from './AuthView.module.css';

export default function AuthView() {
    return (
        <div className={styles.authView__container}>
            <Box>
                <Grid container alignItems={'center'}>
                    <Grid size={{ xs: 0, md: 6 }}>
                        <div className={styles.authImage__container}>
                            <img className={styles.authImage} src={authImg} alt="Auth Image" />
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} sx={{backgroundColor: '#EF6B4A10' , padding:0 , margin:0 , boxSizing: 'border-box'}}>
                        <Grid size={{ xs: 8 , md: 6 }} sx={{ mx: 'auto' }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '100vh',
                                }}
                            >
                                <Box sx={{ width: '110px' ,mb: 3 }}>
                                    <img src={authLogo} alt='authentication logo' />
                                </Box>
                                <Outlet />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};
