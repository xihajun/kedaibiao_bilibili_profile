import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Youtube } from 'lucide-react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '课代表知识宇宙',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='zh' className="dark">
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        <main className="min-h-screen">
          {children}
        </main>
        
        <footer className="border-t border-gray-800 bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 py-8">
            <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
              <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-2">
                <span className="text-sm text-gray-400">
                  © {new Date().getFullYear()} 课代表立正. All rights reserved.
                </span>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://www.youtube.com/@kedaibiao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-400 hover:text-red-400 transition-colors duration-200 group"
                    title="Subscribe on YouTube"
                  >
                    <Youtube 
                      size={20} 
                      className="group-hover:animate-pulse"
                    />
                    <span className="text-sm">课代表立正</span>
                  </a>
                </div>
              </div>
              
              <a
                href="https://artifactbin.com?utm_source=template-repo&utm_campaign=oss"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
              >
                <span>Used Artifact Bin</span>
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
