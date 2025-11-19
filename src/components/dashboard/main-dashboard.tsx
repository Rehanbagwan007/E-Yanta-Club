"use client";

import { useAuth } from "@/hooks/use-auth";
import { FacultyDashboard } from "./faculty-dashboard";
import { PresidentDashboard } from "./president-dashboard";
import { VpDashboard } from "./vp-dashboard";
import { CoreMemberDashboard } from "./core-member-dashboard";
import { GeneralMemberDashboard } from "./general-member-dashboard";
import { WelcomeBanner } from "./welcome-banner";
import { Skeleton } from "../ui/skeleton";

export function MainDashboard() {
  const { user } = useAuth();

  const renderDashboard = () => {
    switch (user?.role) {
      case "faculty":
        return <FacultyDashboard />;
      case "president":
        return <PresidentDashboard />;
      case "vp":
        return <VpDashboard />;
      case "core":
        return <CoreMemberDashboard />;
      case "member":
        return <GeneralMemberDashboard />;
      default:
        return (
          <div>
            <Skeleton className="h-24 w-full mb-8" />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-32 w-full" />
            </div>
          </div>
        );
    }
  };

  return (
    <div>
        <WelcomeBanner />
        {renderDashboard()}
    </div>
  )
}
