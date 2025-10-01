import Link from 'next/link';
import ChatWidget from './components/ChatWidget';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">Samuel Jaja</Link>
          <div className="space-x-6">
            <Link href="#projects" className="hover:text-blue-600">Projects</Link>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <Link href="/services" className="hover:text-blue-600">Services</Link>
            <Link href="#about" className="hover:text-blue-600">About</Link>
            <a href="https://github.com/Samuel-Datubo-Jaja" className="hover:text-blue-600">GitHub</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">Samuel Jaja</h1>
        <h2 className="text-2xl text-gray-600 mb-6">
          ML/GenAI Engineer | RAG Systems & LLM Fine-tuning
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl">
          AWS Certified AI Practitioner specializing in production GenAI systems, 
          retrieval-augmented generation, and serverless cloud architectures. 
          Building intelligent AI solutions for banking and regulatory compliance.
        </p>
        <div className="flex gap-4">
          <a 
            href="https://www.linkedin.com/in/samuel-jaja/" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/Samuel-Datubo-Jaja" 
            className="border border-gray-300 px-6 py-3 rounded-lg hover:border-gray-400"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-gray-900">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="StructureGPT - RAG System for Building Regulations"
              description="Fine-tuned LLaMA-3.1-8b using LoRA and 8-bit quantization for UK Building Regulations compliance. Deployed to production on Hugging Face L4-GPU at $0.8/active hour with RAGAS evaluation."
              tech={["Python", "LLaMA", "LoRA", "ChromaDB", "LangChain"]}
              link="/projects/structuregpt"
            />

            <ProjectCard
              title="AI Digital Twin - Production Serverless Architecture"
              description="Built full-stack production AI system using serverless AWS (Lambda, API Gateway, Bedrock, CloudFront). Achieved <200ms global response times with Terraform IaC and automated CI/CD."
              tech={["FastAPI", "AWS Bedrock", "Terraform", "Next.js"]}
              link="/projects/digital-twin"
            />

            <ProjectCard
              title="MCP-Agentic-TraderNet"
              description="Autonomous multi-agent trading system with real-time market data integration, AI research tools, and strategy memory for acting on trading opportunities."
              tech={["Python", "CrewAI", "MCP", "Real-time Data"]}
              link="/projects/tradernet"
            />

            <ProjectCard
              title="RAG Document QA System"
              description="Production-grade document question-answering system using AWS Bedrock and LangChain for intelligent document retrieval and analysis."
              tech={["AWS Bedrock", "LangChain", "Python", "FastAPI"]}
              link="/projects/rag-qa"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <div className="space-y-6">
                <ExperienceItem
                  title="R&D Software Engineer"
                  company="CypherCrescent"
                  period="Jan 2022 - Dec 2024"
                  description="Developed enterprise-grade backend services with 40% cost savings. Enabled 70% platform growth through efficient architectures."
                />
                <ExperienceItem
                  title="Production Assistant"
                  company="Cranswick Convenience Foods"
                  period="Aug 2024 - Present"
                  description="UK workplace experience ensuring data accuracy and compliance."
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Education & Certifications</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold">MSc. AI & Data Science (Distinction)</p>
                  <p className="text-gray-600">University of Hull, UK</p>
                </div>
                <div>
                  <p className="font-semibold">Bachelor of Engineering</p>
                  <p className="text-gray-600">University of Port Harcourt, Nigeria</p>
                </div>
                <div className="mt-6">
                  <p className="font-semibold mb-2">Certifications:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>AWS Certified AI Practitioner</li>
                    <li>AWS ML Specialty (85% complete)</li>
                    <li>Databricks Fundamentals</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'FastAPI', 'AWS', 'LangChain', 'RAG Systems', 'LLM Fine-tuning', 
                'Terraform', 'Next.js', 'C# .NET', 'Databricks', 'Delta Lake', 
                'PyTorch', 'TensorFlow', 'Docker'].map(skill => (
                <span key={skill} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-gray-600">
          <p>© 2025 Samuel Jaja.</p>
        </div>
      </footer>
      <ChatWidget />
    </main>
  );
}

function ProjectCard({ title, description, tech, link }) {
  return (
    <div className="bg-white p-6 rounded-lg border hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map(item => (
          <span key={item} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
            {item}
          </span>
        ))}
      </div>
      <Link href={link} className="text-blue-600 hover:underline">
        Learn more
      </Link>
    </div>
  );
}

function ExperienceItem({ title, company, period, description }) {
  return (
    <div>
      <h4 className="font-semibold">{title}</h4>
      <p className="text-gray-600 text-sm">{company} | {period}</p>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  );
}