import Link from "next/link";
import { createClient } from "../../supabase/server";
import { Button } from "./ui/button";
import { User, UserCircle } from "lucide-react";
import UserProfile from "./user-profile";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

export default async function Navbar() {
  const supabase = createClient();

  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  return (
    <nav className="w-full bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          prefetch
          className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
        >
          Jairosoft.dev
        </Link>

        <Navigation />

        <div className="flex gap-4 items-center">
          <div className="hidden md:flex gap-4 items-center">
            {user ? (
              <>
                <Link href="/dashboard">
                  <Button
                    variant="outline"
                    className="border-indigo-200 text-indigo-600 hover:bg-indigo-50"
                  >
                    Dashboard
                  </Button>
                </Link>
                <UserProfile />
              </>
            ) : (
              <>
                <Link
                  href="/sign-in"
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className="px-6 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
          <MobileMenu user={user} />
        </div>
      </div>
    </nav>
  );
}
