<script lang="ts">
  import { Tabs } from "attractions";
  import { navTabsList, navTabs, NavTabsItem } from "@/constants/nav";
  import routes from "@/routes";
  import Router, { push } from "svelte-spa-router";

  let currentTab: string = navTabsList[0];

  function navTabsChange() {
    const currentKey = navTabs.find(
      (item: NavTabsItem) => item.label === currentTab
    )?.key;
    push(currentKey);
  }
</script>

<main>
  <Tabs
    name="menus"
    items={navTabsList}
    bind:value={currentTab}
    on:change={navTabsChange}
  />
  <Router {routes} />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
</style>
