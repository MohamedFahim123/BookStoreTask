import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { HeadLinks } from "../../../Utils/Interfaces";

interface SecondaryHeroSectionProps {
    headLinks: HeadLinks[]
};
export default function SecondaryHeroSection({ headLinks }: SecondaryHeroSectionProps) {
    return (
        <Box
            sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '30px 0', background: 'linear-gradient(82.93deg, #FFE6E6 0%, #F5FFFE 113.52%)' }}
        >
            {
                headLinks?.map((link, idx) => (
                    <Box key={idx}>
                        <Link to={link?.path} style={{ color: '#393280',fontWeight: 'bold', textDecoration: 'none', padding: '3px' }} >
                            {link?.name} {
                                headLinks.length !== (idx + 1) &&
                                '/'
                            }
                        </Link>
                    </Box>
                ))
            }
        </Box>
    )
}
