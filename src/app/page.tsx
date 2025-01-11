

// export default function Home() {
//   return (
//    <>TEST API</>
//   );
// }
import Link from 'next/link';
import React from 'react';
import CopyButton from '@/components/button';
import { Marcellus } from 'next/font/google';

const marcellus = Marcellus({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-marcellus',
});


const apiUrl =
  process.env.NEXT_PUBLIC_API_URL ||
  (process.env.VERCEL_URL
    ? `https://template-6-api.vercel.app`
    : "http://localhost:3000");

const Home = () => {
  return (
    <div className={`flex flex-col items-center justify-center h-screen space-y-10 bg-gray-900 ${marcellus.className}`}>
      <h1 className="text-2xl md:text-7xl font-bold text-center text-white">
        THIS API IS CREATED BY <br /> Darakhshan Imran
      </h1>
      <div className="flex items-center justify-between bg-gray-100 rounded-md px-5 py-2 gap-10 mb-8">
        <h1 className=" text-lg md:text-4xl font-bold">Click to Copy The API</h1>
      
        <CopyButton textToCopy={`${apiUrl}/api/products`} />
      </div>

      <Link href="/api/cars">
        <button className="bg-white text-black px-4 py-2 rounded-md hover:scale-105 transition-all duration-300 active:scale-95">
          View Json
        </button>
      </Link>
    </div>
  );
};

export default Home;