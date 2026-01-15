import Image from "next/image";
import Link from "next/link";
import { posts } from "./posts";

export const metadata = {
  title: "บทความและข่าวสาร | BCI",
  description: "อัปเดตบทความ ข่าวสาร และกิจกรรมของ BCI",
};

export default function BlogPage() {
  return (
    <div className="font-kanit">
      <section className="relative overflow-hidden" style={{ minHeight: '320px' }}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/placeholder/header_one.jpg"
            alt="Blog Background"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
        {/* Gradient Overlays */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_40%)]" />
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.10),transparent_35%)]" />
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 py-14 text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.2em] text-white font-semibold drop-shadow-lg">Blog</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">บทความและข่าวสาร</h1>
          <p className="text-white/95 max-w-3xl mx-auto drop-shadow-md">
            รวบรวมข่าวสาร อัปเดตกิจกรรม และองค์ความรู้จากหน้า `blog.html` เดิม
            พร้อมปุ่ม "อ่านเพิ่มเติม" เพื่อไปยังหน้ารายละเอียดใหม่แต่ละเรื่อง
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority={post.slug === posts[0].slug}
                />
              </div>
              <div className="flex flex-1 flex-col p-5 space-y-3">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-blue-700 font-semibold text-xs">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-lg font-semibold text-slate-900 leading-snug line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                <div className="pt-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-white text-sm font-semibold hover:bg-blue-700 transition shadow-sm"
                  >
                    อ่านเพิ่มเติม
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

