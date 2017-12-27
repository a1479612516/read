import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
var store = new Vuex.Store({
	state:{
		item:null,
		item1:[],
		chapter:[]
	},
})
export default store