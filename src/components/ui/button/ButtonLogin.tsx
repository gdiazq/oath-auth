'use client'

import React from "react";
import {Button} from "@nextui-org/react";
import { useRouter } from "next/navigation";

const ButtonLogin = () => {
    const router = useRouter();
    
    return (
        <Button className="bg-blue-700 text-white" onClick={ () => router.push('/signin')}>
            Sign In
        </Button>
    );
}

export default ButtonLogin;