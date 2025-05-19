"use client"

import { useState } from "react"
import { Users, Calendar, ArrowUp, ArrowDown, GitCommit, GitPullRequest, Code2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { TeamPerformanceChart } from "@/components/team-performance-chart"

interface TeamMember {
  id: string
  name: string
  role: string
  avatar: string
  commits: number
  pullRequests: number
  codeQuality: number
  buildSuccess: number
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Frontend Developer",
    avatar: "/placeholder.svg?height=40&width=40",
    commits: 47,
    pullRequests: 12,
    codeQuality: 92,
    buildSuccess: 98,
  },
  {
    id: "2",
    name: "John Doe",
    role: "Backend Developer",
    avatar: "/placeholder.svg?height=40&width=40",
    commits: 38,
    pullRequests: 8,
    codeQuality: 88,
    buildSuccess: 95,
  },
  {
    id: "3",
    name: "Emily Chen",
    role: "Full Stack Developer",
    avatar: "/placeholder.svg?height=40&width=40",
    commits: 52,
    pullRequests: 15,
    codeQuality: 95,
    buildSuccess: 99,
  },
  {
    id: "4",
    name: "Michael Brown",
    role: "DevOps Engineer",
    avatar: "/placeholder.svg?height=40&width=40",
    commits: 29,
    pullRequests: 6,
    codeQuality: 90,
    buildSuccess: 97,
  },
  {
    id: "5",
    name: "Alex Kim",
    role: "UI/UX Designer",
    avatar: "/placeholder.svg?height=40&width=40",
    commits: 18,
    pullRequests: 5,
    codeQuality: 85,
    buildSuccess: 92,
  },
]

export function TeamAnalytics() {
  const [timeRange, setTimeRange] = useState("7d")

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Team Analytics</h1>
          <p className="text-muted-foreground">Monitor your team's performance and productivity</p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Last 24 hours</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Calendar className="h-4 w-4" />
            <span className="sr-only">Select date range</span>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Team Size</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500 inline-flex items-center">
                <ArrowUp className="mr-1 h-3 w-3" />1
              </span>{" "}
              from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Commits</CardTitle>
            <GitCommit className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">184</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500 inline-flex items-center">
                <ArrowUp className="mr-1 h-3 w-3" />
                12%
              </span>{" "}
              from last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pull Requests</CardTitle>
            <GitPullRequest className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">46</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-emerald-500 inline-flex items-center">
                <ArrowUp className="mr-1 h-3 w-3" />
                8%
              </span>{" "}
              from last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Code Quality</CardTitle>
            <Code2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">90%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-rose-500 inline-flex items-center">
                <ArrowDown className="mr-1 h-3 w-3" />
                2%
              </span>{" "}
              from last week
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="members">Team Members</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Team Performance</CardTitle>
              <CardDescription>Track your team's performance metrics over time</CardDescription>
            </CardHeader>
            <CardContent className="h-[300px]">
              <TeamPerformanceChart />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="members" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>Individual performance metrics for each team member</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {teamMembers.map((member) => (
                  <div key={member.id} className="flex flex-col space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                          <AvatarFallback>
                            {member.name.charAt(0)}
                            {member.name.split(" ")[1]?.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{member.name}</p>
                          <p className="text-sm text-muted-foreground">{member.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <GitCommit className="h-4 w-4 text-muted-foreground" />
                          <span>{member.commits}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitPullRequest className="h-4 w-4 text-muted-foreground" />
                          <span>{member.pullRequests}</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span>Code Quality</span>
                          <span className="font-medium">{member.codeQuality}%</span>
                        </div>
                        <Progress value={member.codeQuality} />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-sm">
                          <span>Build Success</span>
                          <span className="font-medium">{member.buildSuccess}%</span>
                        </div>
                        <Progress value={member.buildSuccess} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance Comparison</CardTitle>
              <CardDescription>Compare performance metrics across team members</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-medium mb-3">Commits</h3>
                  <div className="space-y-2">
                    {teamMembers
                      .sort((a, b) => b.commits - a.commits)
                      .map((member) => (
                        <div key={`commits-${member.id}`} className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="w-full">
                            <div className="flex items-center justify-between mb-1 text-sm">
                              <span>{member.name}</span>
                              <span>{member.commits}</span>
                            </div>
                            <Progress value={(member.commits / Math.max(...teamMembers.map((m) => m.commits))) * 100} />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-3">Pull Requests</h3>
                  <div className="space-y-2">
                    {teamMembers
                      .sort((a, b) => b.pullRequests - a.pullRequests)
                      .map((member) => (
                        <div key={`prs-${member.id}`} className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="w-full">
                            <div className="flex items-center justify-between mb-1 text-sm">
                              <span>{member.name}</span>
                              <span>{member.pullRequests}</span>
                            </div>
                            <Progress
                              value={(member.pullRequests / Math.max(...teamMembers.map((m) => m.pullRequests))) * 100}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
