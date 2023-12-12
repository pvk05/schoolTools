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
        .select(`id, task, listName`)
        .eq('user_id', session.user.id)

    return { session, profile, fagValg, tasks }
}

export const actions = {
    addTask: async ({ request, locals: { supabase, getSession } }) => {
        const formData = await request.formData()
        const taskName = formData.get('taskName') //as string
        let listName = formData.get('listName')
        if(listName == "new") {
          listName = formData.get('newListName')
        }
    
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
  deleteTask: async ({ request, locals: { supabase, getSession } }) => {
      const formData = await request.formData()
      const taskId = formData.get('taskId') //as string
      const session = await getSession()
    
      const { data, error } = await supabase.from('todos').delete().match({ id: taskId, user_id: session?.user.id })
    
      if (error) {
        return fail(500, {
          id: taskId
        })
      }
    
      return {
          data
      }
  },
}