<script lang="ts">
  import { getProduct } from "../api";

  export let params: { id: string };
  const promise = getProduct(params.id);

  function parseDate(date: string) {
    const map = new Map([
      [0, "январь"],
      [1, "февраль"],
      [2, "март"],
      [3, "апрель"],
      [4, "май"],
      [5, "июнь"],
      [6, "июль"],
      [7, "август"],
      [8, "сентябрь"],
      [9, "октябрь"],
      [10, "ноябрь"],
      [11, "декабрь"],
    ]);
    const dateObj = new Date(date);
    return map.get(dateObj.getMonth()) + " " + dateObj.getFullYear();
  }
</script>

{#await promise}
  <h1>Загрузка</h1>
{:then { data }}
  <h1 class="text-center text-5xl my-5">
    {data[0].name}
  </h1>
  <ul class="bg-white p-4 rounded-md shadow-sm">
    {#each data as product}
      <li class="odd:bg-[#f7f9fc] p-2 rounded-md">
        <!--  id-->
        <a href={"#/details/7309900546"} class="flex flex-row justify-between">
          <span>
            <span class="mx-4">
              Цена: {product.sum_in_rub} руб.
            </span>
            <span class="mx-4">
              {product.company_name}
            </span>
          </span>
          <span class="mx-4">
            {parseDate(product.tender_date)}
          </span>
        </a>
      </li>
    {/each}
  </ul>
{/await}
