<script>
  import ProductList from "../components/ProductList.svelte";
  import Search from "../components/Search.svelte";
</script>

<div class="w-full">
  <h1 class="text-[56px] text-center">Детальный поиск контрагентов</h1>
  <p class="text-[#5F6166] max-w-[750px] text-center mx-auto mb-8">
    Сервис для поиска релеватных российских компаний. Помогает оценить риски,
    предоставляет информацию о физлицах и/или юрлицах. Изучайте информацию о
    работе компании, которая Вам нужна, в этом вам помогут экспресс-отчеты или
    полная аналитика.
  </p>
  <Search />
  <ProductList />
</div>
