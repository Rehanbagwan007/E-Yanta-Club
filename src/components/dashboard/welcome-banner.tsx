"use client";
import { useAuth } from "@/hooks/use-auth";

export function WelcomeBanner() {
  const { user } = useAuth();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="p-8 rounded-2xl bg-primary-gradient text-white mb-8 shadow-soft">
      <h1 className="text-3xl font-bold">
        {getGreeting()}, {user?.name.split(" ")[0]}!
      </h1>
      <p className="mt-2 text-lg opacity-80">
        Here's what's happening with your E-Yantra club today.
      </p>
    </div>
  );
}
