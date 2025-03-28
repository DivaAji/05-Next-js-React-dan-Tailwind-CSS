import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Saya',
  description: 'Halaman tentang saya.',
  openGraph: {
    title: 'Tentang Saya',
    description: 'Halaman tentang saya.',
  },
};

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-semibold text-zinc-800 mb-4">Tentang Saya</h1>
      <p className="text-zinc-600">Saya sedang belajar React dan Tailwind CSS.</p>
      <p className="mt-4 text-zinc-700">Ini adalah halaman sederhana untuk latihan styling dengan Tailwind.</p>
    </div>
  );
}