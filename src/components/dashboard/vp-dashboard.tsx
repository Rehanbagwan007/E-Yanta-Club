import { StatCard } from "./stat-card";
import { CheckCircle, Calendar, Mic } from "lucide-react";

export function VpDashboard() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Vice President's Dashboard</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatCard title="Progress Approvals" value="12" icon={CheckCircle} className="bg-accent border-accent"/>
        <StatCard title="Active Events/Workshops" value="4" icon={Calendar} />
        <StatCard title="Announcements Sent" value="7" icon={Mic} />
      </div>
      <div className="mt-8">
        {/* Placeholder for announcement tools and event cards */}
        <p className="text-muted-foreground">Progress approval lists and announcement tools will be displayed here.</p>
      </div>
    </div>
  );
}
