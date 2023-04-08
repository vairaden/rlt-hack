<script lang="ts">
  import { getDetails } from "../api";
  import ChartCard from "../components/ChartCard.svelte";

  export let params: { inn: string };
  let resPromise = getDetails(params.inn);

  function parseDate(date: string) {
    const map = new Map([
      [0, "января"],
      [1, "февраля"],
      [2, "марта"],
      [3, "апреля"],
      [4, "мая"],
      [5, "июня"],
      [6, "июля"],
      [7, "августа"],
      [8, "сентября"],
      [9, "октября"],
      [10, "ноября"],
      [11, "декабря"],
    ]);
    const dateObj = new Date(date);
    return (
      dateObj.getDay() +
      " " +
      map.get(dateObj.getMonth()) +
      " " +
      dateObj.getFullYear()
    );
  }
</script>

{#await resPromise}
  <p>Loading</p>
{:then { data }}
  <h1 class="text-center text-[56px] mb-6">{data.name}</h1>
  <div class="grid grid-cols-6 gap-3">
    <div class="card p-4 shadow-md col-span-3">
      <ul>
        <li>
          <span> ИНН: </span>
          <span>
            {data.inn}
          </span>
        </li>
        <li>
          <span> КПП: </span>
          <span>
            {data.kpp}
          </span>
        </li>
        <li>
          <span> ОГРН: </span>
          <span>
            {data.ogrn}
          </span>
        </li>
        <li>
          <span> Дата образования: </span>
          <span>
            {parseDate(data.creation_date)}
          </span>
        </li>
      </ul>
    </div>
    <div class="card p-4 shadow-md col-span-3 grid grid-cols-2">
      <div>
        <div class="text-textGrey">Генеральный директор:</div>
        <div class="text-primary">
          {data.ceo}
        </div>
      </div>
      <div>
        <div class="text-textGrey">Виды деятельности</div>
        <div>
          {#each data.okved as okved}
            {okved.description} - {okved.code}
          {/each}
        </div>
      </div>
    </div>
    <div class="card p-4 shadow-md col-span-2">
      <ul>
        <li>
          <span> Регистрационный орган: </span>
          <span>
            {data.registration_authority}
          </span>
        </li>
        <li>
          <span> Налоговый орган: </span>
          <span>
            {data.tax_authority}
          </span>
        </li>
        <li>
          <span> Дата постановки на учет: </span>
          <span>
            {parseDate(data.registration_date)}
          </span>
        </li>
      </ul>
    </div>
    <ChartCard
      className="col-span-3 col-start-1"
      data={data.contracts}
      title="Количество сделок"
    />
    <ChartCard
      className="col-span-3"
      data={data.arbitration_cases}
      title="Количество арбитражных дел"
    />
  </div>
{/await}

<style>
  li:nth-child(odd) {
    background-color: #f7f9fc;
  }
  li {
    display: flex;
    justify-content: space-between;
    padding: 10px 12px;
    border-radius: 8px;
  }
</style>
