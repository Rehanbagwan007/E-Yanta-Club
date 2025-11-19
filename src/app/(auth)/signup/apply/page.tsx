"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ApplyPage() {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would handle the form submission, e.g., send to a server
        console.log("Application submitted");
        // For this example, we'll just redirect to the login page with a success message (in a real app, this would be a proper notification)
        router.push("/login");
    }

  return (
    <Card className="w-full max-w-2xl shadow-soft border-0">
      <CardHeader>
        <CardTitle className="text-2xl">Club Application</CardTitle>
        <CardDescription>
          Fill out the form below to apply for membership.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Aarav Sharma" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="aarav.sharma@pvpit.edu.in" required />
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="position">Position Applied For</Label>
                <Select name="position" defaultValue="member">
                <SelectTrigger id="position">
                    <SelectValue placeholder="Select a position" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="member">General Member</SelectItem>
                    <SelectItem value="core">Core Team Member</SelectItem>
                </SelectContent>
                </Select>
            </div>
            <div className="space-y-2">
                <Label htmlFor="why">Why do you want to join?</Label>
                <Textarea id="why" placeholder="Tell us about your passion for robotics and what you hope to contribute..." className="min-h-[100px]" required />
            </div>
             <div className="space-y-2">
                <Label htmlFor="skills">What are your skills?</Label>
                <Input id="skills" placeholder="e.g., Python, Arduino, CAD, Public Speaking" />
                 <p className="text-xs text-muted-foreground">Separate skills with a comma.</p>
            </div>
        </CardContent>
        <CardFooter className="flex-col gap-4 items-stretch">
          <Button className="w-full" type="submit">
            Submit Application
          </Button>
           <p className="text-sm text-muted-foreground text-center">
            Already a member?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Login
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
}
