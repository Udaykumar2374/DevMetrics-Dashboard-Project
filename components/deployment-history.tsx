import { CheckCircle2, XCircle, Clock } from "lucide-react"

type DeploymentStatus = "success" | "failed" | "in-progress"

interface Deployment {
  id: string
  environment: string
  version: string
  timestamp: string
  status: DeploymentStatus
  author: string
}

const deployments: Deployment[] = [
  {
    id: "dep-1",
    environment: "Production",
    version: "v2.3.0",
    timestamp: "2025-05-19T10:30:00Z",
    status: "success",
    author: "Sarah Johnson",
  },
  {
    id: "dep-2",
    environment: "Staging",
    version: "v2.3.1",
    timestamp: "2025-05-19T09:15:00Z",
    status: "in-progress",
    author: "John Doe",
  },
  {
    id: "dep-3",
    environment: "Development",
    version: "v2.3.2",
    timestamp: "2025-05-18T16:45:00Z",
    status: "success",
    author: "Emily Chen",
  },
  {
    id: "dep-4",
    environment: "Production",
    version: "v2.2.9",
    timestamp: "2025-05-17T14:20:00Z",
    status: "failed",
    author: "Michael Brown",
  },
  {
    id: "dep-5",
    environment: "Staging",
    version: "v2.2.8",
    timestamp: "2025-05-16T11:10:00Z",
    status: "success",
    author: "Alex Kim",
  },
]

export function DeploymentHistory() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date)
  }

  const StatusIcon = ({ status }: { status: DeploymentStatus }) => {
    switch (status) {
      case "success":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />
      case "failed":
        return <XCircle className="h-5 w-5 text-red-500" />
      case "in-progress":
        return <Clock className="h-5 w-5 text-amber-500" />
    }
  }

  const StatusBadge = ({ status }: { status: DeploymentStatus }) => {
    const styles = {
      success: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
      failed: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
      "in-progress": "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100",
    }

    const labels = {
      success: "Success",
      failed: "Failed",
      "in-progress": "In Progress",
    }

    return (
      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[status]}`}>
        {labels[status]}
      </span>
    )
  }

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-3 text-left font-medium">Status</th>
                <th className="px-4 py-3 text-left font-medium">Environment</th>
                <th className="px-4 py-3 text-left font-medium">Version</th>
                <th className="px-4 py-3 text-left font-medium">Time</th>
                <th className="px-4 py-3 text-left font-medium">Author</th>
              </tr>
            </thead>
            <tbody>
              {deployments.map((deployment) => (
                <tr key={deployment.id} className="border-b">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <StatusIcon status={deployment.status} />
                      <StatusBadge status={deployment.status} />
                    </div>
                  </td>
                  <td className="px-4 py-3 font-medium">{deployment.environment}</td>
                  <td className="px-4 py-3">{deployment.version}</td>
                  <td className="px-4 py-3 text-muted-foreground">{formatDate(deployment.timestamp)}</td>
                  <td className="px-4 py-3">{deployment.author}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
