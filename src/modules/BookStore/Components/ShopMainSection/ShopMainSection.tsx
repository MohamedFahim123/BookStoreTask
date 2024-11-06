import { Box, FormControl, MenuItem, Select, Typography, IconButton, CircularProgress } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Window as WindowIcon } from "@mui/icons-material";
import { useEffect, useState } from 'react';
import TableRowsIcon from '@mui/icons-material/TableRows';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../Store/Store';
import { fetchAllBooks } from '../../../Store/Slices/BookSlice';
import ShopViewController from '../ShopViewController/ShopViewController';
import ArrowBackIosOutlined from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlined from '@mui/icons-material/ArrowForwardIosOutlined';
import FilterationAccourdion from '../FilterationAccordion/FilterationAccourdion';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NotFound from '../../../Shared/NotFound/NotFound';

interface FilterationItem {
    name: string;
}
interface SortFormInputs {
    sortByAlpha: string;
    limit: string;
    page: number;
}
interface Target {
    name?: string;
    value?: string;
}
interface ChangeEvent {
    target: Target;
}

export default function ShopMainSection() {
    const { books, loading, error, page, totalPages } = useSelector((state: RootState) => state.books);
    const [filterations, setFilterations] = useState<SortFormInputs>({
        sortByAlpha: 'A-Z',
        limit: '10',
        page: page || 1,
    });
    const filterationItems: FilterationItem[] = [
        { name: 'Product type' },
        { name: 'Availability' },
        { name: 'Brand' },
        { name: 'Color' },
        { name: 'Material' },
    ];
    const [activeView, setActiveView] = useState('normal');
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchAllBooks({ page: filterations.page, limit: +filterations.limit }));
    }, [dispatch, filterations.page, filterations.limit]);

    const handleViewChange = (view: string) => {
        setActiveView(view);
    };

    const handleSortChange = (event: ChangeEvent) => {
        setFilterations((prev) => ({
            ...prev,
            [event.target.name as keyof SortFormInputs]: event.target.value as string,
            page: page,
        }));
    };

    const handlePageChange = (newPage: number) => {
        setFilterations((prev) => ({
            ...prev,
            page: newPage,
        }));
    };

    if (error) return <NotFound />;
    return (
        <Grid sx={{ backgroundColor: '#FFFFFF', padding: '60px 0', width: '90%', margin: 'auto' }} container spacing={3}>
            <Grid size={{ xs: 12, md: 3 }}>
                <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
                    <FilterationAccourdion />
                </Box>
                {filterationItems.map((item, index) => (
                    <Box key={index} display={'flex'} flexDirection={'column'} gap={'10px'} sx={{ cursor: 'pointer' }}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography variant="h6" padding={'10px 0'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                    <Typography variant="caption" fontWeight={'bold'} color='#393280' fontSize={'16px'}>
                                        {item.name}
                                    </Typography>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                Filter By {item?.name}
                            </AccordionDetails>
                        </Accordion>
                    </Box>
                ))}
            </Grid>
            <Grid size={{ xs: 12, md: 9 }} position={'relative'}>
                <Grid container justifyContent={'space-between'} spacing={2} fontSize={'14px'} alignItems={'center'} textAlign={'center'} fontWeight={'600'} padding={'5px 0'}>
                    <Grid size={{ xs: 3, md: 3 }} display={'flex'} justifyContent={'space-between'} alignItems={'center'} container spacing={1}>
                        <Typography variant="h6" sx={{ color: '#393280', fontSize: '14px' }}>
                            Sort by:
                        </Typography>
                        <FormControl sx={{ width: 150, border: '1px solid #393280', borderRadius: '4px', height: '30px' }}>
                            <Select
                                value={filterations.sortByAlpha}
                                name='sortByAlpha'
                                onChange={handleSortChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Sort by' }}
                                sx={{
                                    color: '#393280',
                                    fontWeight: 'bold',
                                    fontSize: '1rem',
                                    height: '30px',
                                    '& .MuiSelect-icon': {
                                        color: '#393280',
                                    },
                                    '&:before, &:after': {
                                        border: 'none',
                                    }
                                }}
                            >
                                <MenuItem value="A-Z">A-Z</MenuItem>
                                <MenuItem value="Z-A">Z-A</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid size={{ xs: 3, md: 3 }}>Showing {filterations.limit} of {totalPages * +filterations.limit} results</Grid>
                    <Grid size={{ xs: 3, md: 3 }} display={'flex'} justifyContent={'space-between'} alignItems={'center'} container spacing={1}>
                        <Typography variant="h6" sx={{ color: '#393280', fontSize: '14px' }}>
                            Show :
                        </Typography>
                        <FormControl sx={{ width: 150, border: '1px solid #393280', borderRadius: '4px', height: '30px' }}>
                            <Select
                                value={filterations.limit}
                                name='limit'
                                onChange={handleSortChange}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Items per page' }}
                                sx={{
                                    color: '#393280',
                                    fontWeight: 'bold',
                                    fontSize: '1rem',
                                    height: '30px',
                                    '& .MuiSelect-icon': {
                                        color: '#393280',
                                    },
                                    '&:before, &:after': {
                                        border: 'none',
                                    }
                                }}
                            >
                                <MenuItem value="10">10 Items</MenuItem>
                                <MenuItem value="5">5 Items</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid size={{ xs: 3, md: 3 }} display={'flex'} justifyContent={'flex-end'} gap={2} alignItems={'center'}>
                        <WindowIcon onClick={() => handleViewChange('normal')} sx={{ cursor: 'pointer', fontSize: '35px', color: activeView === 'normal' ? '#ED553B' : '#000000' }} />
                        <TableRowsIcon onClick={() => handleViewChange('grid')} sx={{ cursor: 'pointer', fontSize: '35px', color: activeView === 'grid' ? '#ED553B' : '#000000' }} />
                    </Grid>
                </Grid>
                {
                    loading ?
                        <Box width={'100%'} height={'150px'} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <CircularProgress size={30} color='error' />
                        </Box>
                        :
                        <>
                            <Box width={'100%'}>
                                <ShopViewController books={books} activeView={activeView} />
                            </Box>
                            <Box display="flex" justifyContent="center" alignItems="center" mt={3}>
                                <IconButton onClick={() => handlePageChange(Math.max(filterations.page - 1, 1))} disabled={filterations.page === 1}>
                                    <ArrowBackIosOutlined />
                                </IconButton>
                                {[...Array(totalPages)].map((_, i) => (
                                    <IconButton
                                        key={i}
                                        onClick={() => handlePageChange(i + 1)}
                                        sx={{
                                            backgroundColor: filterations.page === i + 1 ? '#ED553B' : 'transparent',
                                            color: filterations.page === i + 1 ? '#ffffff' : '#ED553B   ',
                                            margin: '0 5px',
                                            padding: `5px 10px`,
                                            border: '1px solid #ED553B',
                                            transition: 'all 0.3s ease-in-out',
                                            borderRadius: '50%',
                                            ":hover": {
                                                color: '#ED553B',
                                            }
                                        }}
                                    >
                                        {i + 1}
                                    </IconButton>
                                ))}
                                <IconButton onClick={() => handlePageChange(Math.min(filterations.page + 1, totalPages))} disabled={filterations.page === totalPages}>
                                    <ArrowForwardIosOutlined />
                                </IconButton>
                            </Box>
                        </>
                }
            </Grid>
        </Grid>
    );
};
