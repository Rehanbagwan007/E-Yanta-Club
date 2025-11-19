import { ProgressCard } from "@/components/progress/progress-card";
import { ProgressForm } from "@/components/progress/progress-form";
import { progressEntries } from "@/lib/data";

export default function ProgressPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Daily Progress</h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-1">
          <ProgressForm />
        </div>
        <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-semibold">Progress Timeline</h2>
            {progressEntries.map(entry => (
                <ProgressCard key={entry.id} entry={entry} />
            ))}
        </div>
      </div>
    </div>
  );
}
