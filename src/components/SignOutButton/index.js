"use client";

import { logout } from "@/lib/actions/auth";

export default function SignOutButton() {
  return (
    <button
      style={{
        backgroundColor: "#2c3e50",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginBlockStart: "10px",
      }}
      onClick={() => logout()}
    >
      Sign Out
    </button>
  );
}
