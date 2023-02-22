import { signIn, signOut, useSession } from "next-auth/react";

export const Header = () => {
    const { data: sessionData } = useSession();

    return (
        <nav className="navbar bg-primary text-primary-content">
            <div className="flex-1 pl-5 text-3xl font-bold">
                {sessionData?.user?.name ? `Hei ${sessionData.user.name}` : ""}
            </div>
            <div>
                <div>
                    {sessionData?.user ? (
                        <label
                            tabIndex={0}
                            className="btn-ghost btn-circle avatar btn"
                            onClick={ () => void signOut()}
                        >
                            <div className="w-10 rounded-full">
                                <img 
                                    src={sessionData?.user?.image ?? ""}
                                    alt={sessionData?.user?.name ?? ""}
                                />
                                
                            </div>
                        </label>
                    ) : (
                        <div>
                            <button 
                                className="btn-ghost rounded-btn btn"
                                onClick={() => void signIn()}
                            >
                                Kirjaudu sisään
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}