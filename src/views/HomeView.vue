<script setup>
import YandexMap from '../components/YandexMap.vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import slide1 from '../components/slides/slide1.vue'
import slide2 from '../components/slides/slide2.vue'
import slide3 from '../components/slides/slide3.vue'
import slide4 from '../components/slides/slide4.vue'
import slide5 from '../components/slides/slide5.vue'
import slide6 from '../components/slides/slide6.vue'
import slide7 from '../components/slides/slide7.vue'

const slides = [slide1, slide2, slide3, slide4, slide5, slide6, slide7]
</script>

<template>
  <main>
    <div class="block-title mb30">Акции</div>
    <carousel :wrap-around="true">
      <slide v-for="slide in slides" :key="slide">
        <div class="carousel__item">
          <component :is="slide" />
        </div>
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>

    <YandexMap />
  </main>
</template>

<style lang="scss">
.mb30 {
  margin-bottom: 30px;
}
.carousel__item {
  padding: 10px;
  min-height: 250px;
  width: 100%;
  background-color: #501e21;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(/public/bg5.svg);
  background-size: 105px;
  background-position: bottom;
  background-repeat: space round;
  color: white;
  font-size: 35px;
  font-weight: bold;
  line-height: 2.5rem;
  .red {
    color: red;
  }
  .blue {
    color: #009aff;
  }

  b {
    font-weight: bold;
  }
  .subtext {
    font-size: 25px;
    line-height: 1.6rem;
  }
  .verysmall {
    font-size: 15px;
    line-height: 1.6rem;
  }
}
</style>
