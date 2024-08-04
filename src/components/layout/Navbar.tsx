'use client';
import { Suspense } from "react";
import { BeatLoader } from "react-spinners"
import { useSession } from "next-auth/react";
import ButtonLogin from "../ui/button/ButtonLogin";
import ButtonLogout from "../ui/button/ButtonLogout";
import ButtonSignUp from "../ui/button/ButtonSignUp";
import { ThemeSwitcher } from "../ui/button/ThemeSwitcher";

const Navbar = () => {
    const { data: session, status } = useSession();

    return (
        <Suspense>
            <nav className="flex items-center justify-center gap-x-5">
            <ThemeSwitcher />
            { status === "authenticated" ? (
                <>
                    <span className="text-gray-600 dark:text-white">Hello, {session.user?.name}</span>
                    <ButtonLogout />
                </>
            ) : status === "unauthenticated" ? (
                    <>
                        <ButtonLogin />
                        <ButtonSignUp />
                    </>
                ) : status === "loading" ? (
                    <BeatLoader />
                ) : null}
            </nav>
        </Suspense>
    );
}

export default Navbar;