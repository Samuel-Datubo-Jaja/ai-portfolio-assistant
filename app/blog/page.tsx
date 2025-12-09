import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-white">
      <nav className="border-b">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center bg-white">
          <Link href="/" className="text-xl font-bold text-sky-900">Samuel Jaja</Link>
          <div className="space-x-6 flex items-center">
            <Link href="/#projects" className="font-semibold text-sky-900 hover:text-sky-500 transition">Projects</Link>
            <Link href="/blog" className="font-semibold text-blue-600">Blog</Link>
            <Link href="/services" className="font-semibold text-sky-900 hover:text-sky-500 transition">Services</Link>
            <Link href="/contact" className="font-semibold text-sky-900 hover:text-sky-500 transition">Contact</Link>
            <a href="https://github.com/Samuel-Jaja" className="font-semibold text-sky-900 hover:text-sky-500 transition">GitHub</a>
          </div>
        </div>
      </nav>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">Blog</h1>
        <p className="text-lg text-gray-700 max-w-3xl mb-2">
          Thoughts on machine learning, GenAI systems, and building production AI applications.
        </p>
        <p className="text-sm text-gray-500">
          {posts.length} {posts.length === 1 ? 'article' : 'articles'} published
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-20">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-12">
            {posts.map((post) => (
              <article key={post.slug} className="border-b pb-12 last:border-b-0">
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-3xl font-bold mb-3 text-gray-900 hover:text-blue-600 transition">
                    {post.title}
                  </h2>
                </Link>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <time>{new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</time>
                  <span>•</span>
                  <span>{post.readingTime}</span>
                </div>
                <p className="text-gray-800 mb-4 text-lg leading-relaxed">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group"
                >
                  Read article
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>

      <footer className="border-t py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-sky-900 font-bold bg-white">
          <p>© 2025 Samuel Jaja.</p>
        </div>
      </footer>
    </main>
  );
}