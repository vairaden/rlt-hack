<script lang="ts">
  import { getProductList } from "../api";

  let productName = "";

  let promise = getProductList();
</script>

<div class="mx-auto w-[80%] mt-32">
  <div class="flex items-center pl-4 border rounded-xl bg-white">
    <label for="productName">
      <span class="hidden">Искать товар</span>
      <svg
        width="14"
        height="14"
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
    <input
      id="productName"
      placeholder="Искать товар"
      class="input ml-2 rounded-l-none w-full bg-white"
      type="text"
      bind:value={productName}
    />
  </div>
  {#await promise}
    <p>Загрузка</p>
  {:then { data }}
    <ul class="mt-4 grid grid-cols-2 gap-2">
      {#each data as product, i}
        {#if i === 0 || product.section !== data[i - 1].section}
          <span class="col-span-2 font-bold">{product.section_name}</span>
        {/if}
        <li class="col-span-2 border-b pb-1">
          <a href={"#/product/" + product.code}> {product.name} </a>
        </li>
      {/each}
    </ul>
  {/await}
</div>
