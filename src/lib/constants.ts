// Constantes do Saúde Pronta

export const BRAND = {
  name: "Saúde Pronta",
  tagline: "Sua Saúde Pronta Todos os Dias — Sem Esforço.",
  description: "Assistente diário inteligente de saúde que entrega tudo pronto: alimentação, treinos, água, rotina, sono e muito mais.",
};

export const COLORS = {
  primary: "#2ecc71", // Verde - saúde, energia
  secondary: "#3498db", // Azul - confiança
  success: "#27ae60",
  warning: "#f39c12",
  danger: "#e74c3c",
};

export const PLANS = {
  basic: {
    name: "Básico",
    price: "9,90",
    period: "mês",
    color: "bg-[#2ecc71]",
    features: [
      "Treino diário simples",
      "Plano de alimentação básico",
      "Controle de água",
      "Medidor de passos manual",
      "Check-in diário simples",
      "Resumo semanal básico",
      "3 análises de prato por mês",
    ],
    notIncluded: [
      "Lista de compras",
      "Substituições inteligentes",
      "Treino avançado",
      "Relatórios completos",
      "Meditação guiada",
    ],
  },
  premium: {
    name: "Premium",
    price: "19,90",
    period: "mês",
    color: "bg-[#3498db]",
    popular: true,
    features: [
      "Tudo do Básico +",
      "Treinos completos",
      "Refeições detalhadas",
      "Substituições automáticas",
      "Lista de compras semanal",
      "Controle de sono",
      "Controle de humor",
      "Meditações guiadas",
      "Notificações inteligentes",
      "Relatórios completos",
      "Exportação PDF",
      "30 análises de prato por mês",
      "Gráficos de progresso avançados",
      "Receitas personalizadas",
    ],
  },
  vip: {
    name: "VIP",
    price: "39,90",
    period: "mês",
    color: "bg-gradient-to-r from-[#f39c12] to-[#e74c3c]",
    features: [
      "Tudo do Premium +",
      "Análise ilimitada de calorias por foto",
      "Treino completo com vídeo IA",
      "Planos mensais personalizados (PDF)",
      "Assistente motivacional de voz diário",
      "Alertas de saúde recomendados pela IA",
      "Suporte prioritário",
      "Modo família: +2 usuários grátis",
      "Chat IA ilimitado sobre saúde",
      "Revisão completa semanal com sugestões",
    ],
  },
};

export const FEATURES = [
  {
    icon: "Utensils",
    title: "Plano Alimentar Completo",
    description: "Refeições personalizadas para cada momento do dia, com receitas detalhadas e lista de compras automática.",
  },
  {
    icon: "Dumbbell",
    title: "Treinos Personalizados",
    description: "Exercícios adaptados ao seu objetivo, com vídeos, séries e repetições. Troque exercícios com 1 clique.",
  },
  {
    icon: "Droplet",
    title: "Controle de Hidratação",
    description: "Acompanhe sua meta diária de água com lembretes inteligentes e estatísticas semanais.",
  },
  {
    icon: "Camera",
    title: "Análise de Calorias por Foto",
    description: "Tire foto do prato e a IA reconhece os alimentos e calcula as calorias automaticamente.",
  },
  {
    icon: "Moon",
    title: "Monitor de Sono",
    description: "Registre suas horas de sono, defina metas e receba dicas para melhorar sua rotina noturna.",
  },
  {
    icon: "Heart",
    title: "Bem-estar Emocional",
    description: "Check-in diário de humor, exercícios de respiração e meditações guiadas para seu equilíbrio.",
  },
  {
    icon: "TrendingUp",
    title: "Acompanhamento de Progresso",
    description: "Gráficos detalhados de peso, calorias, treinos e ranking semanal de hábitos saudáveis.",
  },
  {
    icon: "Sparkles",
    title: "Inteligência Artificial",
    description: "IA gera planos diários, mensagens motivacionais, relatórios e sugestões personalizadas para você.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Maria Silva",
    role: "Perdeu 8kg em 3 meses",
    avatar: "MS",
    content: "O Saúde Pronta mudou minha vida! Tudo fica mais fácil quando você tem um plano pronto todos os dias. Recomendo demais!",
    rating: 5,
  },
  {
    name: "João Santos",
    role: "Ganhou massa muscular",
    avatar: "JS",
    content: "Os treinos personalizados são incríveis. A IA entende exatamente o que eu preciso e adapta tudo ao meu ritmo.",
    rating: 5,
  },
  {
    name: "Ana Costa",
    role: "Melhorou qualidade do sono",
    avatar: "AC",
    content: "Nunca imaginei que controlar minha rotina seria tão simples. O app me ajudou a criar hábitos saudáveis de verdade.",
    rating: 5,
  },
];

export const NAVIGATION = [
  { name: "Início", href: "/" },
  { name: "Recursos", href: "#recursos" },
  { name: "Planos", href: "#planos" },
  { name: "Depoimentos", href: "#depoimentos" },
];
