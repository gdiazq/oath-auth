'use client'

import React from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const ButtonSign = () => {
    const router = useRouter();

    return (
        <Button className="bg-green-600 text-white" onPress={ () => router.push('/signup')}>
            Sign Up
        </Button>
    );
}

export default ButtonSign;