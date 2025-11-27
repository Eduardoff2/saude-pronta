import { createClient } from '@supabase/supabase-js'

// Validação segura das variáveis de ambiente
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

// Verifica se as variáveis estão configuradas corretamente
const isValidUrl = supabaseUrl && supabaseUrl.startsWith('http') && !supabaseUrl.includes('your_supabase')
const isValidKey = supabaseAnonKey && supabaseAnonKey.length > 20 && !supabaseAnonKey.includes('your_supabase')
const isSupabaseConfigured = isValidUrl && isValidKey

// Cria cliente apenas se configurado corretamente
// Se não estiver configurado, retorna um objeto mock que não quebra a aplicação
export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : {
      auth: {
        signUp: async () => ({ data: null, error: { message: 'Supabase não configurado' } }),
        signInWithPassword: async () => ({ data: null, error: { message: 'Supabase não configurado' } }),
        signInWithOAuth: async () => ({ data: null, error: { message: 'Supabase não configurado' } }),
        signOut: async () => ({ error: null }),
        getUser: async () => ({ data: { user: null }, error: null }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      },
      from: () => ({
        select: () => ({ data: [], error: null }),
        insert: () => ({ data: null, error: { message: 'Supabase não configurado' } }),
        update: () => ({ data: null, error: { message: 'Supabase não configurado' } }),
        delete: () => ({ data: null, error: { message: 'Supabase não configurado' } }),
      }),
    } as any

// Flag para verificar se Supabase está configurado
export const isConfigured = isSupabaseConfigured
