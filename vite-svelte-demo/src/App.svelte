<script>
  import logo from "./assets/svelte.png";
  import Example from "./Example.svelte";

</script>

<main>
  <div class="examples">
    <Example id="nested-components">
      <p>
        CSS is component-scoped by default — no more style collisions or
        specificity wars.
      </p>
    </Example>
  </div>
</main>

<style>

  :global(.back-light) {
    --text: hsl(36, 3%, 44%);
  }
  .examples {
    background: var(--second);
    color: white;
    overflow: hidden;
  }

  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

	main {
		position: relative;
		margin: 0 auto;
		/* padding: var(--nav-h) var(--side-nav) 0 var(--side-nav); */
		padding: var(--nav-h) 0 0 0;
		overflow-x: hidden;
	}

</style>
