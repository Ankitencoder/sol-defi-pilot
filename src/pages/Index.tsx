
import { PortfolioOverview } from "@/components/PortfolioOverview";
import { PortfolioChart } from "@/components/PortfolioChart";
import { DeFiProtocols } from "@/components/DeFiProtocols";
import { RecentTransactions } from "@/components/RecentTransactions";

const Index = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Portfolio Overview</h1>
          <p className="text-muted-foreground">
            Track and manage your Solana DeFi investments
          </p>
        </div>
      </div>

      <PortfolioOverview />

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <PortfolioChart />
        </div>
        <div>
          <RecentTransactions />
        </div>
      </div>

      <DeFiProtocols />
    </div>
  );
};

export default Index;
