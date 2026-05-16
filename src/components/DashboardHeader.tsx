"use client";

import { useState } from "react";
import SignOutButton from "@/components/SignOutButton";
import ThemeToggle from "@/components/ThemeToggle";
import UserAvatar from "@/components/UserAvatar";

export default function DashboardHeader() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (typeof window === "undefined") return;

      await navigator.clipboard.writeText(window.location.href);

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <header className="flex flex-wrap items-center justify-between p-4 mb-8 gap-3 border-b border-[var(--border)] pb-6">
      
      {/* Title */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-[var(--muted-foreground)]">
          Your coding activity at a glance
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <UserAvatar />

        <button
          type="button"
          onClick={handleCopy}
          className="px-3 py-2 rounded-md border"
        >
          {copied ? "Copied!" : "📋"}
        </button>

        <ThemeToggle />
        <SignOutButton />
      </div>
    </header>
  );
}