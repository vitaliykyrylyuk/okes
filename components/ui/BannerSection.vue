<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Logo from '~/components/header/Logo.vue';
import MailIcon from '~/components/global/MailIcon.vue';

const hovered = ref(false);
</script>

<template>
  <section class="banner relative w-full overflow-hidden px-5">
    <div class="box" :class="{'animation-stopped': !hovered}" @mouseenter="hovered = true" @mouseleave="hovered = false"></div>
    <Logo />
    <div class="font-['Inter'] absolute top-0 right-[4%] hidden md:block">
      <div class="phone-clamp flex items-center gap-3 font-bold">
        <PhoneIcon class="hidden lg:block" />
        <p class="flex-auto my-auto"><a href="tel:+48 789 622 000">+48 789 622 000</a></p>
      </div>
      <div class="flex items-center gap-3 mt-0 lg:mt-7 text-lg lg:text-xl whitespace-nowrap">
        <MailIcon class="hidden lg:block" />
        <p class="flex-auto my-auto">hr@mebleokes.com</p>
      </div>
    </div>
    <h1 class="banner-title absolute z-20 bottom-[3%] md:hidden left-10">
      <span class="line px-4 pt-6">Zapraszamy</span>
      <br>
      <span class="line px-4 ">do dołączenia do naszego</span>
      <br>
      <span class="line px-4 pb-6">profesjonalnego zespołu!</span>
    </h1>
    <h1 class="banner-title absolute z-20 bottom-[22%] left-[7%] hidden md:block">
      <span class="line px-8 pt-5 pb-6">Zapraszamy do dołączenia do naszego</span>
      <br>
      <span class="line px-8 pb-6">profesjonalnego zespołu!</span>
    </h1>
    <p class="hidden md:block absolute text-sm lg:text-xl lg:leading-8 text-neutral-400 left-[9%] bottom-[3%]">
      Obecnie poszukujemy kandydatów <br />na następujące stanowiska:
    </p>
  </section>
</template>
