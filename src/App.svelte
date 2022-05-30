<script lang="ts">
  import { navTabs, NavTabsItem } from "@/constants/nav";
  import routes from "@/routes";
  import Router, { push } from "svelte-spa-router";
  import { H2 } from "attractions";

  let currentTab: string = navTabs.find(
    (item: NavTabsItem) => item.key === window.location.hash.slice(1)
  )?.label;

  function navTabsChange() {
    const currentKey = navTabs.find(
      (item: NavTabsItem) => item.label === currentTab
    )?.key;
    push(currentKey);
  }

  document.querySelector('body')?.setAttribute('style', 'margin:0 !important;')
</script>

<main class="leaf-util-body">
  <H2>LEAF-UTIL</H2>
  <Router {routes} />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  .leaf-util-body {
    min-width: 375px;
    min-height: 667px;
  }
</style>
