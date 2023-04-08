<script>
  import { push } from "svelte-spa-router";
  import { user } from "../../stores/user";
  import clsx from "clsx";
  import { register } from "../../api";
  import { createEventDispatcher } from "svelte";

  export let position = "";
  export let document = null;

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
    <label for="username" class="label">
      <span class="label-text"> ИНН </span>
    </label>
    <input
      id="username"
      type="text"
      autocomplete="username"
      class="input input-bordered"
      bind:value={position}
    />
  </div>
  <div class="form-control">
    <label for="password" class="label">
      <span class="label-text"> Пароль </span>
    </label>
    <input
      id="password"
      type="file"
      autocomplete="current-password"
      class="input input-bordered"
      bind:value={document}
    />
  </div>
  <button type="submit" class="btn my-2">Зарегистрироваться</button>
</form>
