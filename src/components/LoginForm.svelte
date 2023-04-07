<script>
  import { pop } from "svelte-spa-router";
  import { user } from "../stores/user";

  let login = "";
  let password = "";

  async function handleSubmit() {
    const res = await fetch("/login", {
      method: "post",
      body: JSON.stringify({
        login,
        password,
      }),
    });

    if (res.status === 200) {
      user.set({ username: login });
      pop();
    }
  }
</script>

<form
  class="card w-[24rem] bg-gray-50 p-8 shadow-md"
  on:submit|preventDefault={handleSubmit}
>
  <h1 class="text-5xl text-center">Вход</h1>
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
  <a href="#/restore" class="link">Восстановить пароль</a>
  <button type="submit" class="btn my-4">Войти</button>
  <a href="#/register" class="link text-center">Зарегистрироваться</a>
</form>
