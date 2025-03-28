import type { Metadata } from 'next';
import Layout from '../layout';

export const metadata: Metadata = {
  title: 'Esai Saya',
  description: 'Kumpulan esai yang telah saya tulis.',
  openGraph: {
    title: 'Esai Saya',
    description: 'Kumpulan esai yang telah saya tulis.',
  },
};

const essays = [
  { id: 1, title: 'Pemrograman Fungsional dalam JavaScript', date: '2024-03-20' },
  { id: 2, title: 'Mengenal Cloud Computing dan Manfaatnya', date: '2024-03-18' },
  { id: 3, title: 'Pengenalan Docker untuk Pemula', date: '2024-03-15' },
  { id: 4, title: 'Membangun REST API dengan Laravel', date: '2024-03-10' },
  { id: 5, title: 'Optimasi Database untuk Aplikasi Skala Besar', date: '2024-03-05' },
];

export default function Essays() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-zinc-800 mb-6">Esai Saya</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {essays.map((essay) => (
          <div key={essay.id} className="p-4 border rounded-lg shadow-md bg-white hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-zinc-700">{essay.title}</h2>
            <p className="text-sm text-zinc-500 mt-1">{essay.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}