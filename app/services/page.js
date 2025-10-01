import Link from 'next/link';


export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="border-b">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">Samuel Jaja</Link>
          <div className="space-x-6">
            <Link href="/#projects" className="hover:text-blue-600">Projects</Link>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <Link href="/services" className="text-blue-600 font-semibold">Services</Link>
            <Link href="/#about" className="hover:text-blue-600">About</Link>
            <a href="https://github.com/Samuel-Datubo-Jaja" className="hover:text-blue-600">GitHub</a>
          </div>
        </div>
      </nav>

      <section className="max-w-3xl mx-auto px-6 py-32 text-center">
        <div className="mb-8">
          <span className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Coming Soon
          </span>
        </div>
        
        <h1 className="text-5xl font-bold mb-6 text-gray-900">AI Automation Services</h1>
        
        <p className="text-xl text-gray-600 mb-12">
          Enterprise AI solutions and automation services launching soon. 
          Building intelligent systems that transform business operations.
        </p>

        <div className="bg-gray-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-semibold mb-6">What&apos;s Coming</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <h3 className="font-semibold text-lg mb-2">RAG System Development</h3>
              <p className="text-gray-600">Custom retrieval-augmented generation systems for your business</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">LLM Fine-tuning</h3>
              <p className="text-gray-600">Domain-specific model optimization and deployment</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">AI Integration</h3>
              <p className="text-gray-600">Seamless AI implementation into existing workflows</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Automation Consulting</h3>
              <p className="text-gray-600">Strategic guidance for AI-driven business transformation</p>
            </div>
          </div>
        </div>

        <p className="text-gray-600 mb-6">Interested in early access or collaboration?</p>
        <a 
          href="https://www.linkedin.com/in/samuel-jaja/" 
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Get in Touch
        </a>
      </section>

      <footer className="border-t py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-gray-600">
          <p>© 2025 Samuel Jaja.</p>
        </div>
      </footer>
      
    </main>
  );
}