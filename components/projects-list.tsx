"use client"

import { useState } from "react"
import {
  Search,
  Plus,
  MoreHorizontal,
  Calendar,
  ArrowUpDown,
  ChevronDown,
  CheckCircle2,
  Clock,
  AlertCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Project {
  id: string
  name: string
  description: string
  status: "active" | "completed" | "on-hold"
  progress: number
  dueDate: string
  team: {
    id: string
    name: string
    avatar: string
  }[]
}

const projects: Project[] = [
  {
    id: "proj-1",
    name: "Frontend Redesign",
    description: "Redesign the user interface for the main dashboard",
    status: "active",
    progress: 65,
    dueDate: "2025-06-15",
    team: [
      { id: "1", name: "Sarah Johnson", avatar: "/placeholder.svg?height=32&width=32" },
      { id: "3", name: "Emily Chen", avatar: "/placeholder.svg?height=32&width=32" },
      { id: "5", name: "Alex Kim", avatar: "/placeholder.svg?height=32&width=32" },
    ],
  },
  {
    id: "proj-2",
    name: "API Optimization",
    description: "Improve API performance and reduce response times",
    status: "active",
    progress: 42,
    dueDate: "2025-07-01",
    team: [
      { id: "2", name: "John Doe", avatar: "/placeholder.svg?height=32&width=32" },
      { id: "3", name: "Emily Chen", avatar: "/placeholder.svg?height=32&width=32" },
      { id: "4", name: "Michael Brown", avatar: "/placeholder.svg?height=32&width=32" },
    ],
  },
  {
    id: "proj-3",
    name: "Authentication System",
    description: "Implement new authentication and authorization system",
    status: "completed",
    progress: 100,
    dueDate: "2025-05-10",
    team: [
      { id: "2", name: "John Doe", avatar: "/placeholder.svg?height=32&width=32" },
      { id: "4", name: "Michael Brown", avatar: "/placeholder.svg?height=32&width=32" },
    ],
  },
  {
    id: "proj-4",
    name: "Mobile App Development",
    description: "Develop a mobile app version of the platform",
    status: "on-hold",
    progress: 28,
    dueDate: "2025-08-20",
    team: [
      { id: "1", name: "Sarah Johnson", avatar: "/placeholder.svg?height=32&width=32" },
      { id: "3", name: "Emily Chen", avatar: "/placeholder.svg?height=32&width=32" },
      { id: "5", name: "Alex Kim", avatar: "/placeholder.svg?height=32&width=32" },
    ],
  },
  {
    id: "proj-5",
    name: "Data Analytics Dashboard",
    description: "Create a new analytics dashboard with data visualization",
    status: "active",
    progress: 15,
    dueDate: "2025-07-30",
    team: [
      { id: "2", name: "John Doe", avatar: "/placeholder.svg?height=32&width=32" },
      { id: "5", name: "Alex Kim", avatar: "/placeholder.svg?height=32&width=32" },
    ],
  },
]

export function ProjectsList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || project.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
            <Clock className="mr-1 h-3 w-3" />
            Active
          </Badge>
        )
      case "completed":
        return (
          <Badge variant="outline" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
            <CheckCircle2 className="mr-1 h-3 w-3" />
            Completed
          </Badge>
        )
      case "on-hold":
        return (
          <Badge variant="outline" className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100">
            <AlertCircle className="mr-1 h-3 w-3" />
            On Hold
          </Badge>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">Manage and track your team's projects</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="on-hold">On Hold</SelectItem>
          </SelectContent>
        </Select>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              <ArrowUpDown className="h-4 w-4" />
              Sort
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Name (A-Z)</DropdownMenuItem>
            <DropdownMenuItem>Name (Z-A)</DropdownMenuItem>
            <DropdownMenuItem>Due Date (Earliest)</DropdownMenuItem>
            <DropdownMenuItem>Due Date (Latest)</DropdownMenuItem>
            <DropdownMenuItem>Progress (Highest)</DropdownMenuItem>
            <DropdownMenuItem>Progress (Lowest)</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <Card key={project.id}>
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Edit Project</DropdownMenuItem>
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Manage Team</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">Delete Project</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  {getStatusBadge(project.status)}
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Due {formatDate(project.dueDate)}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {project.team.map((member) => (
                      <Avatar key={member.id} className="border-2 border-background h-8 w-8">
                        <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
