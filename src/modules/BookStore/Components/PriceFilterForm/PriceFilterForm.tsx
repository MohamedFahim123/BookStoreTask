import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

interface PriceFilterFormInputs {
    minPrice: string;
    maxPrice: string;
};

export default function PriceFilterForm() {
    const { handleSubmit, control, formState: { errors } } = useForm<PriceFilterFormInputs>({
        defaultValues: {
            minPrice: '',
            maxPrice: ''
        }
    });

    const onSubmit: SubmitHandler<PriceFilterFormInputs> = (data) => {
        console.log("Filter values:", data);
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{padding: '20px 0'}}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <Typography variant="h6" sx={{ color: '#393280' , fontSize: '16px' }}>$</Typography>
                <Controller
                    name="minPrice"
                    control={control}
                    rules={{ required: "Minimum price is required", pattern: { value: /^\d+$/, message: "Enter a valid number" } }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            type='number'
                            variant="outlined"
                            placeholder="Min"
                            size="small"
                            error={!!errors.minPrice}
                            sx={{ flex: 1, borderRadius: '8px' }}
                        />
                    )}
                />
                <Typography variant="body2" sx={{ color: '#888888', fontSize: '18px' }}>to</Typography>
                <Typography variant="h6" sx={{ color: '#393280' , fontSize: '16px' }}>$</Typography>
                <Controller
                    name="maxPrice"
                    control={control}
                    rules={{ required: "Maximum price is required", pattern: { value: /^\d+$/, message: "Enter a valid number" } }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            type='number'
                            variant="outlined"
                            placeholder="Max"
                            size="small"
                            error={!!errors.maxPrice}
                            sx={{ flex: 1, borderRadius: '8px' }}
                        />
                    )}
                />
            </Box>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                    backgroundColor: '#393280',
                    color: '#fff',
                    marginTop:'10px',
                    textTransform: 'capitalize',
                    '&:hover': { backgroundColor: '#2c2761' }
                }}
            >
                Filter
            </Button>
        </Box>
    );
}
