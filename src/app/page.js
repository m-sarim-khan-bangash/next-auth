"use client";
import { login } from "@/lib/actions/auth";
import React from "react";

export default function Home() {
  return (
    <div>
      <p>You are Not Signed In</p>
      <button onClick={() => login()}>Sign in with Github</button>
    </div>
  );
}
