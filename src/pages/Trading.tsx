
import { TokenExchange } from "@/components/TokenExchange";
import { TradingHistory } from "@/components/TradingHistory";
import { MarketOverview } from "@/components/MarketOverview";

const Trading = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Token Exchange</h1>
          <p className="text-muted-foreground">
            Buy and sell tokens across multiple blockchain networks
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <TokenExchange />
        </div>
        <div>
          <MarketOverview />
        </div>
      </div>

      <TradingHistory />
    </div>
  );
};

export default Trading;
