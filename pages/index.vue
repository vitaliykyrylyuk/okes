<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Logo from '~/components/header/Logo.vue'
import ContactForm from '~/components/ui/ContactForm.vue'
import CheckIcon from '~/components/global/CheckIcon.vue'
import MailIcon from '~/components/global/MailIcon.vue'
import BannerSection from '~/components/ui/BannerSection.vue'
</script>

<template>

  <Header />
  <main class="flex flex-col w-full mx-auto max-w-[1650px]">
    <BannerSection />
    <section class="font-['Inter'] block md:hidden my-7 px-5">
      <div class="flex items-center gap-3 text-3xl font-bold">
        <PhoneIcon />
        <p class="flex-auto my-auto"><a href="tel:+48 789 622 000">+48 789 622 000</a></p>
      </div>
      <div class="flex items-center gap-3 mt-7 text-xl whitespace-nowrap">
        <MailIcon />
        <p class="flex-auto my-auto">hr@mebleokes.com</p>
      </div>
    </section>
    <div class="gradient-box flex flex-col w-full px-5">
      <section class="flex flex-col mt-8 md:mt-16 max-w-full w-[1340px] mx-auto">
        <p class="block md:hidden leading-8 text-neutral-400 mb-8">
          Obecnie poszukujemy kandydatów <br />na następujące stanowiska:
        </p>
        <div class="flex flex-col md:flex-row justify-between gap-5 w-full text-3xl text-black">
          <div class="flex flex-col gap-5 lg:gap-7">
            <p class="list-item-element flex gap-4 items-center whitespace-nowrap">
              <CheckIcon /> Sekretarka
            </p>
            <p class="list-item-element flex gap-4 items-center whitespace-nowrap">
              <CheckIcon /> Księgowa
            </p>
            <p class="list-item-element flex gap-4 items-center">
              <CheckIcon /> Brygadzista magazynu
            </p>
          </div>
          <div class="list-item-element flex flex-col gap-5 lg:gap-7 lg:pr-28">
            <p class="list-item-element flex gap-4 items-center">
              <CheckIcon /> Pracownik magazynu
            </p>
            <p class="list-item-element flex gap-4 items-center">
              <CheckIcon /> Kierowców samochodów ciężarowych
            </p>
            <p class="list-item-element flex gap-4 items-center whitespace-nowrap">
              <CheckIcon /> Sprzedawca
            </p>
          </div>
        </div>
      </section>
      <ContactForm class="mt-16 md:mt-32" />
    </div>
  </main>
  <Footer />
</template>

<style lang="scss">
@mixin media-min($breakpoint) {
  @media (min-width: #{$breakpoint}) {
    @content;
  }
}

.box {
  width: 100%;
  padding-top: 105%;
  -webkit-mask: url('data:image/svg+xml;utf8,<svg viewBox="0 0 350 368" xmlns="http://www.w3.org/2000/svg"><path d="M0 338C0 354.569 13.4315 368 30 368H320C336.569 368 350 354.569 350 338V30C350 13.4315 336.569 0 320 0H178C161.431 0 148 13.4315 148 30V118C148 134.569 134.569 148 118 148H30C13.4315 148 0 161.431 0 178V338Z"/></svg> ') center/contain no-repeat;
  mask: url('data:image/svg+xml;utf8,<svg viewBox="0 0 350 368" xmlns="http://www.w3.org/2000/svg"><path d="M0 338C0 354.569 13.4315 368 30 368H320C336.569 368 350 354.569 350 338V30C350 13.4315 336.569 0 320 0H178C161.431 0 148 13.4315 148 30V118C148 134.569 134.569 148 118 148H30C13.4315 148 0 161.431 0 178V338Z"/></svg> ') center/contain no-repeat;
  position: relative;

  @include media-min(768px) {
    padding-top: 58%;
    -webkit-mask: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1600 935" xmlns="http://www.w3.org/2000/svg"><path d="M1235 135C1212.91 135 1195 117.091 1195 95V40C1195 17.9086 1177.09 0 1155 0H310C287.909 0 270 17.9086 270 40V230C270 252.091 252.091 270 230 270H40C17.9086 270 0 287.909 0 310V760C0 782.091 17.9086 800 40 800H635C657.091 800 675 817.909 675 840V895C675 917.091 692.909 935 715 935H1560C1582.09 935 1600 917.091 1600 895V800V635V175C1600 152.909 1582.09 135 1560 135H1235Z"/></svg> ') center/contain no-repeat;
    mask: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1600 935" xmlns="http://www.w3.org/2000/svg"><path d="M1235 135C1212.91 135 1195 117.091 1195 95V40C1195 17.9086 1177.09 0 1155 0H310C287.909 0 270 17.9086 270 40V230C270 252.091 252.091 270 230 270H40C17.9086 270 0 287.909 0 310V760C0 782.091 17.9086 800 40 800H635C657.091 800 675 817.909 675 840V895C675 917.091 692.909 935 715 935H1560C1582.09 935 1600 917.091 1600 895V800V635V175C1600 152.909 1582.09 135 1560 135H1235Z"/></svg> ') center/contain no-repeat;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("https://cdn.builder.io/api/v1/image/assets/TEMP/830dd8ecce25fb8bd10bcdbf75eed3c49f5b6850d743e825901545e6b6d2d73f?apiKey=a40657fc968849b792f41a6de08326ed&") no-repeat;
    background-size: cover;
  }


  &:before {
    animation: kenburns-top 20s ease-in-out infinite;
    animation-play-state: running;
  }

  &.animation-stopped:before {
    animation-play-state: paused;
  }

}

@keyframes kenburns-top {
  0% {
    transform: scale(1) translateY(0);
  }
  50% {
    transform: scale(1.7) translateX(-20%);
    transform-origin: bottom;
  }
  100% {
    transform: scale(1) translateY(0);
  }
}

.image-container {
  width: 100%;
  height: 100%;
}

.masked-image {
  clip-path: url(#clip);
}

.list-item-element {
  font-size: clamp(1.25rem, 1.0486rem + 0.8264vw, 1.875rem);
  line-height: 1;
}

.form-title {
  font-size: clamp(1.25rem, 0.6457rem + 2.4793vw, 3.125rem);
}

.gradient-box {
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.2) 0%, rgba(146, 191, 198, 0.2) 100%);

  @include media-min(768px) {
    background: none;
  }
}

.phone-clamp {
  font-size: clamp(1.125rem, 0.3173rem + 1.6827vw, 2rem);
}

.banner-title {
  font-size: clamp(1.25rem, 0.6457rem + 2.4793vw, 3.125rem);
  font-weight: bold;
  color: white;
  background: url("data:image/svg+xml,%3Csvg width='291' height='114' viewBox='0 0 291 114' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30C0 13.4315 13.4315 0 30 0H141.5C150.613 0 158 7.3873 158 16.5C158 25.6127 165.387 33 174.5 33H261C277.569 33 291 46.4315 291 63V84C291 100.569 277.564 114 260.995 114C178.904 114 112.096 114 30.0047 114C13.4361 114 0 100.569 0 84V30Z' fill='%23EC1A3B'/%3E%3C/svg%3E") center no-repeat;
  background-size: contain;

  @include media-min(768px) {
    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 1040 186' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1040 40C1040 17.9086 1022.09 0 1000 0H40C17.9086 0 0 17.9086 0 40V76V96V146C0 168.091 17.9086 186 40 186H658C680.091 186 698 168.091 698 146V136C698 113.909 715.909 96 738 96H1000C1022.09 96 1040 78.0914 1040 56V40Z' fill='%23ED1B3B'/%3E%3C/svg%3E%0A") center no-repeat;
  }

  .line {
    position: relative;
    display: inline-block;
    line-height: 1;
  }

  .line:first-child {
    border-radius: 15px 15px 15px 0;
  }

  .line:last-child {
    border-radius: 0 15px 15px 15px;
  }

  .line:not(:first-child):not(:last-child) {
    border-radius: 0 15px 15px 0;
  }

  .line-shorter {
    border-top-right-radius: 0 !important;
  }
}

.focused-select {
  transition: box-shadow .3s ease-in-out;
}

.input-transition {
  transition: box-shadow .3s ease-in-out;
}
</style>
