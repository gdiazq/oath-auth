"use server";

import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import * as z from 'zod';
import { RegisterHotelSchema  } from '@/schemas/signup';
import { getUserbyEmail } from '@/data/user';

export const register = async (values: z.infer<typeof RegisterHotelSchema>) => {
    const validatedFields = RegisterHotelSchema.safeParse(values);
    if (!validatedFields.success) {
        return { error: "Invalid fields!" };
    }

    const { name, email, password, repeatpassword } = validatedFields.data;
    if (password !== repeatpassword) {
        return { error: "Password do not match!" };
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserbyEmail(email);

    if (existingUser) {
        return { error: "User already exists!" };
    }

    await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    })

    return { success: "User created!" };
}