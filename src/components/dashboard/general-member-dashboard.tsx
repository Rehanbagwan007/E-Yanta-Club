import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function GeneralMemberDashboard() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Member Dashboard</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <ActionCard title="Submit Progress" href="/progress" />
        <ActionCard title="View Progress History" href="/progress" />
        <ActionCard title="Join Events" href="/events" />
        <ActionCard title="Explore Resources" href="/resources" />
      </div>
    </div>
  );
}

function ActionCard({ title, href }: { title: string, href: string }) {
    return (
        <div className="p-6 bg-card rounded-2xl shadow-soft border-0 flex flex-col justify-between">
            <h3 className="text-lg font-semibold mb-4">{title}</h3>
            <Button variant="ghost" asChild className="w-fit p-0 h-auto text-primary">
                <Link href={href}>Go <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
        </div>
    )
}
