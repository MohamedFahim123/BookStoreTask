import { Box, Typography } from "@mui/material";

interface MainPageHeadingProps {
    subTitle: string;
    mainTitle: string;
    titleColor: string;
};

export default function MainPageHeading({ subTitle, mainTitle, titleColor }: MainPageHeadingProps) {
    return (
        <Box sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ fontSize: '13px', color: '#7A7A7A', fontWeight: '500',letterSpacing: '2px'}}>
                {
                    subTitle
                }
            </Typography>
            <Typography variant="h2" sx={{ fontSize: '45px', color: titleColor, fontWeight: '600', margin: '10px 0 30px' }}>
                {mainTitle}
            </Typography>
        </Box>
    );
};