import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Box, Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { BASE_URL } from '../../../Utils/baseUrl';
import { VALIDATE } from '../../../Utils/Validations';
import { AuthSchema, Response } from '../../../Utils/Interfaces';
import { useEffect, useState } from 'react';
import Loader from '../../../Shared/Loader/Loader';

export default function Register() {
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
            const response = await axios.post<Response>(`${BASE_URL}/auth/register`, data);
            toast.update(toastId, {
                render: response?.data?.message || "Registered Successfully!",
                type: "success",
                isLoading: false,
                autoClose: 1000,
            });
            navigate('/login');
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
                sx={{ mt: 1, color: '#6b6b87' }}
            >
                Create new acccount
            </Typography>
            <Typography
                component={'h1'}
                variant='h5'
                fontWeight={'bold'}
            >
                Register
            </Typography>
            <Box
                onSubmit={handleSubmit(onSubmit)}
                component={'form'}
                noValidate
                sx={{ mt: 1, width: '100%' }}
            >
                <Grid container spacing={2}>
                    <Grid size={{ xs: 6 }}>
                        <TextField
                            fullWidth
                            required
                            label="First Name"
                            id='registerFirstName'
                            type="text"
                            autoComplete='first_name'
                            placeholder='user name'
                            sx={{ mt: 1 }}
                            helperText={errors?.first_name?.message}
                            error={!!errors?.first_name?.message}
                            {...register('first_name', VALIDATE.required)}
                        />
                        <Typography
                            variant='body2'
                            sx={{
                                mt: 1,
                                color: '#757575'
                            }}
                        ></Typography>
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                        <TextField
                            fullWidth
                            required
                            label="Last Name"
                            id='registerLastName'
                            type="text"
                            autoComplete='last_name'
                            placeholder='Last Name'
                            sx={{ mt: 1 }}
                            helperText={errors?.last_name?.message}
                            error={!!errors?.last_name?.message}
                            {...register('last_name', VALIDATE.required)}
                        />
                        <Typography
                            variant='body2'
                            sx={{
                                mt: 1,
                                color: '#757575'
                            }}
                        ></Typography>
                    </Grid>
                </Grid>
                <TextField
                    fullWidth
                    required
                    label="Email"
                    id='RegisterEmail'
                    type="email"
                    autoComplete='email'
                    placeholder='user@email.com'
                    sx={{ mt: 1 }}
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
                <TextField
                    fullWidth
                    required
                    label="Password"
                    id='RegisterPassword'
                    type="password"
                    autoComplete='password'
                    placeholder='********'
                    sx={{ mt: 1 }}
                    helperText={errors?.password?.message}
                    error={!!errors?.password?.message}
                    {...register('password', VALIDATE.password)}
                />
                <Typography
                    variant='body2'
                    sx={{
                        mt: 1,
                        color: '#757575'
                    }}
                ></Typography>
                <FormControl
                    sx={{ mt: 1, minWidth: 120 }}
                    error={!!errors?.role?.message}
                    fullWidth
                    required
                >
                    <InputLabel id="demo-simple-select-error-label">Role</InputLabel>
                    <Select
                        labelId="demo-simple-select-error-label"
                        id="demo-simple-select-error"
                        label="Role"
                        {...register('role', VALIDATE.required)}
                        renderValue={(value) => `⚠️  - ${value}`}
                    >
                        <MenuItem value="" disabled>
                            <em>Select Role</em>
                        </MenuItem>
                        <MenuItem value={'Customer'}>Customer</MenuItem>
                        <MenuItem value={'Admin'}>Admin</MenuItem>
                    </Select>
                    <FormHelperText>{errors?.role?.message ? errors?.role?.message : ''}</FormHelperText>
                </FormControl>
                <Button disabled={isSubmitting} fullWidth variant="contained" type="submit" sx={{ backgroundColor: '#EF6B4A', paddingBlock: '10px', mb: 1, mt: 2 }}>
                    Register
                </Button>
                <Button fullWidth variant="outlined" onClick={() => navigate('/login')} type="button" sx={{ backgroundColor: '#ffffff', color: '#6251DD', borderColor: '#6251DD', paddingBlock: '10px' }}>
                    Login
                </Button>
            </Box>
        </Grid>
    );
};
