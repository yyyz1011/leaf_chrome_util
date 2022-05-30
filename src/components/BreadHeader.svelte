<script lang="ts">
  import { Breadcrumbs } from "attractions";
  import { navTabs } from "@/constants/nav";
  export let currentBreadText: string = "";

  const routePath = window.location.hash.slice(1);
  const defaultText = navTabs.find((item) => item.key === routePath)?.label;

  const items = [
    { href: "/", text: "首页" },
    { text: currentBreadText || defaultText },
  ];
</script>

<div class="bread-header">
  <Breadcrumbs {items} />
</div>

<style>
  .bread-header {
    position: relative;
    left: -3em;
    padding-bottom: 16px;
  }
</style>
