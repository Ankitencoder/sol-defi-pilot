
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Wallet, Bell, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface DashboardHeaderProps {
  walletConnected: boolean;
  setWalletConnected: (connected: boolean) => void;
}

export function DashboardHeader({ walletConnected, setWalletConnected }: DashboardHeaderProps) {
  const connectWallet = async () => {
    try {
      if (typeof window !== 'undefined' && window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletConnected(true);
        console.log('Wallet connected successfully');
      } else {
        alert('MetaMask not found. Please install MetaMask to continue.');
      }
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  const disconnectWallet = () => {
    setWalletConnected(false);
    console.log('Wallet disconnected');
  };

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-sm text-muted-foreground">Welcome back to your DeFi portfolio</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          
          {walletConnected ? (
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="gradient-green text-white">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                Connected
              </Badge>
              <Button 
                variant="outline" 
                onClick={disconnectWallet}
                className="text-sm"
              >
                0x1234...5678
              </Button>
            </div>
          ) : (
            <Button 
              onClick={connectWallet}
              className="gradient-purple text-white hover:opacity-90 transition-opacity"
            >
              <Wallet className="mr-2 h-4 w-4" />
              Connect Wallet
            </Button>
          )}

          <Button variant="ghost" size="icon">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
