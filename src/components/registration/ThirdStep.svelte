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
  class="card w-[28rem] bg-white p-12 my-4 shadow-md"
  on:submit|preventDefault={handleSubmit}
>
  <h1 class="text-5xl text-center mb-4">Регистрация</h1>
  <div class="form-control">
    <label style="display: none;">
      ИНН
      <input type="text" autocomplete="username" />
    </label>
    <label for="password" class="label">
      <span class="label-text"> Пароль </span>
    </label>
    <input
      id="password"
      type="password"
      autocomplete="current-password"
      placeholder="Введите пароль"
      class="input input-bordered bg-white"
      bind:value={password}
    />
  </div>
  <div class="form-control">
    <label for="repeatPassword" class="label">
      <span class="label-text"> Снова пароль </span>
    </label>
    <input
      id="repeatPassword"
      type="password"
      autocomplete="current-password"
      placeholder="Повторите пароль"
      class={clsx("input input-bordered bg-white", {
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
