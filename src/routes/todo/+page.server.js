//import { redirect } from '@sveltejs/kit'
import { fail } from '@sveltejs/kit'

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

    const { data: tasks } = await supabase
        .from('todos')
        .select(`task, listName`)
        .eq('user_id', session.user.id)

    return { session, profile, fagValg, tasks }
}

export const actions = {
    addTask: async ({ request, locals: { supabase, getSession } }) => {
        const formData = await request.formData()
        const taskName = formData.get('taskName') //as string
        const listName = formData.get('listName')
    
        const session = await getSession()
    
        const { data, error } = await supabase.from('todos').insert({
          user_id: session?.user.id,
          task: taskName,
          inserted_at: new Date(),
          listName: listName
        }).select()
    
        if (error) {
          return fail(500, {
            user_id: session?.user.id,
            task: taskName,
            inserted_at: new Date(),
            listName: listName
          })
        }
    
        return {
            data
        }
      },
}