import { StatCard } from "./stat-card";
import { UserPlus, Calendar, BarChart, CheckCircle } from "lucide-react";
import { RecentActivity } from "./recent-activity";

export function PresidentDashboard() {
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Join Requests" value="5" icon={UserPlus} className="bg-primary/10 border-primary/20" />
        <StatCard title="Events to Manage" value="2" icon={Calendar} />
        <StatCard title="Team Progress" value="68%" icon={BarChart} />
        <StatCard title="Progress Approvals" value="8" icon={CheckCircle} />
      </div>
       <div className="mt-8">
        <RecentActivity />
      </div>
    </div>
  );
}
