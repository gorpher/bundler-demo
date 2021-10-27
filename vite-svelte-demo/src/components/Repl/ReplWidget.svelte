<script>
  import Repl from "@sveltejs/svelte-repl";
  import { onMount } from "svelte";

  import { process_example } from "../../utils/examples";
  import InputOutputToggle from "./InputOutputToggle.svelte";

  export let version = "3";
  export let embedded = false;

  let repl;
  let name = "loading...";
  let width = window.innerWidth - 32;

  let checked = false;

  onMount(() => {
    if (version !== "local") {
      fetch(`https://unpkg.com/svelte@${version}/package.json`)
        .then((r) => r.json())
        .then((pkg) => {
          version = pkg.version;
        });
    }
	repl.set({
        components: [{
          name: "App",
          type: "svelte",
          source: "<h1>Hello world!</h1>",
        }],
      });
  });

  $: if (embedded) document.title = `${name} • Svelte REPL`;

  $: svelteUrl = `https://unpkg.com/svelte@${version}`;

  const rollupUrl = `https://unpkg.com/rollup@1/dist/rollup.browser.js`;

  $: mobile = width < 560;
</script>

<div class="repl-outer" bind:clientWidth={width} class:mobile>
  <div class="viewport" class:offset={checked}>
    <Repl
      bind:this={repl}
      workersUrl="workers"
      fixed={mobile}
      {svelteUrl}
      embedded
      relaxed
    />
  </div>

  {#if mobile}
    <InputOutputToggle bind:checked />
  {/if}
</div>

<style>
  .repl-outer {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--back);
    overflow: hidden;
    box-sizing: border-box;
    --pane-controls-h: 4.2rem;
  }

  .viewport {
    width: 100%;
    height: 100%;
    flex: 1;
  }

  .mobile .viewport {
    width: 200%;
    height: calc(100% - 42px);
    transition: transform 0.3s;
  }

  .mobile .offset {
    transform: translate(-50%, 0);
  }
</style>
