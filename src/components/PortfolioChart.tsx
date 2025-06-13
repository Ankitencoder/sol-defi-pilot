
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

const portfolioData = [
  { date: "Jan", value: 95000, staked: 45000 },
  { date: "Feb", value: 98000, staked: 48000 },
  { date: "Mar", value: 102000, staked: 52000 },
  { date: "Apr", value: 108000, staked: 58000 },
  { date: "May", value: 115000, staked: 65000 },
  { date: "Jun", value: 124567, staked: 89234 },
];

export function PortfolioChart() {
  return (
    <Card className="gradient-card border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Portfolio Performance
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={portfolioData}>
            <defs>
              <linearGradient id="portfolioGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="stakedGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px"
              }} 
            />
            <Area
              type="monotone"
              dataKey="staked"
              stroke="hsl(var(--accent))"
              strokeWidth={2}
              fill="url(#stakedGradient)"
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="hsl(var(--primary))"
              strokeWidth={3}
              fill="url(#portfolioGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
