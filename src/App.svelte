<script lang="ts">
  import "./app.css";
  import Router, { push } from "svelte-spa-router";
  import { wrap } from "svelte-spa-router/wrap";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import { onMount } from "svelte";
  import { user } from "./stores/user";

  const USE_MSW = false;

  function conditionsFailed() {
    push("#/login");
  }

  const routes = {
    "/": wrap({
      asyncComponent: () => import("./pages/Home.svelte"),
    }),
    "/details/:inn": wrap({
      asyncComponent: () => import("./pages/Details.svelte"),
      // conditions: [() => $user !== null],
    }),
    "/product/:id": wrap({
      asyncComponent: () => import("./pages/Product.svelte"),
      // conditions: [() => $user !== null],
    }),
    "/login": wrap({
      asyncComponent: () => import("./pages/Login.svelte"),
    }),
    "/register": wrap({
      asyncComponent: () => import("./pages/Register.svelte"),
    }),
  };

  let ready = !(USE_MSW && import.meta.env.DEV);

  onMount(async () => {
    if (USE_MSW && import.meta.env.DEV) {
      const { worker } = await import("./mocks/worker");
      await worker.start({ onUnhandledRequest: "bypass" });
      ready = true;
    }
  });
</script>

{#if ready}
  <Header />
  <main class="pt-16 p-4 max-w-[1440px]">
    <Router {routes} on:conditionsFailed={conditionsFailed} />
  </main>
  <!-- <Footer /> -->
{/if}

<style>
  :global(html, body) {
    font-family: "Exo 2", sans-serif;
    max-width: 100%;
    overflow-x: hidden;
  }
  main {
    height: max(1080px, 100vh - 4rem);
  }
</style>
