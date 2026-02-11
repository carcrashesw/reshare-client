import { Home, Compass, MessageSquare, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BottomNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 border-t bg-background/80 backdrop-blur-lg flex justify-around items-center h-16 px-2 z-50">
      <Button variant="ghost" size="icon" className="flex-1 flex flex-col items-center gap-1 h-full py-1 text-primary">
        <Home className="h-6 w-6" />
        <span className="text-[10px] font-medium">首页</span>
      </Button>
      <Button variant="ghost" size="icon" className="flex-1 flex flex-col items-center gap-1 h-full py-1 text-muted-foreground hover:text-foreground">
        <Compass className="h-6 w-6" />
        <span className="text-[10px] font-medium">发现</span>
      </Button>
      <Button variant="ghost" size="icon" className="flex-1 flex flex-col items-center gap-1 h-full py-1 text-muted-foreground hover:text-foreground">
        <MessageSquare className="h-6 w-6" />
        <span className="text-[10px] font-medium">消息</span>
      </Button>
      <Button variant="ghost" size="icon" className="flex-1 flex flex-col items-center gap-1 h-full py-1 text-muted-foreground hover:text-foreground">
        <User className="h-6 w-6" />
        <span className="text-[10px] font-medium">我</span>
      </Button>
    </div>
  );
}