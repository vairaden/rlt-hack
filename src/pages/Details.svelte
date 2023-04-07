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

  let chartCanvas;
  const data = [
    { month: "янв", count: 10 },
    { month: "фев", count: 20 },
    { month: "мар", count: 15 },
    { month: "апр", count: 25 },
    { month: "май", count: 22 },
    { month: "июн", count: 30 },
    { month: "июл", count: 28 },
    { month: "авг", count: 12 },
    { month: "сен", count: 20 },
    { month: "окт", count: 29 },
    { month: "ноя", count: 17 },
    { month: "дек", count: 28 },
  ];

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
