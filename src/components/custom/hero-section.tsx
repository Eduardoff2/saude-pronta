import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { BRAND } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-white via-green-50/30 to-white">
      {/* Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#2ecc71]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#3498db]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#2ecc71]/10 to-[#3498db]/10 border border-[#2ecc71]/20 mb-8">
            <Sparkles className="w-4 h-4 text-[#2ecc71]" />
            <span className="text-sm font-medium text-gray-700">
              Assistente de Saúde Inteligente
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            {BRAND.tagline}
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            {BRAND.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/login?mode=signup">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-[#2ecc71] to-[#27ae60] hover:from-[#27ae60] hover:to-[#2ecc71] text-white font-semibold text-lg px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Criar Conta Grátis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="#recursos">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto font-semibold text-lg px-8 py-6 rounded-2xl border-2 border-gray-200 hover:border-[#2ecc71] hover:bg-green-50 transition-all duration-300"
              >
                Ver Recursos
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#2ecc71]" />
              <span>Sem cartão de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#3498db]" />
              <span>Cancele quando quiser</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#2ecc71]" />
              <span>Suporte 24/7</span>
            </div>
          </div>
        </div>

        {/* Hero Image/Mockup */}
        <div className="mt-16 relative">
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-[#2ecc71] to-[#3498db] rounded-3xl shadow-2xl p-1">
              <div className="bg-white rounded-3xl p-8 sm:p-12">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Card 1 */}
                  <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl border border-green-100 shadow-lg">
                    <div className="w-12 h-12 rounded-xl bg-[#2ecc71] flex items-center justify-center mb-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Alimentação</h3>
                    <p className="text-sm text-gray-600">Plano completo diário</p>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 shadow-lg">
                    <div className="w-12 h-12 rounded-xl bg-[#3498db] flex items-center justify-center mb-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Treinos</h3>
                    <p className="text-sm text-gray-600">Personalizados para você</p>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-gradient-to-br from-cyan-50 to-white p-6 rounded-2xl border border-cyan-100 shadow-lg">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#2ecc71] to-[#3498db] flex items-center justify-center mb-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">Progresso</h3>
                    <p className="text-sm text-gray-600">Acompanhe sua evolução</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
