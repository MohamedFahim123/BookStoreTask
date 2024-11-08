import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface mainBtnProps {
    name: string,
    path: string,
}

export default function MainPageBtn({ name, path }: mainBtnProps) {
    const navigate = useNavigate();
    return (
        <Button
            onClick={() => navigate(path)}
            variant="outlined"
            sx={{
                display: 'block',
                borderColor: '#393280',
                color: '#393280',
                textTransform: 'upper-case',
                borderRadius: '7px',
                padding: { lg: '10px 25px',md: '8px 20px' , xs: '5px 15px'},
                transition: 'all 0.3s ease-in-out',
                ":hover":{
                    color: '#ffffff',
                    backgroundColor: '#393280'
                },
            }}
        >
            {name}
        </Button>
    )
}
