<script lang="ts">
  import { push } from "svelte-spa-router";
  import { register } from "../api";
  import FirstStep from "../components/registration/FirstStep.svelte";
  import SecondStep from "../components/registration/SecondStep.svelte";
  import ThirdStep from "../components/registration/ThirdStep.svelte";

  let step = 1;
  let inn = "";
  let name = "";
  let position = "";
  let document: File | null = null;
  let password = "";

  $: if (step === 4) {
    step = 1;
    register(inn, password);
    push("#/");
  }
</script>

<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  <div class="text-center"><b> Шаг {step} </b>из 3</div>
  <progress class="progress h-0.5" value={step} max="3" />
  {#if step === 1}
    <FirstStep on:filled={() => (step += 1)} bind:inn bind:name />
  {:else if step === 2}
    <SecondStep on:filled={() => (step += 1)} bind:position bind:document />
  {:else if step === 3}
    <ThirdStep on:filled={() => (step += 1)} bind:password />
  {/if}
</div>
