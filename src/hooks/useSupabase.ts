import { useAuth } from '@clerk/clerk-react'
import { createClerkSupabaseClient } from '../lib/supabase'

export const useSupabase = () => {
  const { getToken } = useAuth()

  const getClient = async () => {
    try {
      // Try to get the JWT. If 'supabase' template isn't configured, this might fail.
      // We'll fall back to the default client if we can't get a custom token.
      const token = await getToken({ template: 'supabase' }).catch(() => null);
      if (!token) return null;
      return createClerkSupabaseClient(token);
    } catch (e) {
      console.error('Failed to get Supabase client:', e);
      return null;
    }
  }

  return { getClient }
}
