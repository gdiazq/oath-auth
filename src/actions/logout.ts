"use server";

import { signOut } from "@/auth"
import { redirect } from 'next/navigation'

const Logout = async () => {
    await signOut();
}

export default Logout;