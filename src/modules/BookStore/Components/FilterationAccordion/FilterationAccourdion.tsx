import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PriceFilterForm from '../PriceFilterForm/PriceFilterForm';
import { Typography } from '@mui/material';

export default function FilterationAccourdion() {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <Typography variant="h6" padding={'10px 0'}  display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Typography variant="caption" fontWeight={'bold'} color='#393280' fontSize={'16px'}>Price</Typography>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <PriceFilterForm />
            </AccordionDetails>
        </Accordion>
    );
};