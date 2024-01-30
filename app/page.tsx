import { LoginButton } from "@/components/auth/login-button";
import { useRouter } from "next/navigation";
export default function Home() {
  return (
    <main
      className="flex h-full flex-col items-center justify-center p-0 
     bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800
    "
    >
      <div className=" space-y-6">
        <h1 className=" text-6xl font-semibold  text-white drop-shadow-md font-serif">
          🔒 Auth
        </h1>
        <p className=" text-white text-lg">Simple authentication service</p>
        <div>
          <button
            className=" px-5 bg-white text-black rounded-md py-3 
        hover:cursor-pointer hover:opacity-80 w-full"
          >
            <LoginButton mode="modal">
              Sign In
              </LoginButton>
          </button>
        </div>
      </div>
    </main>
  );
}
