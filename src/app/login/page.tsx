"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BRAND } from "@/lib/constants";
import { ArrowLeft, Mail, Lock, User, Sparkles } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") || "login";
  const plan = searchParams.get("plan");
  const [isLogin, setIsLogin] = useState(mode === "login");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simula autenticação (aqui você integraria com backend/Supabase)
    setTimeout(() => {
      // Redireciona para o dashboard após "login"
      router.push("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center p-4">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#2ecc71]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#3498db]/10 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-md">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#2ecc71] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para o início</span>
        </Link>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2ecc71] to-[#3498db] flex items-center justify-center shadow-lg">
              <svg
                className="w-7 h-7 text-white"
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
            <span className="text-2xl font-bold bg-gradient-to-r from-[#2ecc71] to-[#3498db] bg-clip-text text-transparent">
              {BRAND.name}
            </span>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {isLogin ? "Bem-vindo de volta!" : "Crie sua conta"}
            </h1>
            <p className="text-gray-600">
              {isLogin
                ? "Entre para continuar sua jornada de saúde"
                : "Comece sua transformação hoje mesmo"}
            </p>
            {plan && (
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#2ecc71]/10 to-[#3498db]/10 border border-[#2ecc71]/20">
                <Sparkles className="w-4 h-4 text-[#2ecc71]" />
                <span className="text-sm font-medium text-gray-700">
                  Plano {plan.charAt(0).toUpperCase() + plan.slice(1)} selecionado
                </span>
              </div>
            )}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 font-medium">
                  Nome completo
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome"
                    required
                    className="pl-10 h-12 rounded-xl border-gray-200 focus:border-[#2ecc71] focus:ring-[#2ecc71]"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium">
                E-mail
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  required
                  className="pl-10 h-12 rounded-xl border-gray-200 focus:border-[#2ecc71] focus:ring-[#2ecc71]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700 font-medium">
                Senha
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="pl-10 h-12 rounded-xl border-gray-200 focus:border-[#2ecc71] focus:ring-[#2ecc71]"
                />
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-[#2ecc71] focus:ring-[#2ecc71]"
                  />
                  <span className="text-sm text-gray-600">Lembrar de mim</span>
                </label>
                <a
                  href="#"
                  className="text-sm text-[#2ecc71] hover:text-[#27ae60] font-medium"
                >
                  Esqueceu a senha?
                </a>
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-gradient-to-r from-[#2ecc71] to-[#27ae60] hover:from-[#27ae60] hover:to-[#2ecc71] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
            >
              {isLoading ? "Carregando..." : isLogin ? "Entrar" : "Criar Conta"}
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">ou</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <Button
              type="button"
              onClick={() => router.push("/dashboard")}
              variant="outline"
              className="w-full h-12 rounded-xl border-2 border-gray-200 hover:border-[#2ecc71] hover:bg-green-50 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continuar com Google
            </Button>
          </div>

          {/* Toggle */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}{" "}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-[#2ecc71] hover:text-[#27ae60] font-semibold"
              >
                {isLogin ? "Criar conta" : "Entrar"}
              </button>
            </p>
          </div>

          {/* Terms */}
          {!isLogin && (
            <p className="mt-6 text-xs text-center text-gray-500">
              Ao criar uma conta, você concorda com nossos{" "}
              <a href="#" className="text-[#2ecc71] hover:underline">
                Termos de Uso
              </a>{" "}
              e{" "}
              <a href="#" className="text-[#2ecc71] hover:underline">
                Política de Privacidade
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
