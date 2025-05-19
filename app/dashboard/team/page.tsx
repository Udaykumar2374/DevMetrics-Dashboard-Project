import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import { TeamAnalytics } from "@/components/team-analytics"

export const metadata: Metadata = {
  title: "Team Analytics | DevMetrics",
  description: "Team performance analytics",
}

export default function TeamPage() {
  return (
    <DashboardLayout>
      <TeamAnalytics />
    </DashboardLayout>
  )
}
