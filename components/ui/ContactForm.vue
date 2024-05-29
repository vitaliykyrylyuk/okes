<script setup>
import { ref } from 'vue'

const showOptions = ref(false);
const optionContainer = ref(null);

const submitted = ref(false)

const currentOption = ref('Wybierz interesującą pozycję');

const options = ref([
  { message: 'Sekretarka', },
  { message: 'Księgowa', },
  { message: 'Brygadzista magazynu', },
  { message: 'Pracownik magazynu', },
  { message: 'Kierowców samochodów ciężarowych', },
  { message: 'Sprzedawca' }
])
</script>

<template>
  <section class="self-center max-w-[1340px] px-5 pt-8 pb-5 md:p-10 lg:px-16 lg:py-28 bg-white rounded-t-[30px] rounded-b-[60px] md:rounded-t-[50px] md:rounded-b-[50px] drop-shadow-[0_30px_150px_rgba(146,191,198,0.5)]">
    <div class="flex gap-5 max-md:flex-col max-md:gap-0">
      <div class="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
        <article class="flex flex-col self-stretch my-auto">
          <h2 class="form-title font-bold text-black mb-7">
            Dołącz do naszego zespołu i rozwijaj się <br class="hidden md:inline"> razem z nami!
          </h2>
          <p v-if="!submitted" class="text-xs md:text-lg md:leading-7 text-neutral-400 mb-7 leading-normal">
            Aby uzyskać szczegółowe informacje na temat wakatu i złożyć
            aplikację, prosimy zostawić swoje dane kontaktowe poniżej, a
            skontaktujemy się z Państwem w najbliższym czasie.
          </p>
          <p v-if="submitted" class="text-xs md:text-lg md:leading-7 text-neutral-400 mb-7 leading-normal">
            Dziękujemy za przesłanie
            zgłoszenia!
            Twój udział w procesie rekrutacji jest dla nas bardzo ważny. Skontaktujemy się z Tobą w najbliższym czasie, aby omówić szczegóły dotyczące Twojej aplikacji.
            <br><br>
            Jeśli masz jakiekolwiek pytania lub potrzebujesz dodatkowych informacji na temat oferty pracy, prosimy o kontakt. Jesteśmy tu, aby Ci pomóc!
            <br><br>
            Pozdrawiamy,
            Zespół rekrutacyjny OKes sp. z o.o.
          </p>
        </article>
      </div>
      <aside class="flex flex-col ml-5 w-full md:w-2/5 max-md:ml-0 md:min-w-[400px]">
        <form @submit="submitted = true" v-if="!submitted" class="flex flex-col grow p-8 md:py-14 w-full text-base text-black bg-zinc-800 rounded-[50px] md:rounded-[40px]">
          <input
              type="tel"
              id="phoneInput"
              placeholder="Telefon"
              class="placeholder-black input-transition justify-center text-xs md:text-lg items-start px-10 py-5 bg-white rounded-full max-md:px-5 h-[62px] !outline-none ring-inset focus:ring-2 ring-[#e11d48] ring-offset-0"
              aria-label="Telefon"
              required
          />
          <input
              type="text"
              id="nameInput"
              placeholder="Imię i nazwisko"
              class="placeholder-black input-transition justify-center text-xs md:text-lg items-start px-10 py-5 bg-white rounded-full mt-8 max-md:px-5 h-[62px] !outline-none ring-inset focus:ring-2 ring-[#e11d48] ring-offset-0"
              aria-label="Imię i nazwisko"
              required
          />
          <div class="relative h-[95px]">
            <div class="absolute w-full">
              <div ref="optionContainer" tabindex="-1" @focusin="showOptions = true" @focusout="showOptions = false" :class="{'focused-select': showOptions}"
                   class="z-20 input-transition input-transition-delay relative flex flex-wrap justify-center text-xs w-full md:text-lg items-center px-10 bg-white rounded-[30px] mt-8 max-md:px-5 h-[62px] focus:h-auto !outline-none ring-inset focus:ring-2 ring-[#e11d48] ring-offset-0">
                <div class="flex w-full justify-between items-center py-4">
                  <label for="positionInput" class="flex-auto text-xs md:text-lg overflow-hidden text-ellipsis whitespace-nowrap">{{currentOption}}</label>
                  <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="transition" :fill="showOptions ? '#D9D9D9': '#999999'" d="M6.42207 5.58226C6.18827 5.81366 5.81173 5.81366 5.57793 5.58226L0.974905 1.02644C0.593923 0.649369 0.860941 -1.20383e-06 1.39698 -1.15067e-06L10.603 -2.37709e-07C11.1391 -1.8455e-07 11.4061 0.64937 11.0251 1.02645L6.42207 5.58226Z" />
                  </svg>
                </div>
                <div v-show="showOptions" class="options w-full -mt-1 left-0 pb-5">
                  <ul class="text-neutral-400 space-y-4 md:space-y-1.5">
                    <li class="cursor-pointer transition hover:text-black" @click="currentOption = item.message; optionContainer.blur()" v-for="(item, index) in options">
                      {{ item.message }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <label class="flex items-center gap-5 self-center mt-8 text-xs md:text-lg leading-5 text-center text-neutral-400">
                <span class="flex px-[3px] shrink-0 justify-center items-center w-[20px] h-[20px] bg-white rounded" tabindex="-1">
                  <input type="checkbox" class="peer hidden" checked="">
                  <img class="peer-checked:hidden aspect-[1.41] fill-rose-600" loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/632b6ef6c030cc93f997a9fa808afdc0fd3264d277bcfd2034a60b882c7915ba?apiKey=a40657fc968849b792f41a6de08326ed&" alt="" />
                </span>
            <span class="flex-auto my-auto text-xs">
                  Zgadzam się z <span class="underline">Polityką Prywatności</span>.
                </span>
          </label>
          <button type="submit" class="justify-center items-center whitespace-nowrap px-16 mt-8 pb-1 text-xl font-bold leading-8 text-center text-white transition bg-[#EC1A3B] hover:bg-[#FF4260] rounded-full max-md:px-5 h-[64px]">
            Zostaw zapytanie
          </button>
        </form>
        <svg v-if="submitted" class="m-auto max-w-[350px]" viewBox="0 0 336 204" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="left-to-right">
              <stop offset="0" stop-color="#A1CD75">
                <animate dur="1s" attributeName="offset" fill="freeze" from="0" to="1" />
              </stop>
              <stop offset="0" stop-color="#fff">
                <animate dur=".5s" attributeName="offset" fill="freeze" from="0" to="1" />
              </stop>
            </linearGradient>
          </defs>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M234 3.9987C239.966 9.23935 240.209 17.9958 235 23.9987L85.0003 196.999C82.2771 200.136 78.1409 201.999 74.0003 201.999C69.8595 201.999 66.7236 200.136 64.0003 196.999L4.00032 127.999C-1.20814 121.994 -0.965866 112.239 5.00033 106.999C10.9663 101.758 19.7919 102.994 25.0003 108.999L74.0003 165.999L214 4.9987C219.209 -1.00436 228.033 -1.24195 234 3.9987Z" fill="url(#left-to-right)"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M330.999 4.99883C336.74 10.4946 336.469 19.2284 330.999 24.9988L166.999 198.999C164.099 202.06 160.198 203.232 155.999 202.999C151.801 202.766 147.547 200.362 144.999 196.999L136.999 185.999C132.197 179.66 133.692 170.826 139.999 165.999C145.419 161.851 152.973 162.807 157.999 166.999L309.999 4.99883C315.469 -0.771454 325.257 -0.496926 330.999 4.99883Z" fill="url(#left-to-right)"/>
        </svg>
      </aside>
    </div>
  </section>
</template>
