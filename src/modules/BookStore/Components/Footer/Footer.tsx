import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2'
import { NavLink } from 'react-router-dom';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import footerLogo from '../../../../assets/footer/sample logo 1.svg';
import footerAbsolutedImage from '../../../../assets/footer/ornament.svg';

export default function Footer() {
    return (
        <Box
            sx={{
                backgroundColor: '#ED553B',
                color: '#FFFFFF',
                padding: '70px 0px',
                width: '100%',
                overflow: 'hidden',
                position: 'relative'
            }}
        >
            <Box>
                <img style={{ zIndex: 0, position: 'absolute', top: '-5px', left: '-50px', width: '180px', height: '180px', transform: 'rotate(90deg)' }} src={footerAbsolutedImage} alt="Top Absoluted Dots" />
            </Box>
            <Box>
                <img style={{ zIndex: 0, position: 'absolute', bottom: '-50px', right: '0px', width: '180px', height: '180px' }} src={footerAbsolutedImage} alt="Top Absoluted Dots" />
            </Box>
            <Grid container sx={{
                maxWidth: '90%',
                margin: '0 auto',
                padding: 0
            }} spacing={4} justifyContent="space-between">
                <Grid size={{ xs: 12, md: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                        <Box width={'83px'} height={'87px'} component="img" src={footerLogo} alt="Footer Logo" sx={{ marginRight: 1 }} />
                    </Box>
                    <Typography variant="body2" sx={{ marginBottom: 2, maxWidth: '75%', lineHeight: '1.86' }}>
                        Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </Typography>
                    <Box>
                        <Typography component={'ul'} sx={{ display: 'flex', gap: 3, alignItems: "center" }}>
                            <Typography component={'li'}>
                                <NavLink to={'https://www.facebook.com/'}>
                                    <FacebookOutlinedIcon sx={{
                                        fontSize: '25px', cursor: 'pointer', transition: 'all 0.3s ease-in-out', ":hover": {
                                            color: '#1877F2'
                                        }
                                    }} />
                                </NavLink>
                            </Typography>
                            <Typography component={'li'}>
                                <NavLink to={'https://www.linkedin.com/'}>
                                    <LinkedInIcon sx={{
                                        fontSize: '25px', cursor: 'pointer', transition: 'all 0.3s ease-in-out', ":hover": {
                                            color: '#0077B5'
                                        }
                                    }} />
                                </NavLink>
                            </Typography>
                            <Typography component={'li'}>
                                <NavLink to={'https://x.com/'}>
                                    <TwitterIcon sx={{
                                        fontSize: '25px', cursor: 'pointer', transition: 'all 0.3s ease-in-out', ":hover": {
                                            color: '#1DA1F2'
                                        }
                                    }} />
                                </NavLink>
                            </Typography>
                            <Typography component={'li'}>
                                <NavLink to='https://www.youtube.com/'>
                                    <YouTubeIcon sx={{
                                        fontSize: '25px', cursor: 'pointer', transition: 'all 0.3s ease-in-out', ":hover": {
                                            color: '#FF0000'
                                        }
                                    }} />
                                </NavLink>
                            </Typography>
                        </Typography>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Typography variant="h6" sx={{ marginBottom: 2, color: '#ffffff' }}>
                        COMPANY
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <NavLink to='/book-store/home'>
                            Home
                        </NavLink>
                        <NavLink to='/book-store/shop'>
                            Books
                        </NavLink>
                        <NavLink to='/book-store/blog'>
                            Blog
                        </NavLink>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <Typography variant="h6" sx={{ marginBottom: 2, color: '#ffffff' }}>
                        IMPORTANT LINKS
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <NavLink to='/book-store/home'>
                            Privacy Policy
                        </NavLink>
                        <NavLink to='/book-store/home'>
                            FAQs
                        </NavLink>
                        <NavLink to='/book-store/home'>
                            Terms of Service
                        </NavLink>
                    </Box>
                </Grid>
            </Grid>
            <Grid size={{ xs: 12 }} sx={{ position: 'relative' }}>
                <Box sx={{ width: '100%', marginTop: 4, paddingTop: 2 }}>
                    <Typography variant='body1' sx={{ maxWidth: '90%', margin: 'auto' }} display={'flex'} align="center" justifyContent={'space-between'}>
                        © 2022 Arihant. All Rights Reserved.
                        <Typography variant='caption' fontWeight={'bold'}>
                            <NavLink to='/book-store/home' style={{ marginLeft: 1 }}>
                                Privacy
                            </NavLink> |
                            <NavLink to='/book-store/home' style={{ marginLeft: 3 }}>
                                Terms of Service
                            </NavLink>
                        </Typography>
                    </Typography>
                </Box>
            </Grid>
        </Box >
    );
};
