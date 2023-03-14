<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const animateShadow = ref(false)

setInterval(() => {
  animateShadow.value = !animateShadow.value
}, 1000)
</script>

<template>
  <header
    class="flex flex-col backImg bg-black justify-start items-center w-full py-20">
    <div
      id="meCard"
      class="w-11/12 flex flex-col bg-neutral-900 rounded-md justify-center items-center shadow-slate-800 shadow-lg drop-shadow-md py-14 select-none">
      <img
        src="../../assets/me.jpg"
        alt="Foto de Anderson Celestino"
        class="w-1/2 rounded-full mb-10 shadow-md shadow-black" />

      <p class="text-2xl mb-4 font-bold text-neutral-200 text-center px-5">
        Olá 👋🏼
      </p>
      <p class="text-xl text-neutral-200 text-center px-5">
        Meu nome é <strong>Anderson Celestino</strong> e sou programador
        full-stack, apaixonado por tecnologia e Black Metal 💀
      </p>

      <router-link
        id="aboutMe"
        to="#aboutMeTitle"
        tag="h1"
        class="floatFx my-10 drop-shadow-md rounded-full p-4 flex justify-center w-14 h-14 items-center"
        :class="{
          'shadow-orange-200': !animateShadow,
          'shadow-indigo-200': animateShadow,
          'shadow-md': !animateShadow,
          'shadow-sm': animateShadow
        }"
        ><font-awesome-icon icon="angles-down" class="text-neutral-100 w-8 h-8"
      /></router-link>

      <div class="w-full flex flex-row justify-evenly items-center">
        <a
          href="https://api.whatsapp.com/send?phone=5521968286337"
          target="_blank"
          ><img
            src="../../assets/whatsapp_icon.svg"
            alt="Ícone do whatsapp"
            class="w-14 shadow-lg"
        /></a>

        <a href="https://github.com/Novacation" target="_blank"
          ><img
            src="../../assets/github_icon.svg"
            alt="Ícone do github"
            class="w-14 shadow-lg"
        /></a>

        <a href="https://www.linkedin.com/in/andersoncelestino" target="_blank"
          ><img
            src="../../assets/linkedin_icon.svg"
            alt="Ícone do linkedin"
            class="w-14 shadow-lg"
        /></a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.backImg {
  background-image: url('../../assets/main_bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: local;
  background-size: cover;
}

#meCard {
  max-width: 400px;
}

header {
  min-height: 100vh;
  height: auto;
}

#aboutMe {
  transition: 1.5s all ease-in-out;
}
</style>
