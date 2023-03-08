<template>
  <section
    class="text-xl flex flex-col justify-start items-center w-full px-4 max-w-6xl pt-14 md:flex-row md:justify-evenly md:items-start">
    <div
      v-motion
      :initial="{
        opacity: 0,
        x: -100
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
      class="flex flex-col justify-start items-left self-start text-2xl drop-shadow-md px-4 py-10 rounded-md text-neutral-800 max-w-lg text-left md:self-auto">
      <img
        class="w-3/4 max-w-md mb-10"
        src="@/assets/art_icon.svg
        " />

      <p>
        Desde o início da minha jornada como programador, descobri que se trata
        de algo além de apenas escrever linhas de código. É uma forma de
        <strong>arte</strong> em que você cria
        <strong>soluções</strong> inovadoras para problemas complexos.
      </p>
    </div>

    <div
      v-motion
      :initial="{
        opacity: 0,
        x: 100
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
      class="flex flex-col justify-start items-end self-end text-2xl drop-shadow-md px-4 py-10 rounded-md text-neutral-800 max-w-lg text-right md:self-auto">
      <img
        class="w-3/4 max-w-md mb-10"
        src="@/assets/tasks_icon.svg
        " />

      <p>
        Essa visão me levou a buscar constantemente novos
        <strong>desafios</strong> e <strong>aperfeiçoar</strong> minhas
        habilidades em tecnologias de ponta e hoje, sou capaz de desenvolver
        aplicações de alta qualidade que atendem às necessidades dos clientes.
      </p>
    </div>
  </section>
</template>

<style scoped>
section {
  min-height: 80vh;
  height: auto;
}
</style>
