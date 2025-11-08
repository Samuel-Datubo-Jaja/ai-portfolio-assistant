import Link from 'next/link';
import ChatWidget from './components/ChatWidget';
import type { ReactNode } from 'react';

function ExperienceItem({ title, company, period, description }: { title: string; company: string; period: string; description: string }) {
  return (
    <div>
      <h4 className="font-bold text-sky-900">{title}</h4>
      <p className="text-sky-700 font-bold">{company} | {period}</p>
      <p className="text-gray-900 mt-2">{description}</p>
    </div>
  );
}

export default function Home(): ReactNode {
  return (
  <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center bg-white">
          <Link href="/" className="text-xl font-bold text-sky-900">Samuel Jaja</Link>
          <div className="space-x-6 flex items-center">
            <Link href="#projects" className="font-semibold text-sky-900 hover:text-sky-500 transition">Projects</Link>
            <Link href="/blog" className="font-semibold text-sky-900 hover:text-sky-500 transition">Blog</Link>
            <Link href="/services" className="font-semibold text-sky-900 hover:text-sky-500 transition">Services</Link>
            <Link href="#about" className="font-semibold text-sky-900 hover:text-sky-500 transition">About</Link>
            <a href="https://github.com/Samuel-Datubo-Jaja" className="font-semibold text-sky-900 hover:text-sky-500 transition">GitHub</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-2 py-10 sm:py-6">
        <div className="flex flex-col sm:flex-row items-center gap-8 mb-8">
          <img
            src="/my-picture.jpeg"
            alt="Samuel Jaja profile"
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-sky-400 shadow-lg object-cover bg-white"
            style={{ background: 'linear-gradient(135deg, #e0f2fe 0%, #38bdf8 100%)' }}
          />
          <div className="text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">Samuel Jaja</h1>
            <h2 className="text-xl sm:text-2xl text-gray-600 mb-6">
              ML/GenAI Software Engineer | Multi-Cloud(AWS First)
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-3xl">
              AI/ML Systems Engineer and Full-Stack Developer with 5+ years of experience building
              intelligent systems that combine data engineering, machine learning, and cloud
              infrastructure. Skilled in LLM fine-tuning, Retrieval-Augmented Generation (RAG), and
              agentic AI using AWS (Lambda, SageMaker, Bedrock, Terraform). Experienced in distributed
              data processing with Apache Spark and PySpark on Databricks for scalable ML workflows
              and data lakehouse architectures, with cross-cloud experience in Azure and GCP. Strong
              background in Python, .NET, FastAPI, and React/Node for developing robust APIs and AI-
              driven applications. Passionate about creating production-ready, explainable, and
              compliant AI systems that improve human-computer interaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <a 
                href="https://www.linkedin.com/in/samuel-jaja/" 
                className="bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 shadow-md transition"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/Samuel-Datubo-Jaja" 
                className="border border-sky-400 text-sky-700 px-6 py-3 rounded-lg hover:bg-sky-50 hover:border-sky-600 shadow-md transition"
              >
                GitHub
              </a>
              <a
                href="/Samuel Jaja_cv_2025_12mldon.pdf"
                download
                className="bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600 shadow-md transition"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
  <section id="projects" className="bg-sky-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10 text-black">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="RevGeni CRM – AI-Powered Sales Pipeline"
              description="Built full-stack enterprise SaaS CRM with Next.js 16, TypeScript, PostgreSQL, and GraphQL API serving AI-driven lead discovery, automated email sequences, and pipeline analytics. Integrated GPT-4 and Exa AI for intelligent company search, flexible multi-LLM architecture, and sub-5s AI response times."
              tech={["Next.js 16", "TypeScript", "Prisma ORM", "GraphQL", "PostgreSQL", "GPT-4", "Exa", "Langfuse"]}
              link="https://revgeni-crm.samueljaja.com/pipeline"
            />
            <ProjectCard
              title="PRIME – Multi-Agent Financial Advisor"
              description="Enterprise-grade, fully-serverless multi-agent AI platform for autonomous financial investment analysis. Orchestrates 5 agents via SQS and Lambda, distributed cross-region Bedrock setup, RAG pipeline with SageMaker embeddings, and full SaaS UI. Provisioned with Terraform, Langfuse, and Cloudwatch observability."
              tech={["Python", "FastAPI", "AWS Bedrock", "Lambda", "SageMaker", "Terraform", "Docker", "Next.js"]}
              link="https://prime.samueljaja.com/"
            />
            <ProjectCard
              title="StructureGPT – RAG System for Building Regulations"
              description="Fine-tuned LLaMA-3.1-8b using LoRA and 8-bit quantization for UK Building Regulations compliance. Deployed to production on Hugging Face L4-GPU at $0.8/active hour with RAGAS evaluation."
              tech={["Python", "LLaMA", "LoRA", "ChromaDB", "LangChain"]}
              link="https://huggingface.co/spaces/SamuelJaja/uk-building-regulations-bot"
            />
            <ProjectCard
              title="AI Digital Twin – Production Serverless Architecture"
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

      {/* About Me Section */}
      <section id="about" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-black">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-sky-900">Experience</h3>
              <div className="space-y-6">
                <ExperienceItem
                  title="Full-stack | R&D Software Engineer"
                  company="CypherCrescent"
                  period="Jan 2022 - Dec 2024"
                  description="Developed enterprise-grade backend services with 40% cost savings. Enabled 70% platform growth through efficient architectures. Event-Driven Design: Implemented CQRS pattern with MediatR for command/query
                                separation and event notifications, enabling loosely coupled microservices
                                communication via Pub/Sub messaging patterns. Azure DevOps Integration."
                />
                <ExperienceItem
                  title="Software Engineering Intern (ML & Software Development)"
                  company="Integral Computing & Research Centre"
                  period="June 2019 - Dec 2019"
                  description="Built computation tools using C# for engineering tasks and learnt the fundamentals of both Machine Learning and Software Development."
                  
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-sky-900">Education & Certifications</h3>
              <div className="space-y-4">
                 <div>
                  <p className="font-bold text-sky-900">PhD in View (AI & Carbon Accounting)</p>
                </div>
                <div>
                  <p className="font-bold text-sky-900">MSc. Artificial Intelligence & Data Science (Distinction)</p>
                  <p className="text-sky-700">University of Hull, UK</p>
                </div>
                <div>
                  <p className="font-bold text-sky-900">Bachelor of Chemical Engineering (B.Eng)</p>
                  <p className="text-sky-700">University of Port Harcourt, Nigeria</p>
                </div>
                <div className="mt-6">
                  <p className="font-bold mb-2 text-sky-900">Certifications:</p>
                  <ul className="list-disc list-inside text-sky-700 space-y-1">
                    <li>AWS Certified AI Practitioner</li>
                    <li>AWS Certified Generative AI Professional (Exp Dec 2025)</li>
                    <li>Databricks Fundamentals</li>
                    <li>Databricks Generative AI Fundamentals</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-xl font-bold mb-4 text-black">Technical Skills</h3>
          <div className="flex flex-wrap gap-2">
            {['Python', 'FastAPI', 'AWS', 'Azure', 'LangChain', 'RAG Systems', 'LLM Fine-tuning',
              'Terraform', 'Next.js', 'C# .NET', 'TypeScript', 'Databricks', 'Delta Lake',
              'PyTorch', 'TensorFlow', 'Multi-Cloud (AWS First)', 'Docker'].map(skill => (
              <span key={skill} className="bg-sky-900 text-white px-3 py-1 rounded-full text-sm font-bold hover:bg-sky-500 transition">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-sky-900 font-bold bg-white">
          <p>© 2025 Samuel Jaja.</p>
        </div>
      </footer>
      <ChatWidget />
    </main>
  );
}

  type ProjectCardProps = {
    title: string;
    description: string;
    tech: string[];
    link: string;
  };

  function ProjectCard({ title, description, tech, link }: ProjectCardProps) {
    return (
      <div className="bg-white p-6 rounded-lg border-2 border-sky-900 hover:shadow-lg transition">
        <h3 className="text-xl font-semibold mb-3 text-sky-700">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map(item => (
            <span key={item} className="text-xs bg-sky-50 text-sky-700 px-2 py-1 rounded">
              {item}
            </span>
          ))}
        </div>
        <a href={link} className="text-sky-600 hover:underline font-medium" target="_blank" rel="noopener noreferrer">Learn more</a>
      </div>
    );
  }
