import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { posts } from "../posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;


export default async function BlogDetail({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) return notFound();

  return (
    <article className="font-kanit px-4 sm:px-6 lg:px-10 py-10 max-w-4xl mx-auto space-y-8">
      <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-semibold">
        ← กลับไปหน้าบทความ
      </Link>

      <header className="space-y-3">
        <div className="flex items-center gap-3 text-sm text-slate-600">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700 font-semibold text-xs">
            {post.category}
          </span>
          <span>{post.date}</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">{post.title}</h1>
        <p className="text-slate-600">{post.excerpt}</p>
      </header>

      <div className="relative w-full h-70 md:h-90 rounded-2xl overflow-hidden">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 720px"
          priority
        />
      </div>

      <div className="prose prose-lg max-w-none text-slate-800 prose-img:rounded-lg prose-headings:font-semibold prose-li:leading-relaxed">
        {post.body}
      </div>
    </article>
  );
}

