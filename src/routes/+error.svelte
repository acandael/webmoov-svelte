<script lang="ts">
	import { page } from '$app/stores';
</script>

<main>
	<div>
		<h1>
			{$page.error?.message || 'Something went wrong'}
		</h1>
		<p>
			Sorry, {$page.status === 404
				? 'we couldn’t find the page you’re looking for'
				: 'the page you were looking for encountered an error'}.
		</p>
		<div>
			<a href="/">
				Go back home<span aria-hidden="true"> &rarr;</span>
			</a>
		</div>
	</div>
</main>
