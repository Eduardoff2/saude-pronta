"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Dumbbell, 
  Play,
  RefreshCw,
  Clock,
  Flame,
  Target,
  TrendingUp,
  CheckCircle2
} from "lucide-react";

export default function TreinoPage() {
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);

  const workoutPlan = {
    title: "Treino de Força - Peito e Tríceps",
    duration: "45 minutos",
    calories: 320,
    difficulty: "Intermediário",
    exercises: [
      {
        id: 1,
        name: "Supino Reto com Halteres",
        sets: 4,
        reps: "10-12",
        rest: "60s",
        tips: "Mantenha os cotovelos em ângulo de 45° e controle o movimento na descida.",
        videoUrl: "#",
      },
      {
        id: 2,
        name: "Supino Inclinado",
        sets: 3,
        reps: "12",
        rest: "60s",
        tips: "Foque na contração do peitoral superior. Desça a barra até o peito.",
        videoUrl: "#",
      },
      {
        id: 3,
        name: "Crucifixo com Halteres",
        sets: 3,
        reps: "15",
        rest: "45s",
        tips: "Mantenha uma leve flexão nos cotovelos e sinta o alongamento do peitoral.",
        videoUrl: "#",
      },
      {
        id: 4,
        name: "Tríceps Testa",
        sets: 3,
        reps: "12",
        rest: "45s",
        tips: "Mantenha os cotovelos fixos e próximos. Movimento controlado.",
        videoUrl: "#",
      },
      {
        id: 5,
        name: "Tríceps Corda",
        sets: 3,
        reps: "15",
        rest: "45s",
        tips: "Abra a corda no final do movimento para máxima contração.",
        videoUrl: "#",
      },
      {
        id: 6,
        name: "Flexão Diamante",
        sets: 3,
        reps: "até a falha",
        rest: "60s",
        tips: "Mãos juntas formando um diamante. Ótimo para finalizar o treino.",
        videoUrl: "#",
      },
    ],
  };

  const quickWorkouts = [
    {
      name: "Treino Rápido 10min",
      duration: "10 min",
      exercises: 5,
      icon: "⚡",
    },
    {
      name: "Treino Cardio",
      duration: "20 min",
      exercises: 8,
      icon: "🏃",
    },
    {
      name: "Alongamento",
      duration: "15 min",
      exercises: 10,
      icon: "🧘",
    },
  ];

  const toggleExercise = (id: number) => {
    setCompletedExercises(prev => 
      prev.includes(id) 
        ? prev.filter(exerciseId => exerciseId !== id)
        : [...prev, id]
    );
  };

  const progress = (completedExercises.length / workoutPlan.exercises.length) * 100;

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
                  Treino Diário
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Seu treino personalizado de hoje
                </p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-[#3498db] text-white rounded-xl hover:bg-[#2980b9] transition-colors">
              <RefreshCw className="w-5 h-5" />
              <span className="hidden sm:inline">Trocar Treino</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Informações do Treino */}
        <section className="mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold mb-2">{workoutPlan.title}</h2>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{workoutPlan.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Flame className="w-4 h-4" />
                    <span>{workoutPlan.calories} calorias</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    <span>{workoutPlan.difficulty}</span>
                  </div>
                </div>
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Dumbbell className="w-8 h-8" />
              </div>
            </div>

            {/* Barra de Progresso */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold">Progresso do Treino</span>
                <span className="text-sm">{completedExercises.length}/{workoutPlan.exercises.length} exercícios</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-3">
                <div 
                  className="bg-white h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* Exercícios */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Exercícios</h3>
          
          <div className="space-y-4">
            {workoutPlan.exercises.map((exercise, index) => {
              const isCompleted = completedExercises.includes(exercise.id);
              
              return (
                <div
                  key={exercise.id}
                  className={`bg-white rounded-2xl shadow-sm hover:shadow-md transition-all ${
                    isCompleted ? 'border-2 border-green-500' : ''
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Número do Exercício */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0 ${
                        isCompleted 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : index + 1}
                      </div>

                      {/* Informações do Exercício */}
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{exercise.name}</h4>
                        
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <TrendingUp className="w-4 h-4 text-[#3498db]" />
                            <span><strong>{exercise.sets}</strong> séries</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Target className="w-4 h-4 text-[#2ecc71]" />
                            <span><strong>{exercise.reps}</strong> repetições</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-orange-500" />
                            <span><strong>{exercise.rest}</strong> descanso</span>
                          </div>
                        </div>

                        <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-xl mb-4">
                          💡 <strong>Dica:</strong> {exercise.tips}
                        </p>

                        <div className="flex gap-3">
                          <button 
                            onClick={() => toggleExercise(exercise.id)}
                            className={`flex-1 py-2 px-4 rounded-xl font-semibold transition-colors ${
                              isCompleted
                                ? 'bg-green-500 text-white hover:bg-green-600'
                                : 'bg-[#2ecc71] text-white hover:bg-[#27ae60]'
                            }`}
                          >
                            {isCompleted ? '✓ Concluído' : 'Marcar como Concluído'}
                          </button>
                          <button className="px-4 py-2 border-2 border-gray-200 rounded-xl hover:border-[#3498db] hover:text-[#3498db] transition-colors flex items-center gap-2">
                            <Play className="w-5 h-5" />
                            <span className="hidden sm:inline">Vídeo</span>
                          </button>
                          <button className="p-2 border-2 border-gray-200 rounded-xl hover:border-[#2ecc71] hover:text-[#2ecc71] transition-colors">
                            <RefreshCw className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Treinos Rápidos */}
        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Treinos Rápidos</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickWorkouts.map((workout, index) => (
              <button
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all text-left group"
              >
                <div className="text-4xl mb-3">{workout.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#3498db] transition-colors">
                  {workout.name}
                </h4>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>{workout.duration}</span>
                  <span>•</span>
                  <span>{workout.exercises} exercícios</span>
                </div>
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
