// 每次构建 CLI 自动生成，切勿修改（修改后，构建时也将重写此文件）。
import Vue 		from 'vue';
import qyPage 	 from './[page_name].vue';
import './[base_url]/less/style.less'

new Vue({
	el: '#app',
	components: {
		qyPage,
	}
})