import { StatCard } from "./stat-card";
import { CheckCircle, Calendar, Mic } from "lucide-react";
import { RecentActivity } from "./recent-activity";

export function VpDashboard() {
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatCard title="Progress Approvals" value="12" icon={CheckCircle} className="bg-primary/10 border-primary/20"/>
        <StatCard title="Active Events/Workshops" value="4" icon={Calendar} />
        <StatCard title="Announcements Sent" value="7" icon={Mic} />
      </div>
      <div className="mt-8">
        <RecentActivity />
      </div>
    </div>
  );
}
