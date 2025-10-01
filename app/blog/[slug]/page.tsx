import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog';

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
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Samuel Jaja
          </Link>
          <div className="space-x-6">
            <Link href="/#projects" className="hover:text-blue-600">
              Projects
            </Link>
            <Link href="/blog" className="hover:text-blue-600">
              Blog
            </Link>
            <Link href="/services" className="hover:text-blue-600">
              Services
            </Link>
            <Link href="/#about" className="hover:text-blue-600">
              About
            </Link>
            <a href="https://github.com/Samuel-Datubo-Jaja" className="hover:text-blue-600">
              GitHub
            </a>
          </div>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-6 py-20">
        <Link href="/blog" className="text-blue-600 hover:underline mb-8 inline-block">
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

        <div className="prose prose-lg max-w-none">
          <div className="whitespace-pre-wrap">{post.content}</div>
        </div>

        <div className="mt-16 pt-8 border-t">
          <Link href="/blog" className="text-blue-600 hover:underline">
            Back to all posts
          </Link>
        </div>
      </article>

      <footer className="border-t py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-gray-600">
          <p>© 2025 Samuel Jaja.</p>
        </div>
      </footer>
    </main>
  );
}