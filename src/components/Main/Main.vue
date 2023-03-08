<script setup>
import AboutMe1 from './Sections/AboutMe/AboutMe1.vue'
import Projects from './Sections/Projects/Projects.vue'
</script>

<template>
  <main
    id="aboutMeTitle"
    class="flex flex-col justify-start items-center bg-neutral-200 w-full overflow-x-hidden">
    <AboutMe1 />

    <hr
      v-motion-fade-visible
      class="h-1 w-16 bg-neutral-700 drop-shadow-md my-14" />

    <Projects />
  </main>
</template>

<style scoped>
main {
  height: auto;
}
section {
  text-align: center;
}
</style>
