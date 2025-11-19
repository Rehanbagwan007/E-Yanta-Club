import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, User, Shield } from "lucide-react";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="w-full max-w-2xl text-center">
      <h1 className="text-3xl font-bold mb-2">Join the E-Yantra Club</h1>
      <p className="text-muted-foreground mb-8">Choose your path and start your journey of innovation.</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="shadow-soft border-0 text-left hover:border-primary transition-all">
          <CardHeader>
            <div className="bg-accent p-3 rounded-lg w-fit mb-4">
                <User className="w-8 h-8 text-accent-foreground" />
            </div>
            <CardTitle>Apply as a General Member</CardTitle>
            <CardDescription className="pb-4">
              Become part of our growing community. Participate in events, access resources, and learn with us.
            </CardDescription>
            <Button asChild className="w-fit">
              <Link href="/signup/apply">Apply Now <ArrowRight className="ml-2" /></Link>
            </Button>
          </CardHeader>
        </Card>
        
        <Card className="shadow-soft border-0 text-left hover:border-primary transition-all">
          <CardHeader>
            <div className="bg-primary/20 p-3 rounded-lg w-fit mb-4">
                <Shield className="w-8 h-8 text-primary" />
            </div>
            <CardTitle>Apply for the Core Team</CardTitle>
            <CardDescription className="pb-4">
              Ready to lead? Join the core team to manage projects, organize events, and shape the future of the club.
            </CardDescription>
            <Button asChild className="w-fit">
              <Link href="/signup/apply">Apply Now <ArrowRight className="ml-2" /></Link>
            </Button>
          </CardHeader>
        </Card>
      </div>
       <p className="text-sm text-muted-foreground text-center mt-8">
            Already a member?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Login here
            </Link>
          </p>
    </div>
  );
}
