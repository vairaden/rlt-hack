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
  class="card w-[28rem] bg-gray-50 p-12 my-4 shadow-md"
  on:submit|preventDefault={handleSubmit}
>
  <h1 class="text-5xl text-center mb-4">Регистрация</h1>
  <div class="form-control">
    <label for="inn" class="label">
      <span class="label-text"> ИНН </span>
    </label>
    <input
      id="inn"
      type="text"
      placeholder="Введите ИНН"
      class="input input-bordered"
      bind:value={inn}
    />
  </div>
  <div class="form-control">
    <label for="name" class="label">
      <span class="label-text"> ФИО </span>
    </label>
    <input
      placeholder="Введите ваше ФИО"
      id="name"
      type="name"
      class="input input-bordered"
      bind:value={name}
    />
  </div>

  <button type="submit" class="btn my-4">Далее</button>
</form>
<a href="#/login" class="text-primary block text-center my-8"
  >У меня уже есть профиль</a
>
