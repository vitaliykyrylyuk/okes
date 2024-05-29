<script setup>
</script>

<template>
  <footer>
    <div
        class="flex items-center flex-col md:flex-row gap-2 md:gap-16 self-center mt-14 md:mt-28 max-w-full md:text-lg leading-7 text-neutral-400 w-[530px] mx-auto">
      <p>
        <nuxt-link :to="`/about`">
          O nas
        </nuxt-link>
      </p>
      <p>
        <nuxt-link :to="`/info`">
          Informacje prawne
        </nuxt-link>
      </p>
      <p>
        <nuxt-link :to="`/help`">
          Pomoc techniczna
        </nuxt-link>
      </p>
    </div>
    <p class="self-center my-5 md:my-16 text-xs leading-5 text-center text-neutral-400">
      © Copyright {{ new Date().getFullYear() }}. Wszelkie prawa zastrzeżone.
    </p>
  </footer>
</template>
