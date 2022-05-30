<script lang="ts">
  import { Card } from "attractions";
  import { navTabs } from "@/constants/nav";
  import { push } from "svelte-spa-router";

  function handleGoNav(key: string) {
    push(key);
  }
</script>

<main>
  {#each navTabs as item}
    <div on:click={() => handleGoNav(item?.key)}>
      <Card outline>{item.label}</Card>
    </div>
  {/each}
</main>
