import { FEATURES } from "@/lib/constants";
import {
  Utensils,
  Dumbbell,
  Droplet,
  Camera,
  Moon,
  Heart,
  TrendingUp,
  Sparkles,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Utensils,
  Dumbbell,
  Droplet,
  Camera,
  Moon,
  Heart,
  TrendingUp,
  Sparkles,
};

export default function FeaturesSection() {
  return (
    <section id="recursos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#2ecc71]/10 to-[#3498db]/10 border border-[#2ecc71]/20 mb-6">
            <Sparkles className="w-4 h-4 text-[#2ecc71]" />
            <span className="text-sm font-medium text-gray-700">
              Recursos Completos
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ferramentas inteligentes para cuidar da sua saúde de forma completa e sem complicação
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <div
                key={index}
                className="group bg-white p-6 rounded-2xl border border-gray-100 hover:border-[#2ecc71] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2ecc71]/10 to-[#3498db]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {Icon && (
                    <Icon className="w-7 h-7 text-[#2ecc71] group-hover:text-[#3498db] transition-colors duration-300" />
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-3xl bg-gradient-to-r from-green-50 to-blue-50 border border-green-100">
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Pronto para começar sua jornada?
              </h3>
              <p className="text-gray-600">
                Crie sua conta grátis e tenha acesso a todos os recursos
              </p>
            </div>
            <a
              href="/login?mode=signup"
              className="px-8 py-4 bg-gradient-to-r from-[#2ecc71] to-[#27ae60] hover:from-[#27ae60] hover:to-[#2ecc71] text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              Começar Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
