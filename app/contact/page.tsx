import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="border-b">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center bg-white">
          <Link href="/" className="text-xl font-bold text-sky-900">Samuel Jaja</Link>
          <div className="space-x-6 flex items-center">
            <Link href="/#projects" className="font-semibold text-sky-900 hover:text-sky-500 transition">Projects</Link>
            <Link href="/blog" className="font-semibold text-sky-900 hover:text-sky-500 transition">Blog</Link>
            <Link href="/services" className="font-semibold text-sky-900 hover:text-sky-500 transition">Services</Link>
            <Link href="/contact" className="font-semibold text-blue-600">Contact</Link>
            <a href="https://github.com/Samuel-Datubo-Jaja" className="font-semibold text-sky-900 hover:text-sky-500 transition">GitHub</a>
          </div>
        </div>
      </nav>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">Get In Touch</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Interested in AI automation, consulting, or collaboration? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Send a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Other Ways to Connect</h2>

            <div className="space-y-6">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/samuel-jaja/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition group"
              >
                <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition">
                  <Linkedin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">LinkedIn</h3>
                  <p className="text-gray-600 text-sm">Connect with me professionally</p>
                  <p className="text-blue-600 text-sm mt-1">linkedin.com/in/samuel-jaja</p>
                </div>
              </a>

              {/* GitHub - AI Projects */}
              <a
                href="https://github.com/Samuel-Datubo-Jaja"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition group"
              >
                <div className="bg-gray-100 p-3 rounded-lg group-hover:bg-gray-200 transition">
                  <Github className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">GitHub - AI Projects</h3>
                  <p className="text-gray-600 text-sm">Machine Learning & AI repositories</p>
                  <p className="text-gray-700 text-sm mt-1">https://github.com/Samuel-Datubo-Jaja</p>
                </div>
              </a>

              {/* GitHub - Main */}
              <a
                href="https://github.com/Samuel-Jaja"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition group"
              >
                <div className="bg-gray-100 p-3 rounded-lg group-hover:bg-gray-200 transition">
                  <Github className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">GitHub - SWE</h3>
                  <p className="text-gray-600 text-sm">Full-stack development projects</p>
                  <p className="text-gray-700 text-sm mt-1">https://github.com/Samuel-Jaja</p>
                </div>
              </a>

              {/* Response Time Note */}
              <div className="bg-sky-50 border border-sky-200 p-4 rounded-lg">
                <h3 className="font-semibold text-sky-900 mb-2 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Response Time
                </h3>
                <p className="text-sky-800 text-sm">
                  I typically respond within 24-48 hours on business days. For urgent inquiries, please reach out via LinkedIn.
                </p>
              </div>

              {/* Availability */}
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">Available For</h3>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• AI/ML Consulting</li>
                  <li>• RAG System Development</li>
                  <li>• LLM Fine-tuning Projects</li>
                  <li>• Cloud Architecture (AWS/Azure)</li>
                  <li>• Technical Advisory</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-sky-900 font-bold bg-white">
          <p>© 2025 Samuel Jaja.</p>
        </div>
      </footer>
    </main>
  );
}
