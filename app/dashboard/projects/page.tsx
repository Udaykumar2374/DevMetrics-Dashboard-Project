import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import { ProjectsList } from "@/components/projects-list"

export const metadata: Metadata = {
  title: "Projects | DevMetrics",
  description: "Manage and analyze your projects",
}

export default function ProjectsPage() {
  return (
    <DashboardLayout>
      <ProjectsList />
    </DashboardLayout>
  )
}
