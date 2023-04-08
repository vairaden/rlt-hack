<script lang="ts">
  import FirstStep from "../components/registration/FirstStep.svelte";
  import SecondStep from "../components/registration/SecondStep.svelte";
  import ThirdStep from "../components/registration/ThirdStep.svelte";

  let step = 1;
</script>

<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  <div class="text-center"><b> Шаг 1 </b>из 3</div>
  <progress class="progress h-0.5" value={step} max="3" />
  {#if step === 1}
    <FirstStep />
  {:else if step === 2}
    <SecondStep />
  {:else if step === 3}
    <ThirdStep />
  {/if}
</div>
