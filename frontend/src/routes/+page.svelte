<script lang="ts">
	import { onMount } from 'svelte';
	import WorkoutDetails from '../components/WorkoutDetails.svelte';
	import WorkoutForm from '../components/WorkoutForm.svelte';
	import fetchStore from '../store/fetch';

	let url = 'http://localhost:4000/api/workouts';
	const [data, loading, error, get] = fetchStore(url);

	onMount(() => {
		get();
	});
</script>

<div class="home">
	<div class="workouts">
		{#if $loading}
			Loading: {$loading}
		{:else if $error}
			Error: {$error}
		{:else}
			{#each $data as workout}
				<WorkoutDetails {workout} />
			{/each}
		{/if}
	</div>
	<WorkoutForm />
</div>
