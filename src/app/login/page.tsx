import { Descope } from "@descope/nextjs-sdk";
import { session } from "@descope/nextjs-sdk/server";
import { redirect } from "next/navigation";

export default function Login() {
  const sessionRes = session();
  if (sessionRes) redirect("/dashboard");
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Descope
        flowId="sign-in"
        theme="light"
        redirectAfterSuccess="/dashboard"
      />
    </main>
  );
}
