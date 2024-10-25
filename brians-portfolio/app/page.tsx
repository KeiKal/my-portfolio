import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Welcome to My Portfolio</h1>
        <Image
          src="/images/logo.png"  // Correct path
          alt="Profile Picture"
          className="rounded-full"
          width={150}
          height={150}
        />
        <p className="text-lg text-gray-600 mt-4">
          I am a Frontend Developer with a passion for creating beautiful and functional user interfaces.
        </p>
        <a href="/projects" className="btn mt-6">
          View My Projects
        </a>
      </main>
      <Footer />
    </div>
  );
}
