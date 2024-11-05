export const VALIDATE = {
    required: {
        required: 'Required'
    },
    password: {
        required: 'Password is Required',
        minLength: {
            value: 8,
            message: 'Minimum length is 8 characters'
        }
    },
    email: {
        required: 'Email is Required',
        pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: 'Enter a valid email address',
        }
    },
}