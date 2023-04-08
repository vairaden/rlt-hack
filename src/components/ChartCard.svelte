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
  export let data: { month: string; count: number }[];
  export let title = "";
  export let className = "";

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
            text: title,
            align: "start",
            padding: {
              top: 10,
              bottom: 12,
            },
            font: {
              size: 16,
              weight: "normal",
            },
          },
        },
      },
      data: {
        labels: data.map((row) => row.month),
        datasets: [
          {
            label: title,
            data: data.map((row) => row.count),
            backgroundColor: "#0450F2",
            borderColor: "#0450F2",
          },
        ],
      },
    });
  });
</script>

<div class={"card p-4 " + className}>
  <canvas bind:this={chartCanvas} />
</div>

<style>
  .card {
    box-shadow: 0px 8px 24px -4px rgba(102, 115, 128, 0.1);
    background-color: white;
  }
</style>
