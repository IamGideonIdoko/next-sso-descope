"use client";

import { useDescope } from "@descope/nextjs-sdk/client";

const LogoutBtn = () => {
  const { logout } = useDescope();
  return (
    <button
      className="inline-block py-2 px-3 rounded bg-red-500 text-white mt-8"
      onClick={() => {
        logout();
      }}
    >
      Log out
    </button>
  );
};

export default LogoutBtn;
