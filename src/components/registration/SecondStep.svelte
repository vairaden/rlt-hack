<script>
  import { createEventDispatcher } from "svelte";

  export let position = "";
  export let document = null;

  const dispatch = createEventDispatcher();
  function handleSubmit() {
    dispatch("filled");
  }
</script>

<form
  class="card w-[28rem] bg-white p-12 my-4 shadow-sm"
  on:submit|preventDefault={handleSubmit}
>
  <h1 class="text-5xl text-center mb-4">Регистрация</h1>
  <div class="form-control">
    <label for="username" class="label">
      <span class="label-text"> Должность </span>
    </label>
    <input
      id="username"
      type="text"
      autocomplete="username"
      placeholder="Введите вашу должность"
      class="input input-bordered bg-white"
      bind:value={position}
    />
  </div>
  <div class="form-control">
    <label for="password" class="label">
      <span class="label-text"> Трудовая книжка </span>
    </label>
    <input
      id="password"
      type="file"
      autocomplete="current-password"
      class="file-input file-input-bordered bg-white"
      bind:value={document}
    />
  </div>
  <button type="submit" class="btn my-4">Далее</button>
</form>
<a href="#/login" class="text-primary block text-center my-8"
  >У меня уже есть профиль</a
>
