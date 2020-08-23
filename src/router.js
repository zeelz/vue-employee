import Vue from 'vue'
import Router from 'vue-router'
import Employees from './components/Employees.vue'
import EmployeeCreate from './components/EmployeeCreate.vue'
import Tailwind from './components/Tailwind.vue'


Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'employees',
			component: Employees
		},
		{
			path: '/create',
			name: 'create',
			component: EmployeeCreate
		},
		{
			path: '/tailwind',
			name: 'tailwind',
			component: Tailwind
		}
	],
	mode: 'history'
})