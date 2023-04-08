<script lang="ts">
  import { onMount } from "svelte";
  import {
    Chart,
    LineController,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Decimation,
    Filler,
    Title,
    Tooltip,
  } from "chart.js";

  export let params: { id: number };
  let chartCanvas;
  let data: { month: string; count: number }[];

  async function getData(id: number) {
    const res = await fetch(
      "/details" + "?" + new URLSearchParams({ id: id.toString() })
    );
    data = await res.json();
  }

  onMount(async () => {
    Chart.register(
      LineController,
      LineElement,
      PointElement,
      CategoryScale,
      LinearScale,
      Decimation,
      Filler,
      Title,
      Tooltip
    );

    await getData(params.id);

    new Chart(chartCanvas.getContext("2d"), {
      type: "line",
      options: {
        plugins: {
          title: {
            display: true,
            text: "Количество сделок",
            align: "start",
            padding: {
              top: 10,
              bottom: 12,
            },
            font: {
              size: 16,
              weight: "bold",
            },
          },
        },
      },
      data: {
        labels: data.map((row) => row.month),
        datasets: [
          {
            label: "Количество сделок",
            data: data.map((row) => row.count),
            backgroundColor: "#0450F2",
            borderColor: "#0450F2",
          },
        ],
      },
    });
  });
</script>

<div class="card shadow-lg p-4 w-[40rem]">
  <canvas bind:this={chartCanvas} />
</div>
