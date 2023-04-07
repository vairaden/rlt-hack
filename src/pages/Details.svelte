<script lang="ts">
  import { onMount } from "svelte";
  import {
    Chart,
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
    Decimation,
    Filler,
    Legend,
    SubTitle,
    Title,
    Tooltip,
  } from "chart.js";

  let chartCanvas;
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

  onMount(async () => {
    Chart.register(
      BarController,
      BarElement,
      CategoryScale,
      LinearScale,
      Decimation,
      Filler,
      Legend,
      SubTitle,
      Title,
      Tooltip
    );

    new Chart(chartCanvas.getContext("2d"), {
      type: "bar",
      data: {
        labels: data.map((row) => row.year),
        datasets: [
          {
            label: "Acquisitions by year",
            data: data.map((row) => row.count),
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
          },
        ],
      },
    });
  });
</script>

<div class="h-64">
  <canvas bind:this={chartCanvas} />
</div>
