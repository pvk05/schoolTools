import { fail, redirect } from '@sveltejs/kit'

export const load = async ({ locals: { supabase, getSession } }) => {
  const session = await getSession()

  if (!session) {
    throw redirect(303, '/login')
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

export const actions = {
  update: async ({ request, locals: { supabase, getSession } }) => {
    const formData = await request.formData()
    const fullName = formData.get('fullName') //as string
    const username = formData.get('username') //as string
    const website = formData.get('website') //as string
    const avatarUrl = formData.get('avatarUrl') //as string

    const session = await getSession()

    const { error } = await supabase.from('profiles').upsert({
      id: session?.user.id,
      full_name: fullName,
      username,
      website,
      avatar_url: avatarUrl,
      updated_at: new Date(),
    })

    if (error) {
      return fail(500, {
        fullName,
        username,
        website,
        avatarUrl,
      })
    }

    return {
      fullName,
      username,
      website,
      avatarUrl,
    }
  },
  signout: async ({ locals: { supabase, getSession } }) => {
    const session = await getSession()
    if (session) {
      await supabase.auth.signOut()
      throw redirect(303, '/')
    }
  },
  fagValg: async ({request,  locals: { supabase, getSession } }) => {
    const session = await getSession()
    
    const formData = await request.formData()
    const blokkA = formData.get('blokkA')
    const blokkB = formData.get('blokkB')
    const blokkC = formData.get('blokkC')
    const blokkD = formData.get('blokkD')

    const { error } = await supabase.from('fagValg').upsert({
      user_id: session?.user.id,
      created_at: new Date(),
      blokkA: blokkA,
      blokkB: blokkB,
      blokkC: blokkC,
      blokkD: blokkD
    })

    if(error) {
      return fail(500, {
        blokkA,
        blokkB,
        blokkC,
        blokkD
      })
    }

    return {
      blokkA,
      blokkB,
      blokkC,
      blokkD
    }
  },
}
