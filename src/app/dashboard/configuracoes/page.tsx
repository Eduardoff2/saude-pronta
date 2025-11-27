"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Settings,
  User,
  Target,
  Bell,
  CreditCard,
  Shield,
  LogOut,
  ChevronRight,
  Check
} from "lucide-react";

export default function ConfiguracoesPage() {
  const [notifications, setNotifications] = useState({
    water: true,
    meals: true,
    workout: true,
    sleep: false,
    motivation: true,
  });

  const userInfo = {
    name: "Maria Silva",
    email: "maria.silva@email.com",
    plan: "Premium",
    planColor: "from-blue-500 to-indigo-600",
    memberSince: "Janeiro 2024",
  };

  const goals = {
    weight: 70,
    calories: 2000,
    water: 8,
    workout: 5,
    sleep: 8,
  };

  const restrictions = {
    vegetarian: false,
    vegan: false,
    lactose: true,
    gluten: false,
    nuts: false,
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
                Configurações
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Personalize sua experiência
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Perfil do Usuário */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <User className="w-10 h-10" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-1">{userInfo.name}</h2>
                <p className="text-sm opacity-90 mb-2">{userInfo.email}</p>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold backdrop-blur-sm">
                    Plano {userInfo.plan}
                  </span>
                  <span className="text-xs opacity-75">Membro desde {userInfo.memberSince}</span>
                </div>
              </div>
              <button className="px-4 py-2 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-50 transition-all">
                Editar Perfil
              </button>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Objetivos */}
          <section>
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Meus Objetivos</h3>
                  <p className="text-sm text-gray-600">Defina suas metas</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-semibold text-gray-900">Peso Alvo (kg)</label>
                    <input 
                      type="number" 
                      value={goals.weight}
                      className="w-20 px-3 py-1 border-2 border-gray-200 rounded-lg text-center font-bold"
                    />
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-semibold text-gray-900">Calorias Diárias</label>
                    <input 
                      type="number" 
                      value={goals.calories}
                      className="w-20 px-3 py-1 border-2 border-gray-200 rounded-lg text-center font-bold"
                    />
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-semibold text-gray-900">Copos de Água/dia</label>
                    <input 
                      type="number" 
                      value={goals.water}
                      className="w-20 px-3 py-1 border-2 border-gray-200 rounded-lg text-center font-bold"
                    />
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-semibold text-gray-900">Treinos/semana</label>
                    <input 
                      type="number" 
                      value={goals.workout}
                      className="w-20 px-3 py-1 border-2 border-gray-200 rounded-lg text-center font-bold"
                    />
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-semibold text-gray-900">Horas de Sono</label>
                    <input 
                      type="number" 
                      value={goals.sleep}
                      className="w-20 px-3 py-1 border-2 border-gray-200 rounded-lg text-center font-bold"
                    />
                  </div>
                </div>

                <button className="w-full py-3 bg-[#2ecc71] text-white rounded-xl font-semibold hover:bg-[#27ae60] transition-all">
                  Salvar Objetivos
                </button>
              </div>
            </div>
          </section>

          {/* Preferências Alimentares */}
          <section>
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Restrições Alimentares</h3>
                  <p className="text-sm text-gray-600">Personalize seu plano</p>
                </div>
              </div>

              <div className="space-y-3">
                {Object.entries(restrictions).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="text-sm font-semibold text-gray-900 capitalize">
                      {key === "vegetarian" ? "Vegetariano" :
                       key === "vegan" ? "Vegano" :
                       key === "lactose" ? "Intolerância à Lactose" :
                       key === "gluten" ? "Intolerância ao Glúten" :
                       "Alergia a Nozes"}
                    </span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" checked={value} className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2ecc71]"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Notificações */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                  <Bell className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Notificações</h3>
                  <p className="text-sm text-gray-600">Gerencie seus lembretes</p>
                </div>
              </div>

              <div className="space-y-3">
                {Object.entries(notifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <span className="text-sm font-semibold text-gray-900 capitalize">
                      {key === "water" ? "Lembrete de Água" :
                       key === "meals" ? "Lembrete de Refeições" :
                       key === "workout" ? "Lembrete de Treino" :
                       key === "sleep" ? "Lembrete de Sono" :
                       "Mensagens Motivacionais"}
                    </span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={value}
                        onChange={() => setNotifications({...notifications, [key]: !value})}
                        className="sr-only peer" 
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Assinatura e Outras Opções */}
        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Assinatura */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Assinatura</h3>
                <p className="text-sm text-gray-600">Gerencie seu plano</p>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-900">Plano Atual</span>
                <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold">
                  {userInfo.plan}
                </span>
              </div>
              <p className="text-2xl font-bold text-blue-600 mb-1">R$ 19,90/mês</p>
              <p className="text-xs text-gray-600">Próxima cobrança: 15/02/2024</p>
            </div>

            <div className="space-y-2">
              <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all flex items-center justify-center gap-2">
                Upgrade para VIP
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="w-full py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all">
                Gerenciar Pagamento
              </button>
            </div>
          </div>

          {/* Segurança e Conta */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-gray-400 to-slate-500 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Conta e Segurança</h3>
                <p className="text-sm text-gray-600">Privacidade e dados</p>
              </div>
            </div>

            <div className="space-y-2">
              <button className="w-full py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all text-left px-4 flex items-center justify-between">
                <span>Alterar Senha</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="w-full py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all text-left px-4 flex items-center justify-between">
                <span>Privacidade e Dados</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="w-full py-3 border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all text-left px-4 flex items-center justify-between">
                <span>Termos de Uso</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="w-full py-3 border-2 border-red-200 text-red-600 rounded-xl font-semibold hover:bg-red-50 transition-all flex items-center justify-center gap-2 mt-4">
                <LogOut className="w-5 h-5" />
                Sair da Conta
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
