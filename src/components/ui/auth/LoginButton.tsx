"use client";

import React from "react";
import { Button } from "@nextui-org/react";

export const LoginButton = () => {
    const onSubmit = () => {
        setTimeout(() => {
            window.location.href = "/";
        }, 3000);
    }

    return (
        <div className="mt-4">
            <Button type="submit" className="text-base bg-white cursor-pointer" onClick ={onSubmit}>
                Login
            </Button>
        </div>

    )
}