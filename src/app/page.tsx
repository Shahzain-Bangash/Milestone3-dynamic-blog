import BlogCard from "@/app/components/BlogCard";
import { blogPosts } from "@/app/data/data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <h1 className="text-2xl  border-x-gray-500 w-[300px]  text-center  mx-auto uppercase my-12  text-dark dark:text-light sm:text-3xl lg:text-4xl ">
        Recent blogs
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            content={post.content}
            image={post.image}
          />
        ))}
      </section>
    </main>
  );
}
