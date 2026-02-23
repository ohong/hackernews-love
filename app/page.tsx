import { posts } from "@/data/posts";
import { Hero } from "@/components/hero";
import { PostCard } from "@/components/post-card";
import { Footer } from "@/components/footer";
import { SideNav } from "@/components/side-nav";
import { TopBar } from "@/components/top-bar";

export default function Home() {
  return (
    <div className="flex h-screen">
      <SideNav />
      <TopBar />
      <div
        id="scroll-container"
        className="snap-container flex-1 min-w-0 h-screen md:snap-y md:snap-mandatory overflow-y-scroll"
      >
        <Hero />
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        <Footer />
      </div>
    </div>
  );
}
