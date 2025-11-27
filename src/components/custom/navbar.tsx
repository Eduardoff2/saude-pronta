"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { BRAND, NAVIGATION } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#2ecc71] to-[#3498db] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-[#2ecc71] to-[#3498db] bg-clip-text text-transparent">
              {BRAND.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-[#2ecc71] font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="font-medium">
                Entrar
              </Button>
            </Link>
            <Link href="/login?mode=signup">
              <Button className="bg-gradient-to-r from-[#2ecc71] to-[#27ae60] hover:from-[#27ae60] hover:to-[#2ecc71] text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                Criar Conta Grátis
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-[#2ecc71] font-medium py-2 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3 border-t border-gray-100">
              <Link href="/login" className="block">
                <Button variant="outline" className="w-full font-medium">
                  Entrar
                </Button>
              </Link>
              <Link href="/login?mode=signup" className="block">
                <Button className="w-full bg-gradient-to-r from-[#2ecc71] to-[#27ae60] hover:from-[#27ae60] hover:to-[#2ecc71] text-white font-medium shadow-lg">
                  Criar Conta Grátis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
