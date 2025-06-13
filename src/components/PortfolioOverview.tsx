
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon, DollarSign, TrendingUp, Wallet, Activity } from "lucide-react";

const portfolioMetrics = [
  {
    title: "Total Portfolio Value",
    value: "$124,567.89",
    change: "+12.5%",
    changeType: "positive",
    icon: DollarSign,
  },
  {
    title: "24h Change",
    value: "+$3,456.78",
    change: "+2.8%",
    changeType: "positive",
    icon: TrendingUp,
  },
  {
    title: "Total Staked",
    value: "$89,234.56",
    change: "+5.2%",
    changeType: "positive",
    icon: Wallet,
  },
  {
    title: "Active Positions",
    value: "12",
    change: "+2",
    changeType: "positive",
    icon: Activity,
  },
];

export function PortfolioOverview() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {portfolioMetrics.map((metric, index) => (
        <Card key={metric.title} className="gradient-card border-border/50 hover:border-primary/20 transition-all duration-300 animate-float" style={{ animationDelay: `${index * 0.1}s` }}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {metric.title}
            </CardTitle>
            <metric.icon className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <div className="flex items-center text-xs">
              {metric.changeType === "positive" ? (
                <ArrowUpIcon className="mr-1 h-3 w-3 text-green-500" />
              ) : (
                <ArrowDownIcon className="mr-1 h-3 w-3 text-red-500" />
              )}
              <span className={metric.changeType === "positive" ? "text-green-500" : "text-red-500"}>
                {metric.change}
              </span>
              <span className="text-muted-foreground ml-1">from last month</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
