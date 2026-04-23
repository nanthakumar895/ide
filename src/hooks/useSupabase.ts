import { useAuth } from '@clerk/clerk-react'
import { createClerkSupabaseClient } from '../lib/supabase'

export const useSupabase = () => {
  const { getToken } = useAuth()

  const getClient = async () => {
    const token = await getToken({ template: 'supabase' })
    if (!token) return null
    return createClerkSupabaseClient(token)
  }

  return { getClient }
}
