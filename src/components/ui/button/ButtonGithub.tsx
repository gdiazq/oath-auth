'use client'

import React from "react";
import { Button } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import GithubIcon from "../icon/GithubIcon";
import { DEFAULT_OAUTH_LOGIN_REDIRECT } from "@/routes";

const ButtonGithub = () => {
    const onClick = (provider: "github") => {
        signIn(provider, {
            callbackUrl: DEFAULT_OAUTH_LOGIN_REDIRECT,
        })
    }

    return (
        <Button className="bg-white text-black" onPress={() => onClick("github")}>
            <GithubIcon />
            Github
        </Button>
    );
}

export default ButtonGithub;