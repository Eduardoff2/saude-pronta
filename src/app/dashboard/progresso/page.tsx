"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  TrendingUp,
  TrendingDown,
  Award,
  Target,
  Flame,
  Dumbbell,
  Droplet,
  Moon,
  Calendar,
  Download
} from "lucide-react";

export default function ProgressoPage() {
  const [timeRange, setTimeRange] = useState("week");

  const stats = {
    weight: {
      current: 72.5,
      start: 75,
      goal: 70,
      change: -2.5,
      unit: "kg",
    },
    calories: {
      average: 1850,
      goal: 2000,
      burned: 12500,
    },
    workouts: {
      completed: 18,
      goal: 20,
      streak: 5,
    },
    water: {
      average: 7.2,
      goal: 8,
      total: 50.4,
    },
  };

  const weeklyHabits = [
    { habit: "Treino", completed: 5, goal: 5, icon: Dumbbell, color: "text-blue-600" },
    { habit: "Água", completed: 6, goal: 7, icon: Droplet, color: "text-cyan-600" },
    { habit: "Sono", completed: 7, goal: 7, icon: Moon, color: "text-purple-600" },
    { habit: "Refeições", completed: 19, goal: 21, icon: Flame, color: "text-orange-600" },
  ];

  const achievements = [
    { title: "Primeira Semana", icon: "🎯", unlocked: true },
    { title: "5 Treinos", icon: "💪", unlocked: true },
    { title: "Meta de Água", icon: "💧", unlocked: true },
    { title: "Sequência de 7 dias", icon: "🔥", unlocked: false },
    { title: "10kg Perdidos", icon: "⭐", unlocked: false },
    { title: "30 Dias Ativos", icon: "🏆", unlocked: false },
  ];

  const weightData = [
    { week: "Sem 1", weight: 75 },
    { week: "Sem 2", weight: 74.5 },
    { week: "Sem 3", weight: 73.8 },
    { week: "Sem 4", weight: 72.5 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                href="/dashboard"
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <ArrowLeft className="w-6 h-6 text-gray-600" />
              </Link>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Seu Progresso
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Acompanhe sua evolução e conquistas
                </p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#2ecc71] text-white rounded-xl hover:bg-[#27ae60] transition-colors">
              <Download className="w-5 h-5" />
              <span className="hidden sm:inline">Exportar PDF</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filtro de Período */}
        <div className="flex gap-2 mb-8">
          {["week", "month", "year"].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-xl font-semibold transition-all ${
                timeRange === range
                  ? 'bg-[#2ecc71] text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {range === "week" ? "Semana" : range === "month" ? "Mês" : "Ano"}
            </button>
          ))}
        </div>

        {/* Cards de Estatísticas Principais */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Peso */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-white" />
              </div>
              <span className={`text-sm font-semibold ${stats.weight.change < 0 ? 'text-green-600' : 'text-red-600'}`}>
                {stats.weight.change > 0 ? '+' : ''}{stats.weight.change} kg
              </span>
            </div>
            <h3 className="text-sm text-gray-600 mb-1">Peso Atual</h3>
            <p className="text-3xl font-bold text-gray-900 mb-2">{stats.weight.current} kg</p>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Início: {stats.weight.start} kg</span>
              <span>Meta: {stats.weight.goal} kg</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
              <div 
                className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full"
                style={{ width: `${((stats.weight.start - stats.weight.current) / (stats.weight.start - stats.weight.goal)) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Calorias */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-orange-600">
                {stats.calories.burned} total
              </span>
            </div>
            <h3 className="text-sm text-gray-600 mb-1">Calorias Médias</h3>
            <p className="text-3xl font-bold text-gray-900 mb-2">{stats.calories.average}</p>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Meta: {stats.calories.goal}/dia</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
              <div 
                className="bg-gradient-to-r from-orange-400 to-red-500 h-2 rounded-full"
                style={{ width: `${(stats.calories.average / stats.calories.goal) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Treinos */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-blue-600">
                🔥 {stats.workouts.streak} dias
              </span>
            </div>
            <h3 className="text-sm text-gray-600 mb-1">Treinos Completos</h3>
            <p className="text-3xl font-bold text-gray-900 mb-2">{stats.workouts.completed}</p>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Meta: {stats.workouts.goal} este mês</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
              <div 
                className="bg-gradient-to-r from-blue-400 to-indigo-500 h-2 rounded-full"
                style={{ width: `${(stats.workouts.completed / stats.workouts.goal) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Água */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                <Droplet className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-semibold text-cyan-600">
                {stats.water.total}L total
              </span>
            </div>
            <h3 className="text-sm text-gray-600 mb-1">Média de Água</h3>
            <p className="text-3xl font-bold text-gray-900 mb-2">{stats.water.average}</p>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Meta: {stats.water.goal} copos/dia</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
              <div 
                className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full"
                style={{ width: `${(stats.water.average / stats.water.goal) * 100}%` }}
              ></div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Gráfico de Peso */}
          <section>
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                  <TrendingDown className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Evolução de Peso</h3>
                  <p className="text-sm text-gray-600">Últimas 4 semanas</p>
                </div>
              </div>

              <div className="space-y-4">
                {weightData.map((data, index) => {
                  const maxWeight = Math.max(...weightData.map(d => d.weight));
                  const barWidth = (data.weight / maxWeight) * 100;
                  
                  return (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-700">{data.week}</span>
                        <span className="text-sm font-bold text-gray-900">{data.weight} kg</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-green-400 to-emerald-500 h-3 rounded-full transition-all"
                          style={{ width: `${barWidth}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <Target className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Faltam para a meta</p>
                    <p className="text-2xl font-bold text-green-600">
                      {(stats.weight.current - stats.weight.goal).toFixed(1)} kg
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Ranking de Hábitos */}
          <section>
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Ranking Semanal</h3>
                  <p className="text-sm text-gray-600">Seus hábitos saudáveis</p>
                </div>
              </div>

              <div className="space-y-4">
                {weeklyHabits.map((habit, index) => {
                  const Icon = habit.icon;
                  const progress = (habit.completed / habit.goal) * 100;
                  
                  return (
                    <div key={index} className="p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-3 mb-3">
                        <Icon className={`w-6 h-6 ${habit.color}`} />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{habit.habit}</h4>
                          <p className="text-sm text-gray-600">
                            {habit.completed} de {habit.goal} completos
                          </p>
                        </div>
                        <span className="text-2xl font-bold text-gray-900">
                          {Math.round(progress)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all ${
                            progress >= 100 
                              ? 'bg-gradient-to-r from-green-400 to-emerald-500' 
                              : 'bg-gradient-to-r from-gray-400 to-slate-500'
                          }`}
                          style={{ width: `${Math.min(progress, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>

        {/* Conquistas */}
        <section className="mt-8">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Conquistas</h3>
                <p className="text-sm text-gray-600">Suas medalhas e troféus</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl text-center transition-all ${
                    achievement.unlocked
                      ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300'
                      : 'bg-gray-100 opacity-50'
                  }`}
                >
                  <div className="text-4xl mb-2">{achievement.icon}</div>
                  <p className={`text-xs font-semibold ${
                    achievement.unlocked ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {achievement.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
