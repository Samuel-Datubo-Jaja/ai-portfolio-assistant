import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeRaw from 'rehype-raw';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

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

      <article className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold mb-8 group">
          <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>
        
        <h1 className="text-5xl font-bold mb-4 text-gray-900">{post.title}</h1>
        
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-8 pb-8 border-b">
          <time>
            {new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </time>
          <span>•</span>
          <span>{post.readingTime}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <div className="blog-content">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={{
              code({ node, inline, className, children, ...props }: any) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        <div className="mt-16 pt-8 border-t">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group">
            <svg className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all posts
          </Link>
        </div>
      </article>

      <footer className="border-t py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-sky-900 font-bold bg-white">
          <p>© 2025 Samuel Jaja.</p>
        </div>
      </footer>
    </main>
  );
}