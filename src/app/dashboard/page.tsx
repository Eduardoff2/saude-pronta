"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Utensils, 
  Dumbbell, 
  Droplet, 
  Moon, 
  Heart, 
  TrendingUp,
  Camera,
  Settings,
  Bell,
  Calendar,
  Target,
  Flame,
  Activity
} from "lucide-react";

export default function DashboardPage() {
  const [waterProgress, setWaterProgress] = useState(6);
  const waterGoal = 8;

  const dashboardCards = [
    {
      title: "Plano Alimentar",
      icon: Utensils,
      href: "/dashboard/alimentacao",
      color: "from-emerald-400 to-teal-500",
      description: "Suas refeições de hoje",
      value: "3 refeições",
    },
    {
      title: "Treino Diário",
      icon: Dumbbell,
      href: "/dashboard/treino",
      color: "from-blue-400 to-indigo-500",
      description: "Treino de hoje",
      value: "30 min",
    },
    {
      title: "Controle de Água",
      icon: Droplet,
      href: "/dashboard/agua",
      color: "from-cyan-400 to-blue-500",
      description: "Meta diária",
      value: `${waterProgress}/${waterGoal} copos`,
    },
    {
      title: "Monitor de Calorias",
      icon: Camera,
      href: "/dashboard/calorias",
      color: "from-orange-400 to-pink-500",
      description: "Análise por foto",
      value: "Premium",
    },
    {
      title: "Sono",
      icon: Moon,
      href: "/dashboard/sono",
      color: "from-purple-400 to-pink-500",
      description: "Qualidade do sono",
      value: "7h 30min",
    },
    {
      title: "Bem-estar",
      icon: Heart,
      href: "/dashboard/bemestar",
      color: "from-pink-400 to-rose-500",
      description: "Check-in emocional",
      value: "Ótimo",
    },
    {
      title: "Progresso",
      icon: TrendingUp,
      href: "/dashboard/progresso",
      color: "from-green-400 to-emerald-500",
      description: "Seu desempenho",
      value: "+2.5kg",
    },
    {
      title: "Configurações",
      icon: Settings,
      href: "/dashboard/configuracoes",
      color: "from-gray-400 to-slate-500",
      description: "Preferências",
      value: "Editar",
    },
  ];

  const todayStats = [
    { label: "Calorias", value: "1,850", goal: "2,000", icon: Flame, color: "text-orange-500" },
    { label: "Passos", value: "8,234", goal: "10,000", icon: Activity, color: "text-blue-500" },
    { label: "Água", value: "1.5L", goal: "2L", icon: Droplet, color: "text-cyan-500" },
    { label: "Treino", value: "30min", goal: "45min", icon: Target, color: "text-green-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Olá, <span className="text-[#2ecc71]">Maria</span>! 👋
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Hoje é {new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Bell className="w-6 h-6 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <Link 
                href="/dashboard/configuracoes"
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Settings className="w-6 h-6 text-gray-600" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Resumo do Dia */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-[#2ecc71]" />
            <h2 className="text-xl font-bold text-gray-900">Resumo do Dia</h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {todayStats.map((stat, index) => {
              const Icon = stat.icon;
              const progress = (parseInt(stat.value) / parseInt(stat.goal)) * 100;
              
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-3">
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                    <span className="text-xs text-gray-500">Meta: {stat.goal}</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-600 mb-3">{stat.label}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${stat.color.replace('text-', 'bg-')}`}
                      style={{ width: `${Math.min(progress, 100)}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Funcionalidades Principais */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Suas Funcionalidades</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardCards.map((card, index) => {
              const Icon = card.icon;
              
              return (
                <Link
                  key={index}
                  href={card.href}
                  className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#2ecc71] transition-colors">
                    {card.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-3">{card.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#2ecc71]">{card.value}</span>
                    <span className="text-xs text-gray-400 group-hover:text-[#2ecc71] transition-colors">
                      Ver mais →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Progresso Semanal */}
        <section className="mt-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Progresso Semanal</h2>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-green-600">5</span>
                </div>
                <p className="text-sm font-semibold text-gray-900">Treinos</p>
                <p className="text-xs text-gray-500">Esta semana</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-blue-600">7</span>
                </div>
                <p className="text-sm font-semibold text-gray-900">Refeições</p>
                <p className="text-xs text-gray-500">Seguidas</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-cyan-100 flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-cyan-600">14L</span>
                </div>
                <p className="text-sm font-semibold text-gray-900">Água</p>
                <p className="text-xs text-gray-500">Total</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-3">
                  <span className="text-2xl font-bold text-purple-600">52h</span>
                </div>
                <p className="text-sm font-semibold text-gray-900">Sono</p>
                <p className="text-xs text-gray-500">Total</p>
              </div>
            </div>
          </div>
        </section>

        {/* Botão Voltar */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#2ecc71] transition-colors"
          >
            ← Voltar para Início
          </Link>
        </div>
      </main>
    </div>
  );
}
