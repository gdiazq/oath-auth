"use client";

import { signOut } from "next-auth/react";
import { Button } from "@nextui-org/react";

const ButtonLogout = () => {
    const onSubmit = async () => {
        await signOut({ callbackUrl: "/" });
    };

    return (
        <Button className="bg-red-700 text-white" type="submit" onPress={onSubmit}>
            Logout
        </Button>
    );
}

export default ButtonLogout;

