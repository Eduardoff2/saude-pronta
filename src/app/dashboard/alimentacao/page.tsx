"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Coffee, 
  Sun, 
  Moon, 
  Apple,
  RefreshCw,
  ShoppingCart,
  ChefHat,
  Clock,
  Flame,
  Check
} from "lucide-react";

export default function AlimentacaoPage() {
  const [selectedMeal, setSelectedMeal] = useState<string | null>(null);

  const meals = [
    {
      id: "cafe",
      name: "Café da Manhã",
      time: "07:00 - 09:00",
      icon: Coffee,
      color: "from-amber-400 to-orange-500",
      calories: 450,
      items: [
        "2 fatias de pão integral",
        "2 ovos mexidos",
        "1 banana",
        "200ml de suco de laranja",
        "1 colher de pasta de amendoim"
      ],
      recipe: "Aqueça uma frigideira antiaderente. Bata os ovos com sal e pimenta. Cozinhe em fogo baixo mexendo sempre. Torrar o pão e passar a pasta de amendoim.",
      completed: true,
    },
    {
      id: "almoco",
      name: "Almoço",
      time: "12:00 - 14:00",
      icon: Sun,
      color: "from-green-400 to-emerald-500",
      calories: 650,
      items: [
        "150g de peito de frango grelhado",
        "1 xícara de arroz integral",
        "1 xícara de brócolis no vapor",
        "Salada verde com azeite",
        "1 maçã de sobremesa"
      ],
      recipe: "Tempere o frango com alho, sal e limão. Grelhe por 6-8 minutos de cada lado. Cozinhe o arroz integral por 40 minutos. Cozinhe o brócolis no vapor por 5 minutos.",
      completed: false,
    },
    {
      id: "jantar",
      name: "Jantar",
      time: "19:00 - 21:00",
      icon: Moon,
      color: "from-purple-400 to-indigo-500",
      calories: 550,
      items: [
        "150g de salmão assado",
        "Batata doce assada (200g)",
        "Aspargos grelhados",
        "Salada de folhas verdes",
        "Chá verde"
      ],
      recipe: "Tempere o salmão com limão, alho e ervas. Asse a 180°C por 15 minutos. Asse a batata doce por 40 minutos. Grelhe os aspargos com azeite por 5 minutos.",
      completed: false,
    },
    {
      id: "lanche",
      name: "Lanches",
      time: "Entre refeições",
      icon: Apple,
      color: "from-pink-400 to-rose-500",
      calories: 200,
      items: [
        "1 iogurte grego natural",
        "Mix de castanhas (30g)",
        "1 fruta da estação",
        "Barra de cereal integral"
      ],
      recipe: "Consuma os lanches entre as refeições principais para manter o metabolismo ativo. Escolha frutas da estação e castanhas sem sal.",
      completed: false,
    },
  ];

  const shoppingList = [
    "Pão integral",
    "Ovos",
    "Bananas",
    "Laranjas",
    "Pasta de amendoim",
    "Peito de frango",
    "Arroz integral",
    "Brócolis",
    "Folhas verdes",
    "Maçãs",
    "Salmão",
    "Batata doce",
    "Aspargos",
    "Iogurte grego",
    "Castanhas",
    "Barras de cereal"
  ];

  const totalCalories = meals.reduce((sum, meal) => sum + meal.calories, 0);

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
                  Plano Alimentar
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Suas refeições personalizadas de hoje
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-right mr-4">
                <p className="text-sm text-gray-600">Total de Calorias</p>
                <p className="text-2xl font-bold text-[#2ecc71]">{totalCalories}</p>
              </div>
              <Flame className="w-8 h-8 text-orange-500" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Refeições */}
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {meals.map((meal) => {
              const Icon = meal.icon;
              const isSelected = selectedMeal === meal.id;
              
              return (
                <div
                  key={meal.id}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  {/* Card Header */}
                  <div className={`bg-gradient-to-r ${meal.color} rounded-t-2xl p-6 text-white`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{meal.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{meal.time}</span>
                          </div>
                        </div>
                      </div>
                      {meal.completed && (
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                          <Check className="w-5 h-5 text-green-500" />
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <Flame className="w-5 h-5" />
                      <span className="font-semibold">{meal.calories} calorias</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Ingredientes:</h4>
                    <ul className="space-y-2 mb-4">
                      {meal.items.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-[#2ecc71] mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {isSelected && (
                      <div className="mt-4 p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-2 mb-2">
                          <ChefHat className="w-5 h-5 text-[#2ecc71]" />
                          <h4 className="font-semibold text-gray-900">Modo de Preparo:</h4>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">{meal.recipe}</p>
                      </div>
                    )}

                    <div className="flex gap-3 mt-4">
                      <button
                        onClick={() => setSelectedMeal(isSelected ? null : meal.id)}
                        className="flex-1 py-2 px-4 bg-[#2ecc71] text-white rounded-xl hover:bg-[#27ae60] transition-colors text-sm font-semibold"
                      >
                        {isSelected ? "Ocultar Receita" : "Ver Receita"}
                      </button>
                      <button className="p-2 border-2 border-gray-200 rounded-xl hover:border-[#2ecc71] hover:text-[#2ecc71] transition-colors">
                        <RefreshCw className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Lista de Compras */}
        <section>
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Lista de Compras Semanal</h2>
                <p className="text-sm text-gray-600">Ingredientes necessários para a semana</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {shoppingList.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="w-5 h-5 border-2 border-gray-300 rounded"></div>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-all font-semibold">
              Exportar Lista (PDF)
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
