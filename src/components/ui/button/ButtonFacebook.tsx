'use client'

import React from "react";
import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import FacebookIcon from "../icon/FacebookIcon";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const ButtonFacebook = () => {
    const onClick = (provider: "facebook") => {
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT,
        })
    }

    return (
        <Button className="bg-white text-black" onClick={ () => onClick("facebook")}>
            <FacebookIcon />
            Facebook
        </Button>
    );
}

export default ButtonFacebook;