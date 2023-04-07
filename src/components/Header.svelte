<script lang="ts">
  import { location, push } from "svelte-spa-router";
  import clsx from "clsx";
  import { user } from "../stores/user";

  const routes = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/details",
      text: "Details",
    },
  ];

  async function handleLogout() {
    user.set(null);
    push("#/");
  }
</script>

<header class="fixed top-0 left-0 bg-white w-full">
  <nav class="navbar">
    <div class="tabs navbar-start">
      {#each routes as route}
        <a
          class={clsx("tab tab-bordered", {
            "tab-active": $location === route.href,
          })}
          href={"#" + route.href}>{route.text}</a
        >
      {/each}
    </div>
    <div class="navbar-center">
      <input class="input input-bordered" />
    </div>
    <div class="navbar-end">
      {#if $user}
        <button class="btn" on:click={handleLogout}>Выйти</button>
      {:else}
        <a class="btn" href="#/login">Войти</a>
      {/if}
    </div>
  </nav>
</header>
