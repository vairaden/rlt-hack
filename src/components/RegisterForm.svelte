<script>
  import { push } from "svelte-spa-router";
  import { user } from "../stores/user";
  import clsx from "clsx";

  let login = "";
  let password = "";
  let repeatPassword = "";
  $: matchError = password && repeatPassword && password !== repeatPassword;

  async function handleSubmit() {
    const res = await fetch("/register", {
      method: "post",
      body: JSON.stringify({
        login,
        password,
      }),
    });

    if (res.status === 200) {
      user.set({ username: login });
      push("#/");
    }
  }
</script>

<form
  class="card w-[24rem] bg-gray-50 p-8 shadow-md"
  on:submit|preventDefault={handleSubmit}
>
  <h1 class="text-5xl text-center">Регистрация</h1>
  <div class="form-control">
    <label for="login" class="label">
      <span class="label-text"> ИНН </span>
    </label>
    <input
      id="login"
      type="text"
      autocomplete="username"
      class="input input-bordered"
      bind:value={login}
    />
  </div>
  <div class="form-control">
    <label for="password" class="label">
      <span class="label-text"> Пароль </span>
    </label>
    <input
      id="password"
      type="password"
      autocomplete="current-password"
      class="input input-bordered"
      bind:value={password}
    />
  </div>
  <div class="form-control">
    <label for="password" class="label">
      <span class="label-text"> Повторите пароль </span>
    </label>
    <input
      id="password"
      type="password"
      autocomplete="current-password"
      class={clsx("input input-bordered", {
        "input-error": matchError,
      })}
      bind:value={repeatPassword}
    />
  </div>
  {#if matchError}
    <span class="label-text text-error"> Пароли не совпадают </span>
  {:else}
    <span class="h-5" />
  {/if}

  <button type="submit" class="btn my-2">Зарегистрироваться</button>
</form>
