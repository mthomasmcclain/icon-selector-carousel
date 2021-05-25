<template>
  <div id="app">

    <div class="icon-sel-wrap">
        <SvgSelector
            :svgIcons="svgIcons"
            :activeIconId="activeIconId"
            @iconClicked="id => activeIconId = id"
        />
        <ColorSelector
            :activeColor="activeColor"
            @colorClicked="color => activeColor = color"
        />
    </div>

    <div class="display-output" v-if="activeIconId">
      <component
        :is="svgIcons[activeIconId]"
        :style="`
          padding: 20px;
          background: ${activeColor};
          border-radius: 1000px;
        `"
      />
    </div>

  </div>
</template>

<script>
import SvgSelector from '@/components/SvgSelector'
import ColorSelector from '@/components/ColorSelector'
import svgIcons from '@/components/SvgSelector/SvgIcons'

export default {
  name: 'App',
  components: { SvgSelector, ColorSelector },
  data: () => ({
      svgIcons: svgIcons,
      activeIconId: null,
      activeColor: null,
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.icon-sel-wrap {
    display: inline;
    width: 300px;
}
.display-output {
    width: 80px; 
}

</style>
