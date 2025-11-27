"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Moon,
  Sun,
  Clock,
  TrendingUp,
  Calendar,
  Target,
  Lightbulb,
  Plus,
  Minus
} from "lucide-react";

export default function SonoPage() {
  const [sleepHours, setSleepHours] = useState(7);
  const [sleepMinutes, setSleepMinutes] = useState(30);
  const sleepGoal = 8;

  const weeklyData = [
    { day: "Seg", hours: 7.5, quality: "Boa" },
    { day: "Ter", hours: 8, quality: "Ótima" },
    { day: "Qua", hours: 6.5, quality: "Regular" },
    { day: "Qui", hours: 7, quality: "Boa" },
    { day: "Sex", hours: 6, quality: "Regular" },
    { day: "Sáb", hours: 9, quality: "Ótima" },
    { day: "Dom", hours: 8.5, quality: "Ótima" },
  ];

  const tips = [
    {
      icon: "🌙",
      title: "Rotina Consistente",
      description: "Durma e acorde no mesmo horário todos os dias, inclusive nos fins de semana.",
    },
    {
      icon: "📱",
      title: "Evite Telas",
      description: "Desligue dispositivos eletrônicos 1 hora antes de dormir.",
    },
    {
      icon: "🌡️",
      title: "Temperatura Ideal",
      description: "Mantenha o quarto entre 18-22°C para melhor qualidade do sono.",
    },
    {
      icon: "☕",
      title: "Evite Cafeína",
      description: "Não consuma cafeína após às 14h para não atrapalhar o sono.",
    },
  ];

  const averageSleep = weeklyData.reduce((sum, day) => sum + day.hours, 0) / weeklyData.length;
  const sleepProgress = (averageSleep / sleepGoal) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
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
                Monitor de Sono
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Acompanhe e melhore sua qualidade de sono
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Registro de Sono */}
        <section className="mb-8">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 text-white shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm mb-4">
                <Moon className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Registrar Sono de Hoje</h2>
              <p className="opacity-90">Quantas horas você dormiu?</p>
            </div>

            {/* Seletor de Horas */}
            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="text-center">
                <p className="text-sm opacity-75 mb-3">Horas</p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setSleepHours(Math.max(0, sleepHours - 1))}
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all backdrop-blur-sm"
                  >
                    <Minus className="w-6 h-6" />
                  </button>
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <span className="text-4xl font-bold">{sleepHours}</span>
                  </div>
                  <button
                    onClick={() => setSleepHours(Math.min(12, sleepHours + 1))}
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all backdrop-blur-sm"
                  >
                    <Plus className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div className="text-4xl">:</div>

              <div className="text-center">
                <p className="text-sm opacity-75 mb-3">Minutos</p>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setSleepMinutes(Math.max(0, sleepMinutes - 15))}
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all backdrop-blur-sm"
                  >
                    <Minus className="w-6 h-6" />
                  </button>
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <span className="text-4xl font-bold">{sleepMinutes}</span>
                  </div>
                  <button
                    onClick={() => setSleepMinutes(Math.min(45, sleepMinutes + 15))}
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all backdrop-blur-sm"
                  >
                    <Plus className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Meta */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Target className="w-6 h-6" />
                  <div>
                    <p className="text-sm opacity-75">Meta Diária</p>
                    <p className="text-xl font-bold">{sleepGoal} horas</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm opacity-75">Hoje</p>
                  <p className="text-xl font-bold">{sleepHours}h {sleepMinutes}min</p>
                </div>
              </div>
            </div>

            <button className="w-full py-4 bg-white text-indigo-600 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all">
              Salvar Registro
            </button>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Estatísticas Semanais */}
          <section>
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Histórico Semanal</h3>
                  <p className="text-sm text-gray-600">Últimos 7 dias</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {weeklyData.map((day, index) => {
                  const progress = (day.hours / sleepGoal) * 100;
                  const qualityColor = 
                    day.quality === "Ótima" ? "text-green-600" :
                    day.quality === "Boa" ? "text-blue-600" :
                    "text-orange-600";
                  
                  return (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-700">{day.day}</span>
                        <div className="flex items-center gap-3">
                          <span className={`text-sm font-semibold ${qualityColor}`}>
                            {day.quality}
                          </span>
                          <span className="text-sm text-gray-600">{day.hours}h</span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all ${
                            progress >= 100 
                              ? 'bg-gradient-to-r from-green-400 to-emerald-500' 
                              : progress >= 75
                              ? 'bg-gradient-to-r from-blue-400 to-indigo-500'
                              : 'bg-gradient-to-r from-orange-400 to-red-500'
                          }`}
                          style={{ width: `${Math.min(progress, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-indigo-600" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Média Semanal</p>
                    <p className="text-2xl font-bold text-indigo-600">
                      {averageSleep.toFixed(1)} horas/noite
                    </p>
                  </div>
                </div>
                <div className="w-full bg-indigo-200 rounded-full h-2 mt-3">
                  <div 
                    className="bg-indigo-600 h-2 rounded-full transition-all"
                    style={{ width: `${sleepProgress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </section>

          {/* Dicas para Melhor Sono */}
          <section>
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Dicas para Melhor Sono</h3>
                  <p className="text-sm text-gray-600">Hábitos saudáveis</p>
                </div>
              </div>

              <div className="space-y-4">
                {tips.map((tip, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">{tip.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{tip.title}</h4>
                        <p className="text-sm text-gray-600">{tip.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Horários Recomendados */}
            <div className="mt-6 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6" />
                <h3 className="text-lg font-bold">Horários Recomendados</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-3">
                  <div className="flex items-center gap-2">
                    <Moon className="w-5 h-5" />
                    <span className="font-semibold">Dormir</span>
                  </div>
                  <span className="text-xl font-bold">22:30</span>
                </div>
                <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-3">
                  <div className="flex items-center gap-2">
                    <Sun className="w-5 h-5" />
                    <span className="font-semibold">Acordar</span>
                  </div>
                  <span className="text-xl font-bold">06:30</span>
                </div>
              </div>
              <p className="text-sm opacity-75 mt-4">
                💡 Baseado na sua meta de {sleepGoal} horas de sono
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
