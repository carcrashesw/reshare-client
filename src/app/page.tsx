import { PostCard } from "@/components/PostCard";
import { Sidebar } from "@/components/Sidebar";
import { BottomNav } from "@/components/BottomNav";

const POSTS = [
  {
    id: 1,
    user: {
      name: "王大树",
      handle: "@CarcrashesWW",
      avatar: "https://picsum.photos/seed/dashu/200",
    },
    content: "刚刚试了一下小树做的这个 ReShare 客户端，感觉界面非常清爽！这就是我想要的简洁风格。🌱 #ReShare #OpenClaw",
    images: ["https://picsum.photos/seed/post1/600/400", "https://picsum.photos/seed/post2/600/400"],
    timestamp: "10分钟前",
    stats: {
      likes: 128,
      comments: 32,
      reposts: 15,
    },
  },
  {
    id: 2,
    user: {
      name: "科技新闻速递",
      handle: "@TechNews",
      avatar: "https://picsum.photos/seed/tech/200",
    },
    content: "【Google Antigravity 发布新一代编码助手】据悉，代号为 '小树' 的智能助手在代码构建、UI 设计方面表现出色，能够从模糊需求中快速生成可用的原型。你会尝试吗？",
    images: [],
    timestamp: "1小时前",
    stats: {
      likes: 1240,
      comments: 543,
      reposts: 890,
    },
  },
  {
    id: 3,
    user: {
      name: "摄影日记",
      handle: "@PhotoDaily",
      avatar: "https://picsum.photos/seed/photo/200",
    },
    content: "成都今日好天气，随手拍几张。☀️",
    images: [
      "https://picsum.photos/seed/cd1/600/600",
      "https://picsum.photos/seed/cd2/600/600",
      "https://picsum.photos/seed/cd3/600/600",
      "https://picsum.photos/seed/cd4/600/600",
    ],
    timestamp: "3小时前",
    stats: {
      likes: 56,
      comments: 12,
      reposts: 4,
    },
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar (Desktop) */}
      <aside className="hidden md:block w-64 border-r fixed h-full bg-card z-10">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:pl-64">
        <div className="max-w-2xl mx-auto py-4 px-0 md:px-4 pb-20 md:pb-8">
          {/* Header (Mobile) */}
          <div className="md:hidden sticky top-0 z-20 bg-background/80 backdrop-blur-md px-4 py-3 border-b flex justify-between items-center">
            <h1 className="text-lg font-bold">首页</h1>
          </div>

          <div className="space-y-4 md:mt-4">
            {POSTS.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>

      {/* Right Sidebar (Desktop - Optional) */}
      <aside className="hidden lg:block w-80 fixed right-0 h-full p-6 border-l bg-card/50">
        <div className="space-y-4">
          <h3 className="font-semibold text-sm text-muted-foreground">推荐关注</h3>
          {/* Mock Recommended Users */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-muted/50 overflow-hidden">
                <img src={`https://picsum.photos/seed/rec${i}/100`} alt="" className="w-full h-full object-cover"/>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">推荐用户 {i}</p>
                <p className="text-xs text-muted-foreground">可能感兴趣的人</p>
              </div>
              <button className="text-xs font-semibold text-primary border border-primary px-3 py-1 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                关注
              </button>
            </div>
          ))}
        </div>
      </aside>

      {/* Bottom Nav (Mobile) */}
      <div className="md:hidden">
        <BottomNav />
      </div>
    </div>
  );
}