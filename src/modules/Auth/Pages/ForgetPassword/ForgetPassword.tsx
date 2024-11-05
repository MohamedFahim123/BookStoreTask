import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Box, Button, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { VALIDATE } from '../../../Utils/Validations';
import { BASE_URL } from '../../../Utils/baseUrl';
import { AuthSchema, Response } from '../../../Utils/Interfaces';
import { useEffect, useState } from 'react';
import Loader from '../../../Shared/Loader/Loader';

export default function ForgetPassword() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<AuthSchema>();

    const onSubmit: SubmitHandler<AuthSchema> = async (data: AuthSchema): Promise<void> => {
        const toastId = toast.loading("Please wait...");
        try {
            const response = await axios.post<Response>(`${BASE_URL}/auth/forgot-password`, data);
            toast.update(toastId, {
                render: response?.data?.message,
                type: "success",
                isLoading: false,
                autoClose: 1000,
            });
            navigate('/reset-password');
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const errorMessage = (Array.isArray(error.response?.data?.message) ? error.response?.data?.message[0] : error?.response?.data?.message) || 'Something went wrong!';
                toast.update(toastId, {
                    render: errorMessage,
                    type: "error",
                    isLoading: false,
                    autoClose: 1000,
                });
            } else {
                toast.update(toastId, {
                    render: 'Unexpected error occurred!',
                    type: "error",
                    isLoading: false,
                    autoClose: 1000,
                });
            };
        };
    };

    useEffect(() => {
        setTimeout(() => setLoading(false), 500);
    }, []);

    if (loading) {
        return <Loader />;
    };

    return (
        <Grid sx={{ width: '100%' }}>
            <Typography
                component={'p'}
                sx={{ mt: 2, color: '#6b6b87' }}
            >
                Welcome back!
            </Typography>
            <Typography
                component={'h1'}
                variant='h5'
                fontWeight={'bold'}
            >
                Forget Password !!
            </Typography>
            <Box
                onSubmit={handleSubmit(onSubmit)}
                component={'form'}
                noValidate
                sx={{ mt: 2, width: '100%' }}
            >
                <TextField
                    fullWidth
                    required
                    label="Email"
                    id='forgetEmail'
                    type="email"
                    autoComplete='email'
                    placeholder='user@email.com'
                    sx={{ mt: 2 }}
                    helperText={errors?.email?.message}
                    error={!!errors?.email?.message}
                    {...register('email', VALIDATE.email)}
                />
                <Typography
                    variant='body2'
                    sx={{
                        mt: 1,
                        color: '#757575'
                    }}
                ></Typography>
                <Button disabled={isSubmitting} fullWidth variant="contained" type="submit" sx={{ backgroundColor: '#EF6B4A', paddingBlock: '10px', mb: 1, mt: 2 }}>
                    Send
                </Button>
                <Button fullWidth variant="outlined" onClick={() => navigate('/login')} type="button" sx={{ backgroundColor: '#ffffff', color: '#6251DD', borderColor: '#6251DD', paddingBlock: '10px' }}>
                    Login
                </Button>
            </Box>
        </Grid>
    );
};
