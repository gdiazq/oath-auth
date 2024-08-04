import { auth, signOut } from "@/auth";
import { Button } from "@nextui-org/react";

const SettingPage = async () => {
    const session = await auth();
    
    if (!session) {
        return null;
    }

    return (
        <main className="flex flex-col w-full h-screen items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-900">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl text-center">
                <h1 className="text-black text-5xl font-semibold mb-4">Settings</h1>
                <p className="text-gray-700 mb-4">You are logged in as:</p>
                <div className="text-black p-4 rounded mb-4">
                    <table className="border-collapse border border-black w-full">
                        <tbody>
                            {Object.entries(session.user).map(([key, value]) => (
                                <tr className="border border-black" key={key}>
                                    <td className="border border-black p-2">{key}</td>
                                    <td className="border border-black p-2">{JSON.stringify(value)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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
            <div className="pt-10">
                <p className="text-xs text-white"><a href="/">Back to home</a></p>
            </div>
        </main>
    );
};

export default SettingPage;