'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function OnboardingPage() {
  const router = useRouter()

  useEffect(() => {
    // Limpar progresso anterior
    localStorage.removeItem('onboarding-progress')
    // Marcar como concluído
    localStorage.setItem('onboarding_completed', 'true')
    // Redirecionar para dashboard
    router.push('/dashboard')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Finalizando configuração...</p>
      </div>
    </div>
  )
}