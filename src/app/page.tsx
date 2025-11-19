import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Bot, Dna } from "lucide-react";
import Logo from "@/components/logo";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-2">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center text-center p-4">
        <div className="relative">
          <div className="absolute -top-16 -left-20 text-primary/10">
            <Bot size={120} strokeWidth={1} />
          </div>
          <div className="absolute -bottom-16 -right-20 text-accent/50">
            <Dna size={120} strokeWidth={1} />
          </div>
          <div className="relative z-10 bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-soft">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Welcome to <span className="text-gradient">E-Vision Hub</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
              The official E-Yantra Club Management System for PVPIT Budhgaon.
              Innovate, learn, and grow with us.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/signup">Get Started</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/login">Member Login</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <footer className="p-4 text-center text-muted-foreground text-sm">
        © {new Date().getFullYear()} E-Vision Hub. All Rights Reserved.
      </footer>
    </div>
  );
}
