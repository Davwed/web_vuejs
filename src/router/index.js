import { createRouter, createWebHashHistory } from "vue-router"
import Home from "../views/Home"
import About from "../views/About"
import Manager from "../views/Manager"

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
		path: "/manager",
		component: Manager,
	},
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export default router
