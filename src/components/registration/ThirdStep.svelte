<script>
  import clsx from "clsx";
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
  class="card w-[28rem] bg-gray-50 p-12 my-4 shadow-md"
  on:submit|preventDefault={handleSubmit}
>
  <h1 class="text-5xl text-center mb-4">Регистрация</h1>
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
      <span class="label-text"> Снова пароль </span>
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
  {/if}

  <button type="submit" class="btn my-4">Далее</button>
</form>
<a href="#/login" class="text-primary block text-center my-8"
  >У меня уже есть профиль</a
>
