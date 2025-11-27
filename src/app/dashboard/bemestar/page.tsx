"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Heart,
  Smile,
  Meh,
  Frown,
  Wind,
  Sparkles,
  Calendar,
  TrendingUp
} from "lucide-react";

export default function BemestarPage() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [breathingActive, setBreathingActive] = useState(false);

  const moods = [
    { id: "otimo", label: "Ótimo", icon: "😄", color: "from-green-400 to-emerald-500" },
    { id: "bom", label: "Bom", icon: "😊", color: "from-blue-400 to-cyan-500" },
    { id: "neutro", label: "Neutro", icon: "😐", color: "from-gray-400 to-slate-500" },
    { id: "triste", label: "Triste", icon: "😢", color: "from-orange-400 to-amber-500" },
    { id: "ansioso", label: "Ansioso", icon: "😰", color: "from-red-400 to-rose-500" },
  ];

  const weeklyMoods = [
    { day: "Seg", mood: "😊", color: "bg-blue-100" },
    { day: "Ter", mood: "😄", color: "bg-green-100" },
    { day: "Qua", mood: "😐", color: "bg-gray-100" },
    { day: "Qui", mood: "😊", color: "bg-blue-100" },
    { day: "Sex", mood: "😄", color: "bg-green-100" },
    { day: "Sáb", mood: "😄", color: "bg-green-100" },
    { day: "Dom", mood: "😊", color: "bg-blue-100" },
  ];

  const meditations = [
    {
      title: "Respiração Guiada",
      duration: "5 min",
      icon: "🧘",
      description: "Técnica de respiração para relaxamento profundo",
    },
    {
      title: "Meditação Matinal",
      duration: "10 min",
      icon: "🌅",
      description: "Comece o dia com energia positiva",
    },
    {
      title: "Relaxamento Noturno",
      duration: "15 min",
      icon: "🌙",
      description: "Prepare-se para uma noite tranquila",
    },
    {
      title: "Foco e Concentração",
      duration: "8 min",
      icon: "🎯",
      description: "Melhore seu foco e produtividade",
    },
  ];

  const motivationalMessages = [
    "Você é mais forte do que imagina! 💪",
    "Cada dia é uma nova oportunidade de crescer 🌱",
    "Acredite no seu potencial! ✨",
    "Pequenos passos levam a grandes conquistas 🎯",
  ];

  const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
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
                Bem-estar Emocional
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Cuide da sua saúde mental todos os dias
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Check-in Emocional */}
        <section className="mb-8">
          <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl p-8 text-white shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm mb-4">
                <Heart className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Como Você Está Se Sentindo?</h2>
              <p className="opacity-90">Registre seu humor de hoje</p>
            </div>

            {/* Seletor de Humor */}
            <div className="grid grid-cols-5 gap-3 mb-8">
              {moods.map((mood) => (
                <button
                  key={mood.id}
                  onClick={() => setSelectedMood(mood.id)}
                  className={`p-4 rounded-2xl transition-all ${
                    selectedMood === mood.id
                      ? 'bg-white text-pink-600 scale-110'
                      : 'bg-white/20 hover:bg-white/30 backdrop-blur-sm'
                  }`}
                >
                  <div className="text-4xl mb-2">{mood.icon}</div>
                  <p className={`text-xs font-semibold ${
                    selectedMood === mood.id ? 'text-pink-600' : 'text-white'
                  }`}>
                    {mood.label}
                  </p>
                </button>
              ))}
            </div>

            {selectedMood && (
              <button className="w-full py-4 bg-white text-pink-600 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all">
                Salvar Check-in
              </button>
            )}

            {/* Mensagem Motivacional */}
            <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
              <Sparkles className="w-6 h-6 mx-auto mb-2" />
              <p className="text-lg font-semibold">{randomMessage}</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Histórico Semanal */}
          <section>
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-rose-500 rounded-xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Histórico de Humor</h3>
                  <p className="text-sm text-gray-600">Últimos 7 dias</p>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-2 mb-6">
                {weeklyMoods.map((day, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-full aspect-square ${day.color} rounded-xl flex items-center justify-center text-3xl mb-2`}>
                      {day.mood}
                    </div>
                    <p className="text-xs font-semibold text-gray-600">{day.day}</p>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-pink-600" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Tendência Semanal</p>
                    <p className="text-2xl font-bold text-pink-600">Positiva ↗️</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Exercício de Respiração */}
            <div className="mt-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Wind className="w-6 h-6" />
                <h3 className="text-lg font-bold">Exercício de Respiração</h3>
              </div>
              
              {!breathingActive ? (
                <div>
                  <p className="text-sm opacity-90 mb-4">
                    Técnica 4-7-8: Inspire por 4 segundos, segure por 7, expire por 8.
                  </p>
                  <button
                    onClick={() => setBreathingActive(true)}
                    className="w-full py-3 bg-white text-cyan-600 rounded-xl font-semibold hover:bg-gray-50 transition-all"
                  >
                    Iniciar Exercício
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm mb-4 animate-pulse">
                    <Wind className="w-16 h-16" />
                  </div>
                  <p className="text-2xl font-bold mb-2">Inspire...</p>
                  <p className="text-sm opacity-75 mb-4">Contagem: 4 segundos</p>
                  <button
                    onClick={() => setBreathingActive(false)}
                    className="px-6 py-2 bg-white/20 rounded-xl hover:bg-white/30 transition-all"
                  >
                    Parar
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Meditações Guiadas */}
          <section>
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Meditações Guiadas</h3>
                  <p className="text-sm text-gray-600">Relaxe e encontre paz interior</p>
                </div>
              </div>

              <div className="space-y-4">
                {meditations.map((meditation, index) => (
                  <button
                    key={index}
                    className="w-full p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all text-left group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{meditation.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                          {meditation.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-1">{meditation.description}</p>
                        <span className="text-xs font-semibold text-purple-600">{meditation.duration}</span>
                      </div>
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                        <span className="text-2xl">▶️</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl">
                <p className="text-sm text-gray-700 text-center">
                  💜 <strong>Premium:</strong> Acesse mais de 50 meditações guiadas
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
