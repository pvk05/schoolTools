//import { redirect } from '@sveltejs/kit'

export const load = async ({ locals: { supabase, getSession } }) => {
    const session = await getSession()

    if (!session) {
        return {}
    }

    const { data: profile } = await supabase
        .from('profiles')
        .select(`username, full_name, website, avatar_url`)
        .eq('id', session.user.id)
        .single()

    const { data: fagValg } = await supabase
        .from('fagValg')
        .select(`blokkA, blokkB, blokkC, blokkD`)
        .eq('user_id', session.user.id)
        .single()

    return { session, profile, fagValg }
}