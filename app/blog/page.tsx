import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-white">
      <nav className="border-b">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">Samuel Jaja</Link>
          <div className="space-x-6">
            <Link href="/#projects" className="hover:text-blue-600">Projects</Link>
            <Link href="/blog" className="text-blue-600 font-semibold">Blog</Link>
            <Link href="/services" className="hover:text-blue-600">Services</Link>
            <Link href="/#about" className="hover:text-blue-600">About</Link>
            <a href="https://github.com/Samuel-Datubo-Jaja" className="hover:text-blue-600">GitHub</a>
          </div>
        </div>
      </nav>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">Blog</h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          Thoughts on machine learning, GenAI systems, and building production AI applications.
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
              <article key={post.slug} className="border-b pb-12">
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-3xl font-bold mb-3 hover:text-blue-600 transition">
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
                <p className="text-gray-700 mb-4 text-lg">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 hover:underline font-semibold"
                >
                  Read more
                </Link>
              </article>
            ))}
          </div>
        )}
      </section>

      <footer className="border-t py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-gray-600">
          <p>© 2025 Samuel Jaja.</p>
        </div>
      </footer>
    </main>
  );
}