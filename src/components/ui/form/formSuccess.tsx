import { CiCircleCheck } from "react-icons/ci";

interface formSuccessProps {
    message?: string;
};

export const FormSuccess = ({ message }: formSuccessProps) => {
    if (!message) {
        return null;
    } else {
        return (
            <div className="bg-green-300 p-3 rounded-md flex items-center mt-4 gap-x-2 max-w-xs mx-auto text-sm text-green-700">
                <CiCircleCheck className="size-4" />
                <p>{message}</p>
            </div>
        )
    }
}
