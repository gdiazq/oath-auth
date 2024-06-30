import * as z from 'zod';

export const RegisterHotelSchema = z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z.string().min(2).email({ message: 'Invalid email address' }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long'}),
    repeatpassword: z.string().min(8, { message: 'Password must be at least 8 characters long'}),

});

