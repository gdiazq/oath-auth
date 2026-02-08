import * as z from 'zod';

export const RegisterHotelSchema = z.object({
    name: z.string().min(1, { message: 'Name is required' }).max(100, { message: 'Name is too long' }),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long'}).max(128, { message: 'Password is too long' }),
    repeatpassword: z.string().min(8, { message: 'Password must be at least 8 characters long'}).max(128, { message: 'Password is too long' }),
});

