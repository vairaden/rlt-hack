<script lang="ts">
  import clsx from "clsx";
  import { push } from "svelte-spa-router";

  let query = "";
  let inputError: string | null = null;

  async function handleSubmit() {
    // const res = await search(query);
    // const data = await res.json();
    if (query === "") {
      inputError = "Введите данные";
      return;
    }
    push("#/details/" + query);
  }
</script>

<form
  on:submit|preventDefault={handleSubmit}
  class="flex flex-col items-center w-[80%] mx-auto"
>
  <div
    class="relative w-full text-textGrey bg-white form-control border rounded-lg flex flex-row items-center"
  >
    <label for="query" class="mx-4">
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.3 15.1408C12.1936 15.1408 15.35 12.0289 15.35 8.19008C15.35 4.35132 12.1936 1.23938 8.3 1.23938C4.40639 1.23938 1.25 4.35132 1.25 8.19008C1.25 12.0289 4.40639 15.1408 8.3 15.1408Z"
          stroke="#8D93A1"
          stroke-width="2.25"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.25 13.3665L20.75 20.7608"
          stroke="#8D93A1"
          stroke-width="2.25"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </label>
    {#if inputError}
      <span class="absolute -top-6 left-14 text-error">
        {inputError}
      </span>
    {/if}
    <input
      id="query"
      type="text"
      class={clsx("input rounded-none w-full bg-white", {
        "input-error": inputError,
      })}
      placeholder="Искать ОРГН или ИНН"
      bind:value={query}
      on:change={() => (inputError = null)}
    />
    <span class="dropdown dropdown-bottom flex mr-8">
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label tabindex="0" class="btn btn-ghost whitespace-nowrap">
        <svg
          class="mr-2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 5C2.44772 5 2 5.44772 2 6C2 6.55228 2.44772 7 3 7V5ZM21 7C21.5523 7 22 6.55228 22 6C22 5.44772 21.5523 5 21 5V7ZM3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13V11ZM21 13C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11V13ZM3 17C2.44772 17 2 17.4477 2 18C2 18.5523 2.44772 19 3 19V17ZM21 19C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17V19ZM10 19H21V17H10V19ZM3 19H5.5V17H3V19ZM18.5 13H21V11H18.5V13ZM3 13H14V11H3V13ZM3 7H5.5V5H3V7ZM10 7H21V5H10V7Z"
            fill="#8D93A1"
          />
          <circle cx="8" cy="18" r="2" stroke="#8D93A1" stroke-width="2" />
          <circle cx="16" cy="12" r="2" stroke="#8D93A1" stroke-width="2" />
          <circle cx="8" cy="6" r="2" stroke="#8D93A1" stroke-width="2" />
        </svg>

        Все параметры</label
      >
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul
        tabindex="0"
        class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li><span>Опция 1</span></li>
        <li><span>Опция 2</span></li>
      </ul>
    </span>
  </div>
  <button class="btn h-64 w-64 mt-10 rounded-full flex flex-col">
    <svg
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 16H31.5M31.5 16L16.5 1M31.5 16L16.5 31"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
    <span class="text-white mt-5"> Найти контрагента </span>
  </button>
  <img
    class="absolute -translate-x-[3%] -translate-y-[10%] -z-10"
    src="search-effect.png"
    alt="Search effect"
  />
</form>
