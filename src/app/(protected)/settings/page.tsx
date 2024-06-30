import { auth, signOut } from "@/auth"

const SettingPage = async () => {
    const session = await auth();

    return (
        <main className="flex flex-col w-full h-screen items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-900">
            <div className="text-black">
                {JSON.stringify(session)}
                <form action = {async () => {
                    "use server";

                    await signOut();
                }}>
                    <button type="submit">
                        Sign out
                    </button>
                </form>
            </div>
        </main>
    );
};

export default SettingPage;