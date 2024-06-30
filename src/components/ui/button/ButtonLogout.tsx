import Logout from "@/actions/logout";
import React from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation'

const ButtonLogout = () => {
    const router = useRouter()
    const onSubmit = async () => {
        Logout();
        setTimeout(() => {
            window.location.href = '/';
        }, 3000);
    };

    return (
        <Button className="bg-red-700 text-white" type="submit" onClick={onSubmit}>
            Logout
        </Button>
    );
}

export default ButtonLogout;

