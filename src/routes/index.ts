import Home from "@/views/home.svelte";
import Qrcode from "@/views/qrcode.svelte";

const routes = {
  "/": Home,
  "/qr": Qrcode,
};

export default routes;
