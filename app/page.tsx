import { posts } from "@/data/posts";
import { Hero } from "@/components/hero";
import { PostCard } from "@/components/post-card";
import { Footer } from "@/components/footer";
import { KeyboardNavigation } from "@/components/keyboard-navigation";
import { SideNav } from "@/components/side-nav";
import { TopBar } from "@/components/top-bar";

export default function Home() {
  return (
    <div className="flex h-screen">
      <SideNav />
      <TopBar />
      <div
        id="scroll-container"
        role="region"
        aria-label="Hacker News Love entries"
        aria-keyshortcuts="ArrowUp ArrowDown ArrowLeft ArrowRight"
        tabIndex={0}
        className="flex-1 min-w-0 h-screen overflow-y-scroll focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-foreground/50"
      >
        <KeyboardNavigation />
        <Hero />
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        <Footer />
      </div>
    </div>
  );
}
