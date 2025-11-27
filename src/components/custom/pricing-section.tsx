import { PLANS } from "@/lib/constants";
import { Check, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PricingSection() {
  return (
    <section id="planos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#2ecc71]/10 to-[#3498db]/10 border border-[#2ecc71]/20 mb-6">
            <Sparkles className="w-4 h-4 text-[#2ecc71]" />
            <span className="text-sm font-medium text-gray-700">
              Planos e Preços
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Escolha o plano ideal para você
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Todos os planos incluem acesso à plataforma e suporte. Cancele quando quiser.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Plano Básico */}
          <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {PLANS.basic.name}
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gray-900">
                  R$ {PLANS.basic.price}
                </span>
                <span className="text-gray-600">/{PLANS.basic.period}</span>
              </div>
            </div>

            <Link href="/login?mode=signup&plan=basic">
              <Button
                variant="outline"
                className="w-full mb-6 py-6 rounded-2xl border-2 border-[#2ecc71] text-[#2ecc71] hover:bg-[#2ecc71] hover:text-white font-semibold transition-all duration-300"
              >
                Começar com Básico
              </Button>
            </Link>

            <div className="space-y-4">
              <p className="text-sm font-semibold text-gray-900 mb-3">
                ✔ Inclui:
              </p>
              {PLANS.basic.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#2ecc71] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}

              <p className="text-sm font-semibold text-gray-900 mt-6 mb-3">
                ❌ Não inclui:
              </p>
              {PLANS.basic.notIncluded.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-500">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Plano Premium */}
          <div className="bg-white rounded-3xl border-2 border-[#3498db] p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 relative transform md:scale-105">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="px-4 py-2 bg-gradient-to-r from-[#3498db] to-[#2980b9] text-white text-sm font-bold rounded-full shadow-lg">
                MAIS POPULAR
              </div>
            </div>

            <div className="mb-6 mt-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {PLANS.premium.name}
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gray-900">
                  R$ {PLANS.premium.price}
                </span>
                <span className="text-gray-600">/{PLANS.premium.period}</span>
              </div>
            </div>

            <Link href="/login?mode=signup&plan=premium">
              <Button className="w-full mb-6 py-6 rounded-2xl bg-gradient-to-r from-[#3498db] to-[#2980b9] hover:from-[#2980b9] hover:to-[#3498db] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Começar com Premium
              </Button>
            </Link>

            <div className="space-y-4">
              {PLANS.premium.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#3498db] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Plano VIP */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl border-2 border-orange-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {PLANS.vip.name}
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gray-900">
                  R$ {PLANS.vip.price}
                </span>
                <span className="text-gray-600">/{PLANS.vip.period}</span>
              </div>
            </div>

            <Link href="/login?mode=signup&plan=vip">
              <Button className="w-full mb-6 py-6 rounded-2xl bg-gradient-to-r from-[#f39c12] to-[#e74c3c] hover:from-[#e74c3c] hover:to-[#f39c12] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Começar com VIP
              </Button>
            </Link>

            <div className="space-y-4">
              {PLANS.vip.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#f39c12] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Todos os planos incluem{" "}
            <span className="font-semibold text-gray-900">7 dias grátis</span> para você testar.
            Sem compromisso, cancele quando quiser.
          </p>
        </div>
      </div>
    </section>
  );
}
