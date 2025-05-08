// pages/index.tsx
import { defaultMetadata } from '@/utils/metadata';
import Layout from '../components/Layout';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export const metadata = {
  title: 'Home',
  description: 'Ini adalah halaman utama saya, portofolio pribadi yang menampilkan proyek, esai, dan lebih banyak lagi.',
  openGraph: {
    images: "https://example.com/default-image.jpg",
    url: "https://example.com",
  },
};

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      {/* <div className="mb-6">
        <Image
          src="/profile.jpg"
          alt="Foto Profil"
          width={150}
          height={150}
          className="rounded-full mx-auto"
        />
      </div> */}

      {/* Judul dan Deskripsi */}
      <h1 className="text-4xl font-semibold text-zinc-800 mb-4">Halo, Saya Diva Aji Kurniawan</h1>
      <p className="text-xl text-zinc-600 mb-4">Saya seorang developer web dengan keahlian dalam frontend dan backend. Berikut adalah beberapa proyek saya.</p>

      {/* Link Media Sosial */}
      <div className="mt-6 flex justify-center gap-6">
        <a
          href="https://github.com/[username]" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-600 hover:text-black transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/[username]"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-600 hover:text-black transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/[username]"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl text-gray-600 hover:text-black transition-colors"
        >
          <FaTwitter />
        </a>
        <a
          href="mailto:email@example.com"
          className="text-2xl text-gray-600 hover:text-black transition-colors"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Call to Action */}
      <div className="mt-8">
        <a
          href="/projects"
          className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
        >
          Lihat Proyek Saya
        </a>
      </div>
    </div>
  );
}

Home.getLayout = (page: React.ReactNode) => {
  return <Layout>{page}</Layout>;
};
