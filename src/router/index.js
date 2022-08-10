import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../views/Home"
import About from "../views/About"
import ItemSite from "../views/ItemSite"

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
		component: ItemSite,
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
