import { Box, Typography } from "@mui/material";

export default function CategoriesHeading() {
    return (
        <Box>
            <Typography variant={'body2'} sx={{
                color: '#ED553B', position: 'relative', fontSize: '14px', fontWeight: '600', paddingInlineStart: '40px', "::after": {
                    content: '""',
                    position: "absolute",
                    left: '0',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: '#ED553B',
                    width: '30px',
                    height: '2px',
                }
            }}>
                Categories
            </Typography>
            <Typography component={'h2'} sx={{ color: '#393280', marginTop: '5px', fontWeight: '700', fontSize: '30px' }}>
                Explore our Top Categories
            </Typography>
        </Box>
    );
};
