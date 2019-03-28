<template>
  <div class="hello">
    <div class="aa">
       <Carousel autoplay :height="100" v-model="value2">
          <CarouselItem>
              <div class="demo-carousel">1</div>
          </CarouselItem>
          <CarouselItem>
              <div class="demo-carousel">2</div>
          </CarouselItem>
          <CarouselItem>
              <div class="demo-carousel">3</div>
          </CarouselItem>
          <CarouselItem>
              <div class="demo-carousel">4</div>
          </CarouselItem>
      </Carousel> 
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .aa {
    overflow: hidden;
    float: left;
    width: 500px;
  }
</style>
