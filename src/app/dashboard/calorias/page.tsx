"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Camera,
  Upload,
  Sparkles,
  Flame,
  TrendingUp,
  Clock,
  CheckCircle2
} from "lucide-react";

export default function CaloriasPage() {
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleAnalyze = () => {
    setAnalyzing(true);
    // Simular análise de IA
    setTimeout(() => {
      setResult({
        foods: [
          { name: "Arroz branco", amount: "150g", calories: 195 },
          { name: "Feijão preto", amount: "100g", calories: 77 },
          { name: "Peito de frango grelhado", amount: "120g", calories: 198 },
          { name: "Salada verde", amount: "80g", calories: 15 },
          { name: "Azeite", amount: "1 colher", calories: 40 },
        ],
        totalCalories: 525,
        macros: {
          protein: 38,
          carbs: 52,
          fat: 12,
        },
      });
      setAnalyzing(false);
    }, 2000);
  };

  const recentAnalyses = [
    {
      date: "Hoje, 12:30",
      meal: "Almoço",
      calories: 525,
      image: "🍽️",
    },
    {
      date: "Hoje, 08:00",
      meal: "Café da Manhã",
      calories: 380,
      image: "🥐",
    },
    {
      date: "Ontem, 19:00",
      meal: "Jantar",
      calories: 620,
      image: "🍱",
    },
  ];

  const monthlyStats = {
    analyses: 12,
    limit: 30,
    plan: "Premium",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link 
              href="/dashboard"
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-600" />
            </Link>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Monitor de Calorias
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Análise inteligente por foto com IA
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Área de Upload */}
        <section className="mb-8">
          <div className="bg-gradient-to-br from-orange-500 to-pink-600 rounded-3xl p-8 text-white shadow-2xl">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm mb-4">
                <Camera className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Tire uma Foto do Seu Prato</h2>
              <p className="opacity-90">A IA vai reconhecer os alimentos e calcular as calorias</p>
            </div>

            {!result ? (
              <div className="space-y-4">
                <button
                  onClick={handleAnalyze}
                  disabled={analyzing}
                  className="w-full py-4 bg-white text-orange-600 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
                >
                  {analyzing ? (
                    <>
                      <Sparkles className="w-6 h-6 animate-spin" />
                      Analisando com IA...
                    </>
                  ) : (
                    <>
                      <Camera className="w-6 h-6" />
                      Tirar Foto
                    </>
                  )}
                </button>

                <button className="w-full py-4 bg-white/20 backdrop-blur-sm text-white rounded-2xl font-semibold hover:bg-white/30 transition-all flex items-center justify-center gap-3">
                  <Upload className="w-6 h-6" />
                  Enviar da Galeria
                </button>
              </div>
            ) : (
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Análise Concluída!</h3>
                </div>

                <div className="bg-white/10 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-semibold">Total de Calorias</span>
                    <div className="flex items-center gap-2">
                      <Flame className="w-6 h-6" />
                      <span className="text-3xl font-bold">{result.totalCalories}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  {result.foods.map((food: any, index: number) => (
                    <div key={index} className="bg-white/10 rounded-xl p-3 flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{food.name}</p>
                        <p className="text-sm opacity-75">{food.amount}</p>
                      </div>
                      <span className="font-bold">{food.calories} cal</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-white/10 rounded-xl p-3 text-center">
                    <p className="text-sm opacity-75 mb-1">Proteína</p>
                    <p className="text-xl font-bold">{result.macros.protein}g</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3 text-center">
                    <p className="text-sm opacity-75 mb-1">Carboidrato</p>
                    <p className="text-xl font-bold">{result.macros.carbs}g</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-3 text-center">
                    <p className="text-sm opacity-75 mb-1">Gordura</p>
                    <p className="text-xl font-bold">{result.macros.fat}g</p>
                  </div>
                </div>

                <button
                  onClick={() => setResult(null)}
                  className="w-full py-3 bg-white text-orange-600 rounded-xl font-semibold hover:bg-gray-50 transition-all"
                >
                  Nova Análise
                </button>
              </div>
            )}

            {/* Contador de Análises */}
            <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-75">Análises este mês</p>
                  <p className="text-2xl font-bold">{monthlyStats.analyses} / {monthlyStats.limit}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm opacity-75">Plano</p>
                  <p className="text-lg font-bold">{monthlyStats.plan}</p>
                </div>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2 mt-3">
                <div 
                  className="bg-white h-2 rounded-full transition-all"
                  style={{ width: `${(monthlyStats.analyses / monthlyStats.limit) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* Análises Recentes */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Análises Recentes</h2>
            <button className="text-sm text-[#2ecc71] hover:text-[#27ae60] font-semibold">
              Ver Todas →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentAnalyses.map((analysis, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-5xl mb-4 text-center">{analysis.image}</div>
                <div className="text-center">
                  <h3 className="font-bold text-gray-900 mb-1">{analysis.meal}</h3>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-3">
                    <Clock className="w-4 h-4" />
                    <span>{analysis.date}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Flame className="w-5 h-5 text-orange-500" />
                    <span className="text-2xl font-bold text-gray-900">{analysis.calories}</span>
                    <span className="text-sm text-gray-600">calorias</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upgrade Banner */}
        <section className="mt-8">
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">Upgrade para VIP</h3>
                <p className="opacity-90 mb-4">Análises ilimitadas de calorias por foto</p>
                <button className="px-6 py-2 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-50 transition-all">
                  Fazer Upgrade
                </button>
              </div>
              <Sparkles className="w-16 h-16 opacity-50" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
