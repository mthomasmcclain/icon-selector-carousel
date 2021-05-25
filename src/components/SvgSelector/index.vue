<template>
    <Slick :options="slickOptions">
      <a 
        v-for="([iconId, iconSvgComp]) in Object.entries(svgIcons)"
        :key="iconId"
        @click="$emit('iconClicked', iconId)"
        :style="activeIconId === iconId ? `background: lightgreen;` : ''"
      >
        <component :is="iconSvgComp" />
      </a>
    </Slick>
</template>

<script>
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default {
  name: 'svg-selector',
  props: [ 'svgIcons', 'activeIconId' ],
  components: { Slick },
    data() {
        return {
            slickOptions: {
                slidesToShow: 6,
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

/* Why the hell isn't this in the standard slick css files? */
.slick-prev:before, .slick-next:before{
    color:red;
}
.slick-slider { min-width: 100%; width: 0; }
.slick-slide {
    float:left !important;
}
</style>