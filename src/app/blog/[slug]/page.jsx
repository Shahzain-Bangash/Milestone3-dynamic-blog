import Image from 'next/image';
import CommentSection from '@/app/components/CommentSection';
import { blogPosts } from '@/app/data/data';

function fetchBlogPost(slug) {
  return blogPosts.find((post) => post.slug === slug);
}

export default function BlogPostPage({ params }) {
  const post = fetchBlogPost(params.slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8 ">
      <h1 className="text-xl xs:text-3xl lg:text-3xl font-bold text-dark">{post.title}</h1>
      <Image src={post.image} width={500} height={500} alt={post.title} className="rounded" />
      <section>
        <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase ">Summary</h2>
        <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 w-[50%]">{post.content}</p>
      </section>
      <section className="px-2 sm:px-8 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center ">
       
        <div className="flex flex-col ml-[-30px]">
          <h3 className="text-xl font-bold text-dark">Author: {post.author}</h3>
        </div>
      </section>
      <CommentSection />
    </article>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));
}
