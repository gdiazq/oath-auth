"use server";

import * as z from 'zod';
import { AuthError } from 'next-auth';
import { signIn } from '@/auth'
import { LoginHotelSchema } from '@/schemas/signin';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { generateVerificationToken } from '@/lib/tokens';
import { getUserbyEmail } from '@/data/user';
import { sendVerificationEmail } from '@/lib/mail';

export const login = async (values: z.infer<typeof LoginHotelSchema>) => {
    const validatedFields = LoginHotelSchema.safeParse(values);
    if (!validatedFields.success) {
        return { error: "Invalid credentials" };
    }
    
    const { email, password } = validatedFields.data;

    const existingUser = await getUserbyEmail(email);
    if (!existingUser || !existingUser.email || !existingUser.password) {
        return { error: "Email doe not exist" };
    }

    if (!existingUser.emailVerified) {
        const verificationToken = await generateVerificationToken(existingUser.email);
        await sendVerificationEmail(verificationToken.email, verificationToken.token);
        return { error: "Confirmation email sent!"  };
    }

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT,
        });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials" };
                default:
                    return { error: "An error occurred" };
            }
        }
        throw error;
    }
};