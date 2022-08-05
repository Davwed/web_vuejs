import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../views/Home"
import About from "../views/About"
import ItemManager from "../views/ItemManager"

const routes = [
	{
		path: "/",
		component: Home,
	},
	{
		path: "/about",
		component: About,
	},
	{
		path: "/items",
		component: ItemManager,
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
