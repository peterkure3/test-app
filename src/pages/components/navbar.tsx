import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";

export default function Navbar() {
  const router = useRouter();
  const { data: sessionData } = useSession();

  const handleSellClick = () => {
    if (!sessionData) {
      // If user is not logged in, prompt sign in
      signIn();
    } else {
      // If user is logged in, navigate to Sell page
      router.push("/sell");
    }
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div>
          <p className="text-white font-bold text-xl cursor-pointer">Farmhub</p>
        </div>
        
        {/* Navigation Links */}
        <div className="flex space-x-4">
          <NavLink onClick={() => router.push("/")}>Home</NavLink>
          <NavLink onClick={() => router.push("/about")}>About</NavLink>
          <NavLink onClick={() => router.push("/contact")}>Contact</NavLink>
          <p className="text-white hover:text-gray-300 cursor-pointer" onClick={handleSellClick}>Sell</p>
        </div>

        {/* Auth Buttons */}
        <div>
          {sessionData ? (
            <button
              className="rounded-full bg-white/10 px-4 py-2 font-semibold text-white no-underline transition hover:bg-white/20"
              onClick={() => signOut()}
            >
              Sign out
            </button>
          ) : (
            <button
              className="rounded-full bg-white/10 px-4 py-2 font-semibold text-white no-underline transition hover:bg-white/20"
              onClick={() => signIn()}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

// Helper component for NavLink
function NavLink({ children, onClick }) {
  return (
    <p className="text-white hover:text-gray-300 cursor-pointer" onClick={onClick}>{children}</p>
  );
}
