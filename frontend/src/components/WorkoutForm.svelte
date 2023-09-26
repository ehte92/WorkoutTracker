<script lang="ts">
	let title: string = '';
	let reps: number = 0;
	let load: number = 0;
	let error: string = '';
	let emptyField: Array<string> = [];

	const addWorkout = async (e: Event) => {
		const workout = { title, reps, load };

		const res = await fetch('http://localhost:4000/api/workouts', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(workout)
		});

		const data = await res.json();

		if (!res.ok) {
			error = data.error;
			emptyField = data.emptyFields;
		}
		if (res.ok) {
			error = '';
			title = '';
			reps = 0;
			load = 0;
			emptyField = [];
			console.log('New workout added', data);
			window.location.reload();
		}
	};
</script>

<form on:submit|preventDefault={addWorkout} class="create">
	<h3>Add a New Workout</h3>

	<label for="title-input">Exercise Title</label>
	<input
		type="text"
		id="title-input"
		bind:value={title}
		class={emptyField?.includes('title') ? 'error' : ''}
	/>

	<label for="reps-input">Reps</label>
	<input
		type="number"
		id="reps-input"
		bind:value={reps}
		class={emptyField?.includes('reps') ? 'error' : ''}
	/>

	<label for="load-input">Load (in kg)</label>
	<input
		type="number"
		id="load-input"
		bind:value={load}
		class={emptyField?.includes('load') ? 'error' : ''}
	/>

	<button type="submit">Add Workout</button>

	{#if error}
		<div class="error">{error}</div>
	{/if}
</form>
