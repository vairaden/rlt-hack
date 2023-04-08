<script lang="ts">
  import { location, push } from "svelte-spa-router";
  import clsx from "clsx";
  import { user } from "../stores/user";

  const routes = [
    {
      href: "/",
      text: "Поиск",
    },
  ];

  async function handleLogout() {
    user.set(null);
    push("#/");
  }
</script>

<header class="fixed top-0 left-0 bg-white shadow-sm w-full">
  <nav class="navbar">
    <div class="navbar-start">Logo</div>
    <div class="tabs navbar-center">
      {#each routes as route}
        <a
          class={clsx("tab tab-bordered", {
            "tab-active": $location === route.href,
          })}
          href={"#" + route.href}>{route.text}</a
        >
      {/each}
    </div>
    <div class="navbar-end">
      {#if $user}
        <button class="btn btn-ghost" on:click={handleLogout}>Выйти</button>
      {:else}
        <a class="btn btn-ghost" href="#/login">Войти</a>
      {/if}
    </div>
  </nav>
</header>
