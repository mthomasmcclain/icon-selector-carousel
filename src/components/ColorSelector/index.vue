<template>
    <Slick :options="slickOptions">
      <a class="color-option"
        v-for="color in colors"
        :key="color"
        :style="activeColor === color ? 'background: lightgreen;': ''"
        @click="$emit('colorClicked', color)"
      >
        <SvgCircle :color="color" />      
      </a>
    </Slick>
</template>

<script>
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SvgCircle from './SvgCircle'
import defaultColorsArray from './defaultColorsArray.js'

export default {
  name: 'color-selector',
  components: { SvgCircle, Slick },
  props: {
    colors: {
      type: Array,
      required: false,
      default: () => defaultColorsArray
    },
    activeColor: {
      type: String,
      required: false,
      default: null,
    },
    colorsToShow: {
      type: Number,
      required: false,
      default: 6,
    }
  },
  data() {
      return {
          slickOptions: {
              slidesToShow: this.colorsToShow,
              swipeToSlide: false,
              swipe: false,
              touchMove: false,
              draggable: false,
              speed: 150,
              infinite: false,
          },
      };
  },

}
</script>




<style>
a .color-option {
  border-radius: 1000px;
}

/* Why the hell isn't this in the standard slick css files? */
.slick-prev:before, .slick-next:before{
    color:red;
}
.slick-slider { min-width: 100%; width: 0; }
.slick-slide {
    float:left !important;
}
</style>