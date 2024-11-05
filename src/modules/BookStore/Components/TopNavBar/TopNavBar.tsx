import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid2';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { NavLink } from "react-router-dom";
export default function TopNavBar() {
    return (
        <Grid size={{ xs: 12 }} sx={{ backgroundColor: '#393280', fontFamily: '"Inter", sans-serif ' }}>
            <Box sx={{
                maxWidth: '90%',
                margin: '0 auto',
                paddingBlock: 1,
                color: '#ffffff'
            }}>
                <Grid container justifyContent={'space-between'} alignItems={'center'}>
                    <Typography variant={'body2'} sx={{ fontSize: '16px', display: 'flex', cursor: 'pointer', justifyContent: 'flex-start', alignItems: 'center' }}>
                        <NavLink to={'tel:+918374902234'}>
                            <PhoneIcon sx={{ fontSize: '16px', marginInlineEnd: '10px' }} /> +91 8374902234
                        </NavLink>
                    </Typography>
                    <Typography component={'ul'} sx={{ display: 'flex', gap: 2, justifyContent: "space-between", alignItems: "center" }}>
                        <Typography component={'li'}>
                            <NavLink to={'https://www.facebook.com/'}>
                                <FacebookOutlinedIcon sx={{
                                    fontSize: '18px', cursor: 'pointer', transition: 'all 0.3s ease-in-out', ":hover": {
                                        color: '#1877F2'
                                    }
                                }} />
                            </NavLink>
                        </Typography>
                        <Typography component={'li'}>
                            <NavLink to={'https://www.instagram.com/'}>
                                <InstagramIcon sx={{
                                    fontSize: '18px', cursor: 'pointer', transition: 'all 0.3s ease-in-out', ":hover": {
                                        color: '#E4405F'
                                    }
                                }} />
                            </NavLink>
                        </Typography>
                        <Typography component={'li'}>
                            <NavLink to={'https://www.linkedin.com/'}>
                                <LinkedInIcon sx={{
                                    fontSize: '18px', cursor: 'pointer', transition: 'all 0.3s ease-in-out', ":hover": {
                                        color: '#0077B5'
                                    }
                                }} />
                            </NavLink>
                        </Typography>
                        <Typography component={'li'}>
                            <NavLink to={'https://x.com/'}>
                                <TwitterIcon sx={{
                                    fontSize: '18px', cursor: 'pointer', transition: 'all 0.3s ease-in-out', ":hover": {
                                        color: '#1DA1F2'
                                    }
                                }} />
                            </NavLink>
                        </Typography>
                        <Typography component={'li'}>
                            <NavLink to='https://www.youtube.com/'>
                                <YouTubeIcon sx={{
                                    fontSize: '18px', cursor: 'pointer', transition: 'all 0.3s ease-in-out', ":hover": {
                                        color: '#FF0000'
                                    }
                                }} />
                            </NavLink>
                        </Typography>
                    </Typography>
                </Grid>
            </Box>
        </Grid>
    );
};