<script lang="ts">
	import { formatDistanceToNow } from 'date-fns';
	interface Workout {
		_id: string;
		title: string;
		reps: number;
		load: number;
		createdAt: string;
		updatedAt: string;
		__v: number;
	}

	export let workout: Workout = {
		_id: '',
		title: '',
		reps: 0,
		load: 0,
		createdAt: '',
		updatedAt: '',
		__v: 0
	};

	const handleClick = async () => {
		const res = await fetch(`http://localhost:4000/api/workouts/${workout._id}`, {
			method: 'DELETE'
		});

		const data = await res.json();

		if (!res.ok) {
			console.log(data.error);
		}
		if (res.ok) {
			console.log('Workout deleted', data);
			window.location.reload();
		}
	};
</script>

<div class="workout-details">
	<h4>{workout.title}</h4>
	<p><strong>Load (kg):</strong>{workout.load}</p>
	<p><strong>Reps (kg):</strong>{workout.reps}</p>
	<p>
		{formatDistanceToNow(new Date(workout.createdAt), {
			addSuffix: true
		})}
	</p>
	<span class="material-symbols-outlined" on:click={handleClick}>delete</span>
</div>
