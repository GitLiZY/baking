<template>
  <div>
  	<div class="tops">
  		<div class="sousuok">
  			<i-input icon="ios-clock-outline" placeholder="搜索 食谱/食材"></i-input>
  		</div>
  		<div class="lunbo">
	       <Carousel autoplay v-model="value2" loop>
		      <div v-for="i in srca">
		        <Carousel-item>
		            <div class="demo-carousel">
		            	<img :src="i.src" width="100%" height="auto">
	            	</div>
		        </Carousel-item>
		      </div>
		    </Carousel>
  		</div>
		<div class="bank">
			<div class="bank_left"><img src='../assets/images/index_img/bank1.gif' width="100%"/></div>
			<div class="bank_right"><img src='../assets/images/index_img/bank2.gif' width="100%"/></div>
			<div class="blank"></div>
			<div class="bank_left"><img src='../assets/images/index_img/bank3.gif' width="100%"/></div>
			<div class="bank_right">
			<div class="bank_left_left"><img src='../assets/images/index_img/bank4.gif' width="100%"/></div>
			<div class="bank_left_right"><img src='../assets/images/index_img/bank5.gif' width="100%"/></div>
			</div>
		</div>
		<div class="k_test">精选推荐</div>
		<div class="fors_list_img">
			<div class="k_list" v-for="i in list_img">
				<img :src="i" width="100%" />
			</div>
		</div>
  	</div>
  	{{get}}
  </div>
</template>

<script>
import Divider from "iview/src/components/divider/divider";
export default {
  components: {Divider},
  data () {
    return {
    	list_img: [
    				require("../assets/images/index_img/img_1.gif")
    			  ],
        srca: ""
    }
  },
	  created() {
	    this.$http.post('/api/lubo/lubos').then((data) => {
	    	this.srca = data.body.data;
	    	console.log(data.body.data);
	    }
	  )
  }
}
</script>

<style>
	@import '../assets/css/index_css/index.css';
</style>
