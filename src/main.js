import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import '@/assets/primitive-ui.css'
import '@/assets/tailwind.css'
import '@/assets/vex/vex.css'
import '@/assets/vex/vex-theme-wireframe.css'
import '@/assets/vex/vex.combined.js'

vex.defaultOptions.className = 'vex-theme-wireframe'
Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	router,
	components: {
		
	}
}).$mount('#app')