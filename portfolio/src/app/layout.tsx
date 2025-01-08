import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, User, Briefcase } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sowon Oh - Portfolio',
  description: 'Firmware Engineer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const navItems = [
    { href: '/', label: 'HOME', icon: <Home className="w-4 h-4" /> },
    { href: '/about', label: 'ABOUT', icon: <User className="w-4 h-4" /> },
    { href: '/projects', label: 'PROJECTS', icon: <Briefcase className="w-4 h-4" /> },
  ]

  return (
    <html lang="ko">
      <body className="flex flex-col min-h-screen bg-black">
        <header className="border-b-2 border-white">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="inline-flex items-center px-1 pt-1 text-xs pixel-text hover:text-[var(--accent-color)] transition-colors duration-200"
                  >
                    {item.icon}
                    <span className="ml-2 text-xs">{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </header>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="border-t-2 border-white py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[10px] pixel-text text-gray-400">
              © 2025 SOWON OH. ALL RIGHTS RESERVED.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}

