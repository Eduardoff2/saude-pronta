"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Droplet,
  Plus,
  Minus,
  Bell,
  TrendingUp,
  Calendar,
  Target
} from "lucide-react";

export default function AguaPage() {
  const [waterCount, setWaterCount] = useState(6);
  const waterGoal = 8;
  const glassSize = 250; // ml

  const addWater = () => {
    if (waterCount < waterGoal + 5) {
      setWaterCount(waterCount + 1);
    }
  };

  const removeWater = () => {
    if (waterCount > 0) {
      setWaterCount(waterCount - 1);
    }
  };

  const progress = (waterCount / waterGoal) * 100;
  const totalMl = waterCount * glassSize;
  const goalMl = waterGoal * glassSize;

  const weeklyStats = [
    { day: "Seg", glasses: 7, goal: 8 },
    { day: "Ter", glasses: 8, goal: 8 },
    { day: "Qua", glasses: 6, goal: 8 },
    { day: "Qui", glasses: 9, goal: 8 },
    { day: "Sex", glasses: 7, goal: 8 },
    { day: "Sáb", glasses: 5, goal: 8 },
    { day: "Dom", glasses: 6, goal: 8 },
  ];

  const reminders = [
    { time: "08:00", label: "Ao acordar" },
    { time: "10:00", label: "Meio da manhã" },
    { time: "12:00", label: "Antes do almoço" },
    { time: "15:00", label: "Meio da tarde" },
    { time: "18:00", label: "Antes do jantar" },
    { time: "20:00", label: "Antes de dormir" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
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
                Controle de Água
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Mantenha-se hidratado todos os dias
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Contador Principal */}
        <section className="mb-8">
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-8 text-white shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-full backdrop-blur-sm mb-4">
                <Droplet className="w-12 h-12" />
              </div>
              <h2 className="text-4xl font-bold mb-2">{waterCount} / {waterGoal}</h2>
              <p className="text-lg opacity-90">copos de água hoje</p>
              <p className="text-sm opacity-75 mt-2">{totalMl}ml de {goalMl}ml</p>
            </div>

            {/* Barra de Progresso */}
            <div className="mb-8">
              <div className="w-full bg-white/20 rounded-full h-4 mb-2">
                <div 
                  className="bg-white h-4 rounded-full transition-all duration-500 relative overflow-hidden"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                </div>
              </div>
              <div className="flex justify-between text-sm opacity-90">
                <span>0%</span>
                <span>{Math.round(progress)}%</span>
                <span>100%</span>
              </div>
            </div>

            {/* Botões de Controle */}
            <div className="flex items-center justify-center gap-6">
              <button
                onClick={removeWater}
                disabled={waterCount === 0}
                className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
              >
                <Minus className="w-8 h-8" />
              </button>

              <div className="text-center">
                <p className="text-sm opacity-75 mb-1">Adicionar</p>
                <p className="text-2xl font-bold">{glassSize}ml</p>
              </div>

              <button
                onClick={addWater}
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg text-cyan-600"
              >
                <Plus className="w-8 h-8" />
              </button>
            </div>

            {/* Mensagem de Status */}
            <div className="mt-8 text-center">
              {progress >= 100 ? (
                <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
                  <p className="text-lg font-semibold">🎉 Parabéns! Meta atingida!</p>
                  <p className="text-sm opacity-90 mt-1">Você está muito bem hidratado hoje!</p>
                </div>
              ) : progress >= 75 ? (
                <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
                  <p className="text-lg font-semibold">💪 Quase lá!</p>
                  <p className="text-sm opacity-90 mt-1">Faltam apenas {waterGoal - waterCount} copos para sua meta!</p>
                </div>
              ) : (
                <div className="bg-white/20 rounded-2xl p-4 backdrop-blur-sm">
                  <p className="text-lg font-semibold">💧 Continue bebendo água!</p>
                  <p className="text-sm opacity-90 mt-1">Você está no caminho certo!</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Estatísticas Semanais */}
          <section>
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Estatísticas Semanais</h3>
                  <p className="text-sm text-gray-600">Seu progresso nos últimos 7 dias</p>
                </div>
              </div>

              <div className="space-y-4">
                {weeklyStats.map((stat, index) => {
                  const dayProgress = (stat.glasses / stat.goal) * 100;
                  const isToday = index === weeklyStats.length - 1;
                  
                  return (
                    <div key={index} className={`${isToday ? 'bg-cyan-50 p-3 rounded-xl' : ''}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-sm font-semibold ${isToday ? 'text-cyan-600' : 'text-gray-700'}`}>
                          {stat.day} {isToday && '(Hoje)'}
                        </span>
                        <span className="text-sm text-gray-600">
                          {stat.glasses}/{stat.goal} copos
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all ${
                            dayProgress >= 100 
                              ? 'bg-gradient-to-r from-green-400 to-emerald-500' 
                              : 'bg-gradient-to-r from-cyan-400 to-blue-500'
                          }`}
                          style={{ width: `${Math.min(dayProgress, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-cyan-600" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Média Semanal</p>
                    <p className="text-2xl font-bold text-cyan-600">
                      {(weeklyStats.reduce((sum, stat) => sum + stat.glasses, 0) / 7).toFixed(1)} copos/dia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Lembretes */}
          <section>
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-pink-500 rounded-xl flex items-center justify-center">
                  <Bell className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Lembretes Configurados</h3>
                  <p className="text-sm text-gray-600">Notificações para beber água</p>
                </div>
              </div>

              <div className="space-y-3">
                {reminders.map((reminder, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                        <Bell className="w-5 h-5 text-cyan-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{reminder.time}</p>
                        <p className="text-sm text-gray-600">{reminder.label}</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
                    </label>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all font-semibold flex items-center justify-center gap-2">
                <Plus className="w-5 h-5" />
                Adicionar Novo Lembrete
              </button>
            </div>

            {/* Dicas */}
            <div className="mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-6 h-6" />
                <h3 className="text-lg font-bold">Dica do Dia</h3>
              </div>
              <p className="text-sm opacity-90 leading-relaxed">
                💧 Beba um copo de água assim que acordar para ativar seu metabolismo e hidratar seu corpo após horas de sono.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
