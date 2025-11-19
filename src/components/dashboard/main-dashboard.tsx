"use client";

import { useAuth } from "@/hooks/use-auth";
import { FacultyDashboard } from "./faculty-dashboard";
import { PresidentDashboard } from "./president-dashboard";
import { VpDashboard } from "./vp-dashboard";
import { CoreMemberDashboard } from "./core-member-dashboard";
import { GeneralMemberDashboard } from "./general-member-dashboard";
import { WelcomeBanner } from "./welcome-banner";

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
        return <div>Invalid user role.</div>;
    }
  };

  return (
    <div>
        <WelcomeBanner />
        {renderDashboard()}
    </div>
  )
}
