
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";

const marketData = [
  { symbol: "SOL", name: "Solana", price: 23.45, change: 5.67, volume: "1.2B" },
  { symbol: "ETH", name: "Ethereum", price: 1634.50, change: -2.34, volume: "8.9B" },
  { symbol: "BTC", name: "Bitcoin", price: 26543.21, change: 1.23, volume: "15.6B" },
  { symbol: "MATIC", name: "Polygon", price: 0.78, change: 8.45, volume: "234M" },
  { symbol: "BNB", name: "BNB", price: 245.67, change: -1.56, volume: "567M" },
  { symbol: "AVAX", name: "Avalanche", price: 12.34, change: 3.21, volume: "178M" },
];

export function MarketOverview() {
  return (
    <Card className="gradient-card">
      <CardHeader>
        <CardTitle>Market Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {marketData.map((token) => (
          <div key={token.symbol} className="flex items-center justify-between p-3 border rounded-lg">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold">{token.symbol}</span>
                <Badge variant="outline" className="text-xs">
                  {token.name}
                </Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                Vol: ${token.volume}
              </div>
            </div>
            <div className="text-right space-y-1">
              <div className="font-semibold">
                ${token.price.toLocaleString()}
              </div>
              <div className={`flex items-center gap-1 text-sm ${
                token.change >= 0 ? 'text-green-400' : 'text-red-400'
              }`}>
                {token.change >= 0 ? (
                  <TrendingUp className="h-3 w-3" />
                ) : (
                  <TrendingDown className="h-3 w-3" />
                )}
                {Math.abs(token.change)}%
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
