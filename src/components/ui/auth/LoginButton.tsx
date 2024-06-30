"use client";

import React from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export const LoginButton = () => {
    const router = useRouter();

    return (
        <div className="mt-4">
            <Button type="submit" className="text-base bg-white cursor-pointer">
                Login
            </Button>
        </div>

    )
}