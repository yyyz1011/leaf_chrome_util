export interface NavTabsItem {
  key: string;
  label: string;
}

export const navTabs: Array<NavTabsItem> = [
  { key: "/qr", label: "二维码生成" },
];

export const navTabsList = navTabs.map((item) => item.label);
