"use client";

import React from "react";
import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const LoginButton = () => {
    const onClick = (provider: "credentials") => {
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT,
        })
    }

    return (
        <div className="mt-4">
            <Button type="submit" className="text-base bg-white text-black cursor-pointer" onClick={() => onClick("credentials")}>
                Login
            </Button>
        </div>

    )
}
