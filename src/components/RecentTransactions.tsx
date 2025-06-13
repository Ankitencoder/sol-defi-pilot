
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpIcon, ArrowDownIcon, RefreshCw } from "lucide-react";

const transactions = [
  {
    id: "1",
    type: "Stake",
    protocol: "Marinade Finance",
    amount: "+1,245.67 SOL",
    value: "$52,134.25",
    time: "2 hours ago",
    status: "Completed",
    direction: "in"
  },
  {
    id: "2",
    type: "Swap",
    protocol: "Raydium",
    amount: "500 USDC → 2.1 SOL",
    value: "$21,789.45",
    time: "5 hours ago",
    status: "Completed",
    direction: "swap"
  },
  {
    id: "3",
    type: "Withdraw",
    protocol: "Orca",
    amount: "-125.34 SOL",
    value: "$5,234.67",
    time: "1 day ago",
    status: "Completed",
    direction: "out"
  },
  {
    id: "4",
    type: "Supply",
    protocol: "Solend",
    amount: "+10,000 USDC",
    value: "$10,000.00",
    time: "2 days ago",
    status: "Completed",
    direction: "in"
  },
];

export function RecentTransactions() {
  return (
    <Card className="gradient-card border-border/50">
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((tx) => (
            <div key={tx.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/20 transition-colors group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted/20 flex items-center justify-center">
                  {tx.direction === "in" && <ArrowDownIcon className="w-4 h-4 text-green-500" />}
                  {tx.direction === "out" && <ArrowUpIcon className="w-4 h-4 text-red-500" />}
                  {tx.direction === "swap" && <RefreshCw className="w-4 h-4 text-blue-500" />}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{tx.type}</span>
                    <Badge variant="outline" className="text-xs">
                      {tx.protocol}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{tx.amount}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">{tx.value}</p>
                <p className="text-xs text-muted-foreground">{tx.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
