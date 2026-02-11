import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Heart, MessageCircle, Repeat2, Share2, MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PostProps {
  user: {
    name: string;
    avatar: string;
    handle: string;
  };
  content: string;
  images?: string[];
  stats: {
    likes: number;
    comments: number;
    reposts: number;
  };
  timestamp: string;
}

export function PostCard({ post }: { post: PostProps }) {
  return (
    <Card className="w-full max-w-2xl mx-auto mb-4 border-0 shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader className="flex flex-row items-start space-x-4 p-4 pb-2">
        <Avatar>
          <AvatarImage src={post.user.avatar} alt={post.user.name} />
          <AvatarFallback>{post.user.name[0]}</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold">{post.user.name}</h4>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            {post.timestamp} · 来自 {post.user.handle}
          </p>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-4">
        <p className="whitespace-pre-wrap text-base leading-relaxed text-foreground/90">
          {post.content}
        </p>
        
        {post.images && post.images.length > 0 && (
          <div className={cn(
            "grid gap-2 mt-3",
            post.images.length === 1 ? "grid-cols-1" : 
            post.images.length === 4 ? "grid-cols-2" : 
            "grid-cols-3"
          )}>
            {post.images.map((img, i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-md bg-muted">
                <Image 
                  src={img} 
                  alt={`Image ${i+1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        )}
      </CardContent>
      <Separator />
      <CardFooter className="flex justify-between p-2">
        <Button variant="ghost" size="sm" className="flex-1 text-muted-foreground hover:text-foreground">
          <Repeat2 className="mr-2 h-4 w-4" />
          <span className="text-xs">{post.stats.reposts > 0 ? post.stats.reposts : "转发"}</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex-1 text-muted-foreground hover:text-foreground">
          <MessageCircle className="mr-2 h-4 w-4" />
          <span className="text-xs">{post.stats.comments > 0 ? post.stats.comments : "评论"}</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex-1 text-muted-foreground hover:text-foreground">
          <Heart className="mr-2 h-4 w-4" />
          <span className="text-xs">{post.stats.likes > 0 ? post.stats.likes : "赞"}</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex-1 text-muted-foreground hover:text-foreground">
          <Share2 className="mr-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}