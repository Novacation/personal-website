<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="bg-neutral-50 w-full h-full">
    <RouterView v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import './style.css';

.floatFx {
  animation: float 3s ease-in-out infinite;
}

.floatFxSlower {
  animation: float 5s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translatey(0px);
  }
  50% {
    transform: translatey(-10px);
  }
  100% {
    transform: translatey(0px);
  }
}
</style>
