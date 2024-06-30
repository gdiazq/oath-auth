import { prisma } from '@/lib/prisma';

export const getUserbyEmail = async (email: string) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        return user
    } catch (error) {
        return null
    }
};

export const getUserbyId = async (id: string) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        })
        return user
    } catch (error) {
        return null
    }
};