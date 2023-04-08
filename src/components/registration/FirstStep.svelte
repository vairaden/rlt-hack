<script>
  import { createEventDispatcher } from "svelte";

  export let inn = "";
  export let name = "";

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
    <label for="inn" class="label">
      <span class="label-text"> ИНН </span>
    </label>
    <input id="inn" type="text" class="input input-bordered" bind:value={inn} />
  </div>
  <div class="form-control">
    <label for="name" class="label">
      <span class="label-text"> Пароль </span>
    </label>
    <input
      id="name"
      type="name"
      class="input input-bordered"
      bind:value={name}
    />
  </div>

  <button type="submit" class="btn my-2">Зарегистрироваться</button>
</form>
