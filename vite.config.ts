import { svelte } from "@sveltejs/vite-plugin-svelte";
import rollupPluginCopy from "rollup-plugin-copy";
import sveltePreprocess from "svelte-preprocess";

// https://vitejs.dev/config/
export default {
  preprocess: [sveltePreprocess()],
  plugins: [
    svelte(),
    rollupPluginCopy({
      targets: [
        {
          src: "src/plugins/manifest.json",
          dest: "./public",
        },
        {
          src: "./src/plugins/logo.png",
          dest: "./public",
        },
      ],
      verbose: true,
      copyOnce:true,
    }),
  ],
  base: "./",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    outDir: "public", //指定输出路径
    assetsDir: "assets", //指定生成静态资源的存放路径
  },
};
