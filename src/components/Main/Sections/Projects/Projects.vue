<script setup>
import { ref } from 'vue'
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <section
    class="stars relative text-xl flex flex-col justify-start items-center w-full px-0 bg-black text-neutral-100">
    <h2 class="floatFx pt-24 text-4xl font-bold uppercase">Projetos</h2>
    <div
      class="flex flex-col justify-start w-full items-center py-24 px-5 md:flex-row md:justify-evenly md:items-start">
      <ProjectCard title="Helius Food" :animation-x="-100">
        <template v-slot:img>
          <img class="w-40 h-40" src="@/assets/ecommerce_icon.svg" />
        </template>

        <template v-slot:content>
          No meu trabalho, tenho a responsabilidade de desenvolver e manutenir
          alguns projetos, dentre eles um site de pedidos, onde constantemente
          descubro novas abordagens para chegar a um bom resultado. Utilizo o
          <strong>Vue.js</strong> com <strong>Pinia</strong> no front end para
          criar uma interface moderna e interativa para os usuários,
          aproveitando o melhor da reatividade e gerenciamento de estados. Para
          o back end, escolhi o <strong>Express.js</strong>, pela sua
          simplicidade e flexibilidade, permitindo a criação de aplicativos web
          robustos com facilidade. Também utlizei o serviço de armazenamento da
          <strong>Amazon (S3)</strong> para buscar imagens dos produtos,
          tornando a interface mais atraente e amigável para o usuário.
        </template>

        <template v-slot:footer>
          <div
            class="flex flex-row justify-evenly items-center w-full py-4 drop-shadow-md">
            <img src="@/assets/vue_icon.svg" class="w-14 h-14" />

            <img src="@/assets/pinia_icon.svg" class="w-14 h-14 rounded p-0" />
            <img
              src="@/assets/express_icon.svg"
              class="w-14 h-14 rounded bg-neutral-100 p-2" />

            <img
              src="@/assets/mysql_icon.svg"
              class="w-14 h-14 rounded bg-neutral-100 p-2" />

            <img
              src="@/assets/s3_icon.svg"
              class="w-14 h-14 rounded bg-neutral-100 p-2" />
          </div>
        </template>
      </ProjectCard>

      <ProjectCard class="mt-20 md:mt-0" title="Helius Bot" :animation-x="100">
        <template v-slot:img>
          <img class="w-40 h-40" src="@/assets/robot_icon.svg" />
        </template>
        <template v-slot:content>
          Também cuido do desenvolvimento de um bot de Whatsapp para anotar e
          enviar pedidos. Esse projeto foi desenvolvido utilizando Node.js
          juntamente com uma API, chamada <strong>wa-automate-nodejs</strong>,
          que fornece todo o controle para receber e enviar mensagens do
          WhatsApp, além de conexão com banco de dados Oracle. Entre as
          funcionalidades do bot, destacam-se a exibição do cardápio, a
          possibilidade de adicionar e remover itens do carrinho e a opção de
          guardar endereços para entrega, permitindo que o usuário selecione um
          dos endereços salvos ao invés de digitar o mesmo endereço toda vez.
          Apesar de este não estar em produção, ainda, a ideia é atingir uma
          maior agilidade e eficiência no processo de recebimento de pedidos
          pelos nossos clientes, além de uma experiência mais conveniente e
          intuitiva para seus consumidores.
        </template>

        <template v-slot:footer>
          <div
            class="flex flex-row justify-evenly items-center w-full py-4 drop-shadow-md">
            <img
              src="@/assets/nodejs_icon.svg"
              class="w-30 h-14 rounded bg-neutral-100 p-2" />

            <img src="@/assets/pinia_icon.svg" class="w-14 h-14 rounded p-0" />
          </div>
        </template>
      </ProjectCard>
    </div>
  </section>
</template>

<style scoped>
section {
  min-height: 100vh;
  height: auto;
}

.stars::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('../../../../assets/stars.png') repeat-y;
  animation: animateStars 50s linear infinite;
}

@keyframes animateStars {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 0 1000px;
  }
}
</style>
