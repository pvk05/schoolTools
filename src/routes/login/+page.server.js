// src/routes/+page.server.ts
import { redirect } from '@sveltejs/kit'
//import type { PageServerLoad } from './$types'

export const load = async ({ url, locals: { getSession } }) => {
  const session = await getSession()

  // if the user is already logged in return them to the account page
  if (session) {
    redirect(303, '/minSide');
  }

  return { url: url.origin }
}
