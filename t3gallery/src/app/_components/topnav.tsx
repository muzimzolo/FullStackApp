import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function TopNav() {
    return (
      <nav className="flex items-center justify-between w-full border-b p-4 text-x1
        font-semibolo">
      <div>Gallery</div>
      <div>
        <SignedOut>
            <SignInButton />
        </SignedOut>
        <SignedIn>
            <UserButton />
        </SignedIn>
      </div>
      </nav>
    );
  }