<!-- src/routes/account/+page.svelte -->
<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import Avatar from './Avatar.svelte'

	export let data
	export let form

	let { session, supabase, profile } = data
	$: ({ session, supabase, profile } = data)

	let profileForm: HTMLFormElement
	let loading = false
	let fullName: string = profile?.full_name ?? ''
	let username: string = profile?.username ?? ''
	let website: string = profile?.website ?? ''
	let avatarUrl: string = profile?.avatar_url ?? ''

	const handleSubmit: SubmitFunction = () => {
		loading = true
		return async () => {
			loading = false
		}
	}

	const handleSignOut: SubmitFunction = () => {
		loading = true
		return async ({ update }) => {
			loading = false
			update()
		}
	}
</script>

<div class="form-widget bg-surface-200-700-token w-2/3 p-5 m-auto rounded">
	<form
		class="form-widget"
		method="post"
		action="?/update"
		use:enhance={handleSubmit}
		bind:this={profileForm}
	>

		<Avatar
			{supabase}
			bind:url={avatarUrl}
			size={10}
			on:upload={() => {
			  profileForm.requestSubmit();
			}}
  		  />

		<br>
		
		<div class="flex m-auto">
			<div class="m-auto w-full px-2">
				<label for="email">Email</label>
				<input id="email" type="text" value={session.user.email} disabled class=" input w-full h-8 text-lg bg-secondary-300-600-token p-2" />
			</div>
			
			<div class=" m-auto w-full ">
				<label for="fullName" class=" label">Full Name</label>
				<input id="fullName" name="fullName" type="text" value={form?.fullName ?? fullName} class=" input w-full h-8 text-lg bg-secondary-300-600-token p-2" />
			</div>
		</div>
		<br>
		<div class="flex m-auto">
			<div class="m-auto w-full px-2">
				<label for="username">Username</label>
				<input id="username" name="username" type="text" value={form?.username ?? username} class=" input w-full h-8 text-lg bg-secondary-300-600-token p-2" />
			</div>

			<div class="m-auto w-full px-2">
				<label for="website">Website</label>
				<input id="website" name="website" type="url" value={form?.website ?? website} class=" input w-full h-8 text-lg bg-secondary-300-600-token p-2" />
			</div>
		</div>
		<br>
		<div>
			<input
				type="submit"
				class="button block primary btn variant-ghost-primary"
				value={loading ? 'Loading...' : 'Update'}
				disabled={loading}
			/>
		</div>
	</form>
	<br>
	<form method="post" action="?/signout" use:enhance={handleSignOut}>
		<div>
			<button class="button btn block variant-ghost-primary" disabled={loading}>Sign Out</button>
		</div>
	</form>
</div>

<br>

<div class="form-widget bg-surface-200-700-token w-2/3 p-5 m-auto rounded">
	<h3 class="h3">Fagvalg</h3>
	<form action="">
		
	</form>
</div>