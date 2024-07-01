import { auth, signOut } from "@/auth";
import { Button } from "@nextui-org/react";

const SettingPage = async () => {
    const session = await auth();
    
    if (!session) {
        return null; // or handle the null session case accordingly
    }

    return (
        <main className="flex flex-col w-full h-screen items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-900">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                <h1 className="text-5xl font-semibold mb-4">Settings</h1>
                <p className="text-gray-700 mb-4">You are logged in as:</p>
                <div className="text-black p-4 rounded mb-4">
                    {JSON.stringify(session.user, null, 2)}
                </div>
                <form action={async () => {
                    "use server";
                    await signOut();
                }}>
                    <Button
                        type="submit"
                        className="bg-red-700 text-white"
                    >
                        Sign out
                    </Button>
                </form>
            </div>
        </main>
    );
};

export default SettingPage;