"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A multiple bar chart"

const chartData = [
  { category: "Security Controls", comp: 10, noncomp: 5 },
  { category: "Regulatory Requirements", comp: 6, noncomp: 2 },
  { category: "Administrative Controls", comp: 5, noncomp: 2 },
]

const chartConfig = {
  comp: {
    label: "compliance",
    color: "#2a9d90",
  },
  noncomp: {
    label: "non compliance",
    color: "#e76e51",
  },
}

export function BarChar1() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Status</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="comp" fill="var(--color-comp)" radius={4} />
            <Bar dataKey="noncomp" fill="var(--color-noncomp)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
