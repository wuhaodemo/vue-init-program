<template>
<<<<<<< HEAD
  <div class="home1">
    <button @click="show = !show">Toggle</button>
    <transition v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:leave="leave" v-bind:css="false">
      <!-- <img :src="img" alt="" v-if="show" /> -->
      <p v-if="show">demo</p>
    </transition>
  </div>
</template>

<script>
import animations from 'create-keyframe-animation';
export default {
  name: 'Home',
  data() {
    return {
      show: false,
      img: require('@/assets/logo.png')
    };
  },
  methods: {
    beforeEnter: function (el) {
      el.style.opacity = 0;
      el.style.transformOrigin = 'left';
      animations.registerAnimation({
        name: 'move',
        // the actual array of animation changes
        animation: {
          0: {
            transform: `translate3d(900px,900px,0) scale(1)`
          },
          60: {
            transform: `translate3d(0,0,0) scale(1.1)`
          },
          100: {
            transform: `translate3d(0,0,0) scale(1)`
          }
        },
        // optional presets for when actually running the animation
        presets: {
          duration: 1000,
          // easing: 'linear',
          delay: 500
        }
      });
      animations.runAnimation(el, 'move', function () {
        console.log('done');
        // callback gets called when its done
      });
      console.log('dd');
    },
    enter: function (el, done) {
      console.log(el, done);
    },
    leave: function (el, done) {
      console.log(el, done);
    }
  }
=======
  <div class="home1"></div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {}
>>>>>>> 74309571b286f1e53b6a20daca23fbd7f8f235da
};
</script>

<style lang="less" scoped>
.item {
  font-size: 33px;
}
</style>
