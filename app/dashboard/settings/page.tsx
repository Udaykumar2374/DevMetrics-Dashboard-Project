import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard-layout"
import { SettingsForm } from "@/components/settings-form"

export const metadata: Metadata = {
  title: "Settings | DevMetrics",
  description: "Manage your account settings",
}

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <SettingsForm />
    </DashboardLayout>
  )
}
