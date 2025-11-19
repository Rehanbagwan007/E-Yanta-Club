import { progressEntries } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ProgressCard } from "../progress/progress-card";

export function RecentActivity() {
  return (
    <Card className="shadow-soft border-0">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>
          Latest progress updates from club members.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2">
          {progressEntries.slice(0, 2).map((entry) => (
            <ProgressCard key={entry.id} entry={entry} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
