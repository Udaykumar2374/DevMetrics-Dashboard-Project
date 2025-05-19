"use client"

import { useEffect, useRef } from "react"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

export function PerformanceChart() {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const chartInstance = useRef<Chart | null>(null)

  useEffect(() => {
    if (!chartRef.current) return

    // Destroy existing chart
    if (chartInstance.current) {
      chartInstance.current.destroy()
    }

    const ctx = chartRef.current.getContext("2d")
    if (!ctx) return

    // Sample data
    const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    const buildTimeData = [3.8, 3.6, 3.5, 3.7, 3.4, 3.2, 3.2]
    const deploymentData = [2, 3, 1, 4, 2, 3, 5]

    // Create new chart
    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Build Time (min)",
            data: buildTimeData,
            borderColor: "hsl(var(--primary))",
            backgroundColor: "hsl(var(--primary) / 0.1)",
            tension: 0.3,
            fill: true,
            yAxisID: "y",
          },
          {
            label: "Deployments",
            data: deploymentData,
            borderColor: "hsl(var(--secondary))",
            backgroundColor: "hsl(var(--secondary) / 0.1)",
            tension: 0.3,
            fill: true,
            yAxisID: "y1",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: "index",
          intersect: false,
        },
        scales: {
          y: {
            type: "linear",
            display: true,
            position: "left",
            title: {
              display: true,
              text: "Build Time (min)",
            },
            min: 0,
          },
          y1: {
            type: "linear",
            display: true,
            position: "right",
            title: {
              display: true,
              text: "Deployments",
            },
            min: 0,
            grid: {
              drawOnChartArea: false,
            },
          },
          x: {
            title: {
              display: true,
              text: "Day",
            },
          },
        },
        plugins: {
          tooltip: {
            enabled: true,
          },
          legend: {
            position: "top",
          },
        },
      },
    })

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return <canvas ref={chartRef} />
}
