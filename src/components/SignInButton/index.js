"use client";

import React from "react";
import { login } from "@/lib/actions/auth";

export default function SignInButton() {
  return (
    <button
      style={{
        backgroundColor: "#192a56",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginBlockStart: "10px",
      }}
      onClick={() => login()}
    >
      Sign in with Github
    </button>
  );
}
