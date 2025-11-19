import { StatCard } from "./stat-card";
import { UserPlus, Calendar, BarChart, CheckCircle } from "lucide-react";
import { MemberManagement } from "./member-management";

export function PresidentDashboard() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">President's Dashboard</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Join Requests" value="5" icon={UserPlus} className="bg-accent border-accent" />
        <StatCard title="Events to Manage" value="2" icon={Calendar} />
        <StatCard title="Team Progress" value="68%" icon={BarChart} />
        <StatCard title="Progress Approvals" value="8" icon={CheckCircle} />
      </div>
       <div className="mt-8">
        <MemberManagement />
      </div>
    </div>
  );
}
