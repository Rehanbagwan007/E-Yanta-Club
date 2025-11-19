import { MainDashboard } from "@/components/dashboard/main-dashboard";
import { Suspense } from "react";

export default function DashboardPage() {
    return (
        <Suspense fallback={<p>Loading dashboard...</p>}>
            <MainDashboard />
        </Suspense>
    );
}
