
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowDown, RefreshCw, Settings } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const chains = [
  { id: "solana", name: "Solana", symbol: "SOL" },
  { id: "ethereum", name: "Ethereum", symbol: "ETH" },
  { id: "polygon", name: "Polygon", symbol: "MATIC" },
  { id: "binance", name: "BSC", symbol: "BNB" },
  { id: "avalanche", name: "Avalanche", symbol: "AVAX" },
];

const tokens = {
  solana: [
    { symbol: "SOL", name: "Solana", price: 23.45 },
    { symbol: "USDC", name: "USD Coin", price: 1.00 },
    { symbol: "RAY", name: "Raydium", price: 0.18 },
    { symbol: "SRM", name: "Serum", price: 0.045 },
  ],
  ethereum: [
    { symbol: "ETH", name: "Ethereum", price: 1634.50 },
    { symbol: "USDC", name: "USD Coin", price: 1.00 },
    { symbol: "UNI", name: "Uniswap", price: 5.23 },
    { symbol: "LINK", name: "Chainlink", price: 7.89 },
  ],
  polygon: [
    { symbol: "MATIC", name: "Polygon", price: 0.78 },
    { symbol: "USDC", name: "USD Coin", price: 1.00 },
    { symbol: "QUICK", name: "QuickSwap", price: 0.045 },
  ],
  binance: [
    { symbol: "BNB", name: "BNB", price: 245.67 },
    { symbol: "BUSD", name: "BUSD", price: 1.00 },
    { symbol: "CAKE", name: "PancakeSwap", price: 1.85 },
  ],
  avalanche: [
    { symbol: "AVAX", name: "Avalanche", price: 12.34 },
    { symbol: "USDC", name: "USD Coin", price: 1.00 },
    { symbol: "JOE", name: "TraderJoe", price: 0.34 },
  ],
};

export function TokenExchange() {
  const [selectedChain, setSelectedChain] = useState("solana");
  const [fromToken, setFromToken] = useState("SOL");
  const [toToken, setToToken] = useState("USDC");
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [isSwapping, setIsSwapping] = useState(false);

  const currentTokens = tokens[selectedChain as keyof typeof tokens] || tokens.solana;
  const fromTokenData = currentTokens.find(t => t.symbol === fromToken);
  const toTokenData = currentTokens.find(t => t.symbol === toToken);

  const calculateToAmount = (amount: string) => {
    if (!amount || !fromTokenData || !toTokenData) return "";
    const numAmount = parseFloat(amount);
    const rate = fromTokenData.price / toTokenData.price;
    return (numAmount * rate).toFixed(6);
  };

  const handleFromAmountChange = (value: string) => {
    setFromAmount(value);
    setToAmount(calculateToAmount(value));
  };

  const swapTokens = () => {
    const tempToken = fromToken;
    setFromToken(toToken);
    setToToken(tempToken);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  const handleSwap = async () => {
    setIsSwapping(true);
    // Simulate swap transaction
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSwapping(false);
    console.log(`Swapping ${fromAmount} ${fromToken} for ${toAmount} ${toToken} on ${selectedChain}`);
  };

  return (
    <Card className="gradient-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Token Exchange</CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="gradient-purple text-white">
              {chains.find(c => c.id === selectedChain)?.name}
            </Badge>
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Select Chain</Label>
          <Select value={selectedChain} onValueChange={setSelectedChain}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {chains.map((chain) => (
                <SelectItem key={chain.id} value={chain.id}>
                  {chain.name} ({chain.symbol})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          {/* From Token */}
          <div className="p-4 border rounded-lg space-y-3">
            <div className="flex items-center justify-between">
              <Label>From</Label>
              <span className="text-sm text-muted-foreground">
                Balance: 0.00
              </span>
            </div>
            <div className="flex gap-3">
              <Select value={fromToken} onValueChange={setFromToken}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {currentTokens.map((token) => (
                    <SelectItem key={token.symbol} value={token.symbol}>
                      {token.symbol}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                placeholder="0.00"
                value={fromAmount}
                onChange={(e) => handleFromAmountChange(e.target.value)}
                className="flex-1"
              />
            </div>
            <div className="text-sm text-muted-foreground">
              ≈ ${fromTokenData && fromAmount ? (parseFloat(fromAmount) * fromTokenData.price).toFixed(2) : '0.00'}
            </div>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={swapTokens}
              className="rounded-full border"
            >
              <ArrowDown className="h-4 w-4" />
            </Button>
          </div>

          {/* To Token */}
          <div className="p-4 border rounded-lg space-y-3">
            <div className="flex items-center justify-between">
              <Label>To</Label>
              <span className="text-sm text-muted-foreground">
                Balance: 0.00
              </span>
            </div>
            <div className="flex gap-3">
              <Select value={toToken} onValueChange={setToToken}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {currentTokens.map((token) => (
                    <SelectItem key={token.symbol} value={token.symbol}>
                      {token.symbol}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                placeholder="0.00"
                value={toAmount}
                readOnly
                className="flex-1 bg-muted"
              />
            </div>
            <div className="text-sm text-muted-foreground">
              ≈ ${toTokenData && toAmount ? (parseFloat(toAmount) * toTokenData.price).toFixed(2) : '0.00'}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Exchange Rate</span>
            <span>1 {fromToken} = {fromTokenData && toTokenData ? (fromTokenData.price / toTokenData.price).toFixed(6) : '0'} {toToken}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Network Fee</span>
            <span>~$0.01</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Slippage Tolerance</span>
            <span>0.5%</span>
          </div>
        </div>

        <Button 
          className="w-full gradient-purple text-white"
          disabled={!fromAmount || !toAmount || isSwapping}
          onClick={handleSwap}
        >
          {isSwapping ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Swapping...
            </>
          ) : (
            `Swap ${fromToken} for ${toToken}`
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
