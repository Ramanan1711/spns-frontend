import { useUser } from '@auth0/nextjs-auth0/client';
import { useState } from 'react';
import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useUser();

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-bold">SPNS</span>
              </Link>
            </div>
            <div className="flex items-center">
              {!isLoading && (
                <>
                  {user ? (
                    <Link href="/api/auth/logout" className="text-gray-700 hover:text-gray-900">
                      Logout
                    </Link>
                  ) : (
                    <Link href="/api/auth/login" className="text-gray-700 hover:text-gray-900">
                      Login
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}