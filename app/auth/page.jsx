"use client";

import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

export default function AuthPage() {
  const [view, setView] = useState("login");

  return (
    <div className="min-h-screen bg-[color:var(--background)] text-[color:var(--foreground)] flex items-center justify-center px-4 py-12 transition-colors">
      <div className="w-full max-w-4xl bg-[color:var(--card-background)] border border-[color:var(--card-border)] rounded-2xl shadow-xl grid md:grid-cols-2 overflow-hidden">
        {/* Left Panel */}
        <div className="p-8 flex flex-col justify-between">
          {view === "login" ? <Login /> : <Signup />}
          <div className="mt-6 text-sm text-[color:var(--foreground)]/70 text-center">
            {view === "login" ? (
              <>
                Don’t have an account?{" "}
                <button
                  onClick={() => setView("signup")}
                  className="text-mauve-600 dark:text-mauve-400 underline cursor-pointer">
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={() => setView("login")}
                  className="text-mauve-600 dark:text-mauve-400 underline cursor-pointer">
                  Sign in
                </button>
              </>
            )}
          </div>
        </div>

        {/* Right Panel (visual/branding section) */}
        <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-mauve-600 via-purple-600 to-blue-600 dark:from-mauve-700 dark:via-purple-700 dark:to-blue-700 text-white p-10 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Welcome to FitTracker</h2>
            <p className="text-white/90">
              Track workouts, monitor your progress, and stay motivated.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
