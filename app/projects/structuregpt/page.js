import Link from 'next/link';

export default function StructureGPT() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">StructureGPT</h1>
      <p className="text-lg text-gray-700 mb-6">
        Multi-model RAG system for UK Building Regulations using fine-tuned LLaMA models with LoRA and 8-bit quantization.
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