<script>
  import { push } from "svelte-spa-router";
  import { user } from "../../stores/user";
  import clsx from "clsx";
  import { register } from "../../api";

  let username = "";
  let password = "";
  let repeatPassword = "";
  $: matchError = password && repeatPassword && password !== repeatPassword;

  async function handleSubmit() {
    const res = await register(username, password);

    if (res.status === 200) {
      user.set({ username });
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
    <label for="username" class="label">
      <span class="label-text"> ИНН </span>
    </label>
    <input
      id="username"
      type="text"
      autocomplete="username"
      class="input input-bordered"
      bind:value={username}
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
