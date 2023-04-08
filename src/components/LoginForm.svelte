<script>
  import { pop } from "svelte-spa-router";
  import { user } from "../stores/user";
  import { login } from "../api";

  let username = "";
  let password = "";

  async function handleSubmit() {
    // const res = await login(username, password);

    // if (res.status === 200) {
    user.set({ username: "vai" });
    pop();
    // }
  }
</script>

<form
  class="card w-[28rem] bg-gray-50 p-12 my-4 shadow-md"
  on:submit|preventDefault={handleSubmit}
>
  <h1 class="text-5xl text-center mb-4">Вход</h1>
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
  <a href="#/login" class="text-primary">Восстановить пароль</a>
  <button type="submit" class="btn my-4">Войти</button>
</form>
<a href="#/register" class="text-primary block text-center my-8"
  >Зарегистрироваться</a
>
