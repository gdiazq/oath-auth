'use client'

import React from "react";
import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import GoogleIcon from "../icon/GoogleIcon";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const ButtonGoogle = () => {
    const onClick = (provider: "google") => {
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT,
        })
    }

    return (
        <Button className="bg-white text-black" onClick={ () => onClick("google")}>
            <GoogleIcon />
            Google
        </Button>
    );
}

export default ButtonGoogle;