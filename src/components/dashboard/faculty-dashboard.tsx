import { StatCard } from "./stat-card";
import { Users, BarChart, Calendar, Target } from "lucide-react";
import { RecentActivity } from "./recent-activity";

export function FacultyDashboard() {
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Total Members" value="48" icon={Users} change="+3 this month" />
        <StatCard title="Active Teams" value="8" icon={Target} />
        <StatCard title="Projects in Progress" value="12" icon={BarChart} />
        <StatCard title="Upcoming Events" value="3" icon={Calendar} />
      </div>
      <div className="mt-8">
        <RecentActivity />
      </div>
    </div>
  );
}
