"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useUser, useSession } from "@descope/nextjs-sdk/client";
import LogoutBtn from "@/LogoutBtn";
import { redirect } from "next/navigation";

export default function Dashboard() {
  const { user, isUserLoading } = useUser();
  const { isSessionLoading, isAuthenticated } = useSession();

  useEffect(() => {
    if (!isSessionLoading && !isUserLoading && !isAuthenticated)
      redirect("/login");
  }, [isSessionLoading, isUserLoading, isAuthenticated]);

  if (!user || isSessionLoading || isUserLoading)
    return <p className="text-center mt-4">Loading...</p>;

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex items-end gap-3.5">
        <Image
          className="relative"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <h1 className="text-5xl font-medium translate-y-1.5">
          SSO Demo Dashboard
        </h1>
      </div>
      <Link href="/" className="underline mt-4">
        Go home
      </Link>
      <div className="text-center">
        <h2 className="text-2xl mt-8">Hello {user.name},</h2>
        <p className="mt-3">
          You&apos;re signed in as <strong>{user.email}</strong>
        </p>
      </div>
      <LogoutBtn />
    </main>
  );
}
