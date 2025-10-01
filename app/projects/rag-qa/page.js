import Link from 'next/link';

export default function RagQA() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">RAG Document QA System</h1>
      <p className="text-lg text-gray-700 mb-6">
        Production-grade document question-answering using AWS Bedrock and LangChain.
      </p>
      <p className="text-gray-700 mb-4">
        Full project details coming soon...
      </p>
      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to home
      </Link>
    </div>
  );
}