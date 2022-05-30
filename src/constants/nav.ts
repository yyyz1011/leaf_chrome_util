export interface NavTabsItem {
  key: string;
  label: string;
}

export const navTabs: Array<NavTabsItem> = [
  { key: "/", label: "首页" },
  { key: "/qr", label: "二维码生成" },
  { key: "/todos", label: "TODOS" },
];

export const navTabsList = navTabs.map((item) => item.label);
