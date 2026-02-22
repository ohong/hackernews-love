import { posts } from "@/data/posts";
import { Hero } from "@/components/hero";
import { PostCard } from "@/components/post-card";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="snap-container h-screen snap-y snap-mandatory overflow-y-scroll">
      <Hero />
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <Footer />
    </div>
  );
}
