<script setup>
import { ref } from 'vue'

defineProps({
  animationX: Number,
  title: String,
  projectText: String
})

const projectTextStatus = ref(false)

const toggleProjectTextStatus = () => {
  projectTextStatus.value = !projectTextStatus.value
}
</script>

<template>
  <div
    v-motion
    :initial="{
      opacity: 0,
      x: animationX
    }"
    :visible="{
      opacity: 1,
      x: 0,
      transition: {
        opacity: {
          duration: 1000
        },

        x: {
          duration: 1000
        }
      }
    }"
    v-auto-animate
    class="w-full flex flex-col justify-between items-center bg-neutral-900 shadow-md drop-shadow-md shadow-neutral-900 py-5 px-4 rounded-md max-w-lg"
    :class="{ cardHeight: !projectTextStatus, 'h-auto': projectTextStatus }">
    <div class="flex flex-col justify-start items-center w-full">
      <slot name="img" />
      <h3 class="text-3xl text-white mt-10 drop-shadow-md">
        {{ title }}
      </h3>
    </div>

    <p v-if="projectTextStatus" class="w-full text-center py-10">
      <slot name="content" />
    </p>

    <div
      class="flex justify-center items-center"
      :class="{
        'rotate-180': projectTextStatus,
        'mb-10': projectTextStatus
      }">
      <font-awesome-icon
        @click="toggleProjectTextStatus"
        icon="angle-down"
        class="floatFx text-neutral-100 w-8 h-8 cursor-pointer" />
    </div>

    <div class="w-full flex flex-col justify-start items-center">
      <h4 class="capitalize mb-0 drop-shadow-md text-green-100 font-bold">
        tecnologias utilizadas
      </h4>

      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped>
.cardHeight {
  height: 30rem;
}
</style>
