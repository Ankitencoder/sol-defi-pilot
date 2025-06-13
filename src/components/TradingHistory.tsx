
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const tradingHistory = [
  {
    id: "1",
    type: "buy",
    fromToken: "USDC",
    toToken: "SOL",
    fromAmount: "100.00",
    toAmount: "4.27",
    timestamp: "2024-01-15 14:30",
    status: "completed",
    chain: "Solana"
  },
  {
    id: "2",
    type: "sell",
    fromToken: "ETH",
    toToken: "USDC",
    fromAmount: "0.5",
    toAmount: "817.25",
    timestamp: "2024-01-15 12:15",
    status: "completed",
    chain: "Ethereum"
  },
  {
    id: "3",
    type: "buy",
    fromToken: "BNB",
    toToken: "CAKE",
    fromAmount: "1.0",
    toAmount: "132.78",
    timestamp: "2024-01-15 10:45",
    status: "pending",
    chain: "BSC"
  },
  {
    id: "4",
    type: "sell",
    fromToken: "MATIC",
    toToken: "USDC",
    fromAmount: "500.00",
    toAmount: "390.00",
    timestamp: "2024-01-14 16:20",
    status: "completed",
    chain: "Polygon"
  },
];

export function TradingHistory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Trading History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tradingHistory.map((trade) => (
            <div key={trade.id} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-4">
                <Badge 
                  variant={trade.type === "buy" ? "default" : "secondary"}
                  className={trade.type === "buy" ? "gradient-green text-white" : ""}
                >
                  {trade.type.toUpperCase()}
                </Badge>
                <div className="space-y-1">
                  <div className="font-semibold">
                    {trade.fromAmount} {trade.fromToken} → {trade.toAmount} {trade.toToken}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {trade.timestamp} • {trade.chain}
                  </div>
                </div>
              </div>
              <Badge 
                variant={trade.status === "completed" ? "default" : "secondary"}
                className={trade.status === "completed" ? "gradient-green text-white" : ""}
              >
                {trade.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
