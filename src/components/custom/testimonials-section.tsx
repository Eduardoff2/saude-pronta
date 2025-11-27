import { TESTIMONIALS } from "@/lib/constants";
import { Star, Sparkles } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#2ecc71]/10 to-[#3498db]/10 border border-[#2ecc71]/20 mb-6">
            <Sparkles className="w-4 h-4 text-[#2ecc71]" />
            <span className="text-sm font-medium text-gray-700">
              Depoimentos
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            O que nossos usuários dizem
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Milhares de pessoas já transformaram suas vidas com o Saúde Pronta
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#f39c12] text-[#f39c12]"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2ecc71] to-[#3498db] flex items-center justify-center text-white font-bold shadow-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#2ecc71] mb-2">10k+</div>
            <div className="text-gray-600">Usuários Ativos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#3498db] mb-2">50k+</div>
            <div className="text-gray-600">Treinos Realizados</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#2ecc71] mb-2">95%</div>
            <div className="text-gray-600">Satisfação</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#3498db] mb-2">24/7</div>
            <div className="text-gray-600">Suporte</div>
          </div>
        </div>
      </div>
    </section>
  );
}
