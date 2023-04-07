<script lang="ts">
  async function getData() {
    const res = await fetch("/data");
    return await res.json();
  }

  let data = getData();
</script>

{#await data}
  <p>Loading</p>
{:then res}
  <p>{res.data}</p>
{/await}
