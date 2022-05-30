import Home from "@/views/home.svelte";
import Qrcode from "@/views/qrcode.svelte";
import Todos from "@/views/todos.svelte";

const routes = {
  "/": Home,
  "/qr": Qrcode,
  "/todos": Todos,
};

export default routes;
