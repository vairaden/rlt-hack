<script lang="ts">
  import "./app.css";
  import Router, { push } from "svelte-spa-router";
  import { wrap } from "svelte-spa-router/wrap";
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import { onMount } from "svelte";
  import { user } from "./stores/user";

  const USE_MSW = true;

  function conditionsFailed() {
    push("#/login");
  }

  const routes = {
    "/": wrap({
      asyncComponent: () => import("./pages/Home.svelte"),
    }),
    "/details/:id": wrap({
      asyncComponent: () => import("./pages/Details.svelte"),
      conditions: [() => $user !== null],
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
  <div class="pt-16 min-h-screen flex flex-col justify-between">
    <main class="p-4">
      <Router {routes} on:conditionsFailed={conditionsFailed} />
    </main>
    <Footer />
  </div>
{/if}
