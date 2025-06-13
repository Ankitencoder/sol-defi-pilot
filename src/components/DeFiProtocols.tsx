
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Shield, Zap } from "lucide-react";

const protocols = [
  {
    name: "Marinade Finance",
    logo: "🌊",
    tvl: "$45,234.67",
    apy: "6.8%",
    position: "$12,456.78",
    status: "Active",
    type: "Staking",
    risk: "Low",
  },
  {
    name: "Raydium",
    logo: "⚡",
    tvl: "$23,567.89",
    apy: "24.5%",
    position: "$8,901.23",
    status: "Active",
    type: "LP",
    risk: "Medium",
  },
  {
    name: "Orca",
    logo: "🐋",
    tvl: "$18,901.23",
    apy: "18.2%",
    position: "$15,678.90",
    status: "Active",
    type: "LP",
    risk: "Medium",
  },
  {
    name: "Solend",
    logo: "🏦",
    tvl: "$32,123.45",
    apy: "12.4%",
    position: "$9,876.54",
    status: "Active",
    type: "Lending",
    risk: "Low",
  },
];

const getRiskColor = (risk: string) => {
  switch (risk) {
    case "Low": return "text-green-500 bg-green-500/10";
    case "Medium": return "text-yellow-500 bg-yellow-500/10";
    case "High": return "text-red-500 bg-red-500/10";
    default: return "text-gray-500 bg-gray-500/10";
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case "Staking": return Shield;
    case "LP": return TrendingUp;
    case "Lending": return Zap;
    default: return TrendingUp;
  }
};

export function DeFiProtocols() {
  return (
    <Card className="gradient-card border-border/50">
      <CardHeader>
        <CardTitle>Active DeFi Positions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {protocols.map((protocol, index) => {
            const TypeIcon = getTypeIcon(protocol.type);
            return (
              <Card key={protocol.name} className="glass hover:bg-muted/5 transition-all duration-300 group">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{protocol.logo}</div>
                      <div>
                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {protocol.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <TypeIcon className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{protocol.type}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Position</span>
                      <span className="font-semibold">{protocol.position}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">APY</span>
                      <Badge variant="secondary" className="gradient-green text-white">
                        {protocol.apy}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Risk</span>
                      <Badge className={getRiskColor(protocol.risk)}>
                        {protocol.risk}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
