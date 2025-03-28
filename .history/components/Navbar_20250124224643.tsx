'use client';
import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { useWallet } from "@/hooks/useWallet";
import { handleSignIn, handleSignOut } from "@/app/actions";

const Navbar = async () => {
  const { isConnected, address, connectWallet, disconnectWallet, formatAddress } = useWallet();
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Button 
                onClick={isConnected ? disconnectWallet : connectWallet}
                className="bg-black text-white"
              >
                {isConnected ? formatAddress(address) : "Connect Wallet"}
              </Button>

              <Link href="/startup/create">
                <span className="max-sm:hidden">Create</span>
                <BadgePlus className="size-6 sm:hidden" />
              </Link>

              <form action={handleSignOut}>
                <button type="submit">
                  <span className="max-sm:hidden">Logout</span>
                  <LogOut className="size-6 sm:hidden text-red-500" />
                </button>
              </form>

              <Link href={`/user/${session?.id}`}>
                <Avatar className="size-10">
                  <AvatarImage
                    src={session?.user?.image || ""}
                    alt={session?.user?.name || ""}
                  />
                  <AvatarFallback>PS</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <form action={handleSignIn}>
              <button type="submit">Login</button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
