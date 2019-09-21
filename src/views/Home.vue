<template>
  <div class="container">
    <Lamp class="lamp" color="red" :currentColorIsOn="currentColorIsOn" :sec="counter"/>
    <Lamp class="lamp" color="yellow" :currentColorIsOn="currentColorIsOn" :sec="counter"/>
    <Lamp class="lamp" color="green" :currentColorIsOn="currentColorIsOn" :sec="counter"/>
  </div>
</template>

<script>
import Lamp from '@/components/Lamp.vue';

export default {
  name: 'home',
  props: ['currentColorIsOn', 'time', 'nextColor'],
  components: {
    Lamp,
  },
  data() {
    return {
      counter: this.time / 1000,
      interval: null,
    };
  },
  watch: {
    $route(to, from) {
      const timer = this.time;
      setTimeout(() => { this.$router.push(this.nextColor); }, timer);
      this.counter = this.time / 1000;
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        this.counter -= 1;
      }, 1000);
    },
  },
  mounted() {
    const timer = this.time;
    setTimeout(() => { this.$router.push(this.nextColor); }, timer);
    this.interval = setInterval(() => {
      this.counter -= 1;
    }, 1000);
  },
};
</script>

<style>
  .container {
    border: 1px solid black;
    border-radius: 5px;
    width: 80px;
    margin: 100px auto;
    padding: 10px;
    background-color: black;
  }
  .lamp {
    width: 60px;
    height: 60px;
    margin: 5px auto;
    border-radius: 50%;
    display: flex;
    justify-content: center;
  }
</style>
