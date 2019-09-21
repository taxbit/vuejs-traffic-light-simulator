<template>
  <div :class="`lamp_${color}${color === currentColorIs ? '' : '_off'} ${sec < 4 && color === currentColorIs ? 'blink' : ''}`">
    <div class="lamp__counter">
      {{color === currentColorIs ? sec: ''}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lamp',
  props: ['color', 'currentColorIs', 'sec'],
};
</script>

<style>
@keyframes blink-animation {
  to {
    opacity: 0.5;
  }
}
  .lamp_red {
    background-color: red;
    color: white;
  }
  .lamp_green {
    background-color: rgb(0, 212, 0);
    color: white;
  }
  .lamp_yellow {
    background-color: yellow;
    color: black;
  }
  .lamp_red_off {
    background-color: red;
    opacity: 0.5;
  }
  .lamp_green_off {
    background-color: green;
    opacity: 0.5;
  }
  .lamp_yellow_off {
    background-color: yellow;
    opacity: 0.5;
  }
  .lamp__counter {
    width: 30px;
    height: 30px;
    font-size: 1.5em;
    text-align: center;
    align-self: center;
    font-family: Arial, Helvetica, sans-serif;
  }
  .blink {
    animation: blink-animation 0.2s steps(10, start) infinite;
  }
</style>
