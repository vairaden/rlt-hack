<script>
  import { push } from "svelte-spa-router";
  import { user } from "../../stores/user";
  import clsx from "clsx";
  import { register } from "../../api";
  import { createEventDispatcher } from "svelte";

  export let password = "";
  let repeatPassword = "";
  $: matchError = password && repeatPassword && password !== repeatPassword;

  const dispatch = createEventDispatcher();
  function handleSubmit() {
    dispatch("filled");
  }
</script>

<form
  class="card w-[24rem] bg-gray-50 p-8 shadow-md"
  on:submit|preventDefault={handleSubmit}
>
  <h1 class="text-5xl text-center">Регистрация</h1>
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
