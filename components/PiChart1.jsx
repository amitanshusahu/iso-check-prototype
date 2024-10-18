"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"
import { useEffect, useState } from 'react';

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

export const description = "A pie chart with a label"

let chartData = [
  { category: "compliance", comp: 100, fill: "var(--color-chrome)" },
  { category: "Non compliance", comp: 5, fill: "var(--color-safari)" },
  { category: "partially Compliant", comp: 3, fill: "var(--color-firefox)" },
  { category: "Not applicable", comp: 3, fill: "var(--color-edge)" },
  { category: "applicable", comp: 10, fill: "var(--color-other)" },
]

const chartConfig = {
  visitors: {
    label: "Status",
  },
  chrome: {
    label: "Compliance",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Non Compliance",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Partially Compliance",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Not Applicable",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Not Evaluated",
    color: "hsl(var(--chart-5))",
  },
}

export default function PieChart1() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/data');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        for(let i = 0; i< chartData.length; i++){
          chartData[i].comp = result[i].comp;
          chartData[i].category = result[i].category;
        }
        setData(chartData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <Card className="flex flex-col">
      <CardHeader className="pb-0">
        <CardTitle>Status</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={data} dataKey="comp" label nameKey="category" />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
