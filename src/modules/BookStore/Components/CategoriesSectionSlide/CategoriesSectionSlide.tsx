import { Box, Typography } from "@mui/material";
import { Category } from "../../../Utils/Interfaces";


interface CategoriesSectionSlideProps {
    category: Category;
    imgs: string[];
    idx: number;
}

export default function CategoriesSectionSlide({ category, imgs, idx }: CategoriesSectionSlideProps) {
    return (
        <>
            <Box sx={{ overflow: 'hidden' }}>
                <Box component={'img'} src={imgs[idx % 3]}
                    loading="lazy"
                    sx={{
                        borderRadius: '8px',
                        position: 'relative', ":after": {
                            content: "''",
                            position: 'absolute',
                            left: '0',
                            top: '0',
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#000000'
                        },
                    }} alt={`category cover ${idx}`} />
            </Box>
            <Box sx={{ marginTop: '20px', cursor: 'pointer' }}>
                <Typography variant="h4" sx={{ width: 'fit-content', margin: 'auto', padding: '5px 10px', fontSize: '24px', color: '#393280', transition: 'all 0.3s ease-in-out', ":hover": { color: '#ED553B' } }}>
                    {category?.title}
                </Typography>
            </Box>
        </>
    );
};
