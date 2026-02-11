import { Home, Compass, Bell, Mail, User, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Sidebar() {
  return (
    <div className="hidden md:flex flex-col h-screen sticky top-0 w-64 border-r p-4 space-y-4">
      <div className="px-4 py-2">
        <h1 className="text-xl font-bold tracking-tight text-primary">ReShare</h1>
      </div>
      
      <nav className="space-y-2 flex-1">
        <Button variant="ghost" className="w-full justify-start text-lg font-medium">
          <Home className="mr-4 h-6 w-6" /> 首页
        </Button>
        <Button variant="ghost" className="w-full justify-start text-lg font-medium text-muted-foreground hover:text-foreground">
          <Compass className="mr-4 h-6 w-6" /> 发现
        </Button>
        <Button variant="ghost" className="w-full justify-start text-lg font-medium text-muted-foreground hover:text-foreground">
          <Bell className="mr-4 h-6 w-6" /> 消息
        </Button>
        <Button variant="ghost" className="w-full justify-start text-lg font-medium text-muted-foreground hover:text-foreground">
          <Mail className="mr-4 h-6 w-6" /> 私信
        </Button>
        <Button variant="ghost" className="w-full justify-start text-lg font-medium text-muted-foreground hover:text-foreground">
          <User className="mr-4 h-6 w-6" /> 我
        </Button>
      </nav>

      <div className="pt-4 border-t">
        <Button variant="ghost" className="w-full justify-start text-muted-foreground">
          <Settings className="mr-2 h-4 w-4" /> 设置
        </Button>
      </div>
    </div>
  );
}